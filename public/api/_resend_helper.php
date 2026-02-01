<?php
/**
 * Shared Resend Helper for PHP (Hostinger)
 */

// 1. SET CORS HEADERS IMMEDIATELY
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origins = [
    'https://united-ffv.com',
    'https://www.united-ffv.com',
    // Allow local testing if needed
];

if (in_array(rtrim($origin, '/'), $allowed_origins) || empty($origin)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: " . $allowed_origins[0]);
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// 2. HANDLE PREFLIGHT
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

/**
 * Sends an email via Resend API
 */
function send_resend_email($api_key, $payload) {
    if (empty($api_key)) {
        return ['error' => 'Missing Resend API Key'];
    }

    $ch = curl_init('https://api.resend.com/emails');
    
    $json_payload = json_encode($payload);
    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $api_key,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_errno($ch)) {
        $error_msg = curl_error($ch);
        curl_close($ch);
        return ['error' => 'Curl Error: ' . $error_msg];
    }
    
    curl_close($ch);
    
    $result = json_decode($response, true);
    
    if ($http_code >= 200 && $http_code < 300) {
        return ['success' => true, 'data' => $result];
    } else {
        return ['error' => $result['message'] ?? 'Resend API error', 'code' => $http_code];
    }
}

/**
 * Simple Honeypot Validation
 */
function validate_honeypot($data) {
    if (!empty($data['_company_id_verification'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Spam detected']);
        exit();
    }
}
?>

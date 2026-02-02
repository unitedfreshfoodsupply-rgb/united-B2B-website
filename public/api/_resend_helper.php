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
 * Using file_get_contents instead of curl for better Hostinger compatibility
 */
function send_resend_email($api_key, $payload) {
    if (empty($api_key)) {
        return ['error' => 'Missing Resend API Key'];
    }

    $json_payload = json_encode($payload);
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => [
                'Authorization: Bearer ' . $api_key,
                'Content-Type: application/json',
            ],
            'content' => $json_payload,
            'timeout' => 30,
            'ignore_errors' => true, // Get response even on error codes
        ]
    ];
    
    $context = stream_context_create($options);
    $response = @file_get_contents('https://api.resend.com/emails', false, $context);
    
    if ($response === false) {
        $error = error_get_last();
        return ['error' => 'Connection Error: ' . ($error['message'] ?? 'Unable to reach Resend API')];
    }
    
    // Extract HTTP response code
    $http_code = 500;
    if (isset($http_response_header)) {
        foreach ($http_response_header as $header) {
            if (preg_match('/^HTTP\/\d\.\d\s+(\d+)/', $header, $matches)) {
                $http_code = (int)$matches[1];
                break;
            }
        }
    }
    
    $result = json_decode($response, true);
    
    if ($http_code >= 200 && $http_code < 300) {
        return ['success' => true, 'data' => $result];
    } else {
        return ['error' => $result['message'] ?? 'Resend API error', 'code' => $http_code, 'raw_response' => $response];
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

<?php
require_once '_resend_helper.php';

// Configuration
$RESEND_API_KEY = 'REDACTED_RESEND_API_KEY'; // Correct new key

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// 1. Honeypot Check
validate_honeypot($data);

// 2. Prepare Payload
$company = $data['company'] ?? 'Not provided';
$name = $data['name'] ?? 'Not provided';
$email = $data['email'] ?? '';
$categories = $data['categories'] ?? [];
$categories_str = is_array($categories) ? implode(', ', $categories) : $categories;

$html_body = "
    <h2>New Request For Quotation (RFQ)</h2>
    <p><strong>Company:</strong> $company</p>
    <p><strong>Contact Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> " . ($data['phone'] ?? 'N/A') . "</p>
    <p><strong>Categories:</strong> $categories_str</p>
    <p><strong>Requirements:</strong></p>
    <p>" . nl2br(htmlspecialchars($data['requirements'] ?? 'No specific requirements PROVIDED.')) . "</p>
";

$resend_payload = [
    'from' => 'UNITED Supply HUB <system@united-ffv.com>',
    'to' => ['sales-team@united-ffv.com'],
    'subject' => "New RFQ: $company",
    'html' => $html_body,
    'replyTo' => $email
];

// 3. Send Email
$result = send_resend_email($RESEND_API_KEY, $resend_payload);

if (isset($result['success'])) {
    echo json_encode(['success' => true, 'message' => 'RFQ submitted successfully']);
} else {
    http_response_code($result['code'] ?? 500);
    echo json_encode(['error' => $result['error']]);
}
?>

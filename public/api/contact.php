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
// Note: We are mimicking the structure used in the original template logic
$subject = $data['subject'] ?? 'Brand Inquiry / Support';
$fullName = $data['fullName'] ?? 'Not provided';
$entityName = $data['entityName'] ?? 'Not provided';
$email = $data['email'] ?? '';
$payload_text = $data['payload'] ?? '';

$html_body = "
    <h2>New Contact Inquiry</h2>
    <p><strong>Name:</strong> $fullName</p>
    <p><strong>Entity/Company:</strong> $entityName</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Subject:</strong> $subject</p>
    <hr>
    <p><strong>Message:</strong></p>
    <p>" . nl2br(htmlspecialchars($payload_text)) . "</p>
";

$resend_payload = [
    'from' => 'UNITED Support <system@united-ffv.com>',
    'to' => ['support@united-ffv.com'],
    'subject' => "Support Inquiry: $subject",
    'html' => $html_body,
    'replyTo' => $email
];

// 3. Send Email
$result = send_resend_email($RESEND_API_KEY, $resend_payload);

if (isset($result['success'])) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code($result['code'] ?? 500);
    echo json_encode(['error' => $result['error']]);
}
?>

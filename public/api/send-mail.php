<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        echo json_encode(["success" => false, "message" => "No data received"]);
        exit;
    }

    // Honeypot check
    if (!empty($data['_company_id_verification'])) {
        echo json_encode(["success" => false, "message" => "Spam detected"]);
        exit;
    }

    $type = isset($data['formType']) ? $data['formType'] : 'contact';
    $to = ($type === 'rfq') ? 'sales-team@united-ffv.com' : 'support@united-ffv.com';
    $subject = ($type === 'rfq') ? "New RFQ: " . ($data['company'] ?? 'Client') : "Support Inquiry: " . ($data['subject'] ?? 'No Subject');

    // Build Email Body
    $message = "Uniteda Supply Hub - New Submission\r\n";
    $message .= "----------------------------------\r\n";
    foreach ($data as $key => $value) {
        if ($key[0] !== '_' && $key !== 'formType') {
            $label = strtoupper(str_replace(['_', 'camel'], ' ', $key));
            if (is_array($value)) $value = implode(", ", $value);
            $message .= "$label: $value\r\n";
        }
    }
    $message .= "----------------------------------\r\n";
    $message .= "Generated: " . date("Y-m-d H:i:s") . "\r\n";

    $headers = "From: system@united-ffv.com\r\n";
    $headers .= "Reply-To: " . ($data['email'] ?? 'noreply@united-ffv.com') . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "PHP mail() function failed. Check server logs."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>

<?php
/**
 * Waiting List API - Resend Integration
 * 
 * This file handles waiting list submissions and sends notification emails via Resend API.
 * Upload this to your cPanel server in the 'api' folder.
 * 
 * IMPORTANT: Replace 'YOUR_RESEND_API_KEY' with your actual Resend API key
 * Get your API key from: https://resend.com/api-keys
 */

// CORS Headers - Allow requests from your domain
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // In production, replace * with your actual domain
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================
$RESEND_API_KEY = 're_MkgHzQ8V_JLbfnxcaGDH6gLbNdjUYn2o6'; // Get from https://resend.com/api-keys
$TO_EMAIL = 'support@notiongo.app';       // Your email to receive notifications
$FROM_EMAIL = 'waitlist@notiongo.app';    // Must be from a verified domain in Resend
// ============================================

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate email field
if (empty($data['email'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Email is required']);
    exit();
}

// Sanitize and validate email
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Get current timestamp
$timestamp = date('Y-m-d H:i:s');
$date = date('F j, Y');
$time = date('g:i A');

// Build email HTML content
$htmlContent = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; }
        .highlight { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0; text-align: center; }
        .email-badge { background: #6366f1; color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; display: inline-block; }
        .stats { background: #e0e7ff; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1 style='margin: 0; font-size: 24px;'>🎉 New Waiting List Signup!</h1>
            <p style='margin: 10px 0 0 0; opacity: 0.9;'>NotionGo Landing Page</p>
        </div>
        <div class='content'>
            <div class='highlight'>
                <h2 style='margin: 0 0 10px 0; color: #1e293b;'>New Subscriber</h2>
                <div class='email-badge'>$email</div>
            </div>
            
            <div class='stats'>
                <h3 style='margin: 0 0 10px 0; color: #1e293b; font-size: 16px;'>📊 Signup Details</h3>
                <p style='margin: 5px 0;'><strong>Date:</strong> $date</p>
                <p style='margin: 5px 0;'><strong>Time:</strong> $time</p>
                <p style='margin: 5px 0;'><strong>Source:</strong> NotionGo Landing Page</p>
            </div>
            
            <div style='background: #f0f9ff; border: 1px solid #0ea5e9; padding: 15px; border-radius: 8px; margin: 20px 0;'>
                <p style='margin: 0; color: #0369a1;'><strong>💡 Next Steps:</strong></p>
                <ul style='margin: 10px 0 0 0; color: #0369a1;'>
                    <li>Add to your email marketing list</li>
                    <li>Send welcome/confirmation email</li>
                    <li>Track engagement for launch updates</li>
                </ul>
            </div>
        </div>
        <div class='footer'>
            This notification was sent from the NotionGo waiting list form.
        </div>
    </div>
</body>
</html>
";

// Plain text version
$textContent = "🎉 New Waiting List Signup!\n\n";
$textContent .= "Email: $email\n";
$textContent .= "Date: $date at $time\n";
$textContent .= "Source: NotionGo Landing Page\n\n";
$textContent .= "Next Steps:\n";
$textContent .= "- Add to your email marketing list\n";
$textContent .= "- Send welcome/confirmation email\n";
$textContent .= "- Track engagement for launch updates\n";

// Prepare Resend API request
$resendData = [
    'from' => "NotionGo Waitlist <$FROM_EMAIL>",
    'to' => [$TO_EMAIL],
    'reply_to' => $email,
    'subject' => "🚀 New NotionGo Waiting List Signup - $email",
    'html' => $htmlContent,
    'text' => $textContent,
    'tags' => [
        ['name' => 'category', 'value' => 'waitlist'],
        ['name' => 'source', 'value' => 'landing_page']
    ]
];

// Send email via Resend API
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => 'https://api.resend.com/emails',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($resendData),
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $RESEND_API_KEY,
        'Content-Type: application/json'
    ]
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Handle errors
if ($curlError) {
    error_log("Waiting List API - cURL Error: " . $curlError);
    http_response_code(500);
    echo json_encode(['error' => 'Failed to process signup. Please try again.']);
    exit();
}

$responseData = json_decode($response, true);

if ($httpCode >= 200 && $httpCode < 300) {
    // Log successful signup (you might want to store this in a database)
    error_log("Waiting List Signup: $email at $timestamp");
    
    echo json_encode([
        'success' => true,
        'message' => 'Successfully joined the waiting list!',
        'email' => $email,
        'timestamp' => $timestamp
    ]);
} else {
    error_log("Waiting List API - Resend Error: " . json_encode($responseData));
    http_response_code($httpCode >= 400 ? $httpCode : 500);
    echo json_encode([
        'error' => 'Failed to process signup. Please try again.',
        'details' => $responseData['message'] ?? 'Unknown error'
    ]);
}
?>
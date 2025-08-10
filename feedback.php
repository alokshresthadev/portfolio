<?php
// feedback.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $feedback = $_POST['feedback'] ?? '';
    
    // Handle file upload without validation
    if (isset($_FILES['uploaded_file'])) {
        $upload_dir = __DIR__ . '/uploads/';
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0755, true);
        }
        
        $filename = basename($_FILES['uploaded_file']['name']);
        $target_file = $upload_dir . $filename;
        
        // Move uploaded file WITHOUT validation or sanitization
        if (move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $target_file)) {
            echo "File uploaded successfully: <a href='uploads/$filename'>$filename</a><br>";
        } else {
            echo "Failed to upload file.<br>";
        }
    }
    
    echo "Feedback received: " . htmlspecialchars($feedback);
}
?>
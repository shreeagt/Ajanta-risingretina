<?php
include 'dbconnection.php';
// Get email address from form submission
$email = $_POST['email'];

// Insert email into database
$sql = "INSERT INTO emails (email_address) VALUES ('$email')";

if (mysqli_query($conn, $sql)) {
    // echo "Email address added successfully.";
    header("location: ./index.html");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>
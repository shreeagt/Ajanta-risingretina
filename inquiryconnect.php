<?php
include ('dbconnection.php');  




// Verify the reCAPTCHA response
$recaptcha_response = $_POST['g-recaptcha-response'];
$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = array(
  'secret' => '6LfFj0klAAAAANRFWiBBVVEIwv4visNrLh0jOpE4',
  'response' => $recaptcha_response
);
$options = array(
  'http' => array (
    'method' => 'POST',
    'content' => http_build_query($data)
  )
);
$context  = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$captcha_success = json_decode($verify);

// Check if the reCAPTCHA was successful
if (!$captcha_success->success) {
  // The reCAPTCHA was not successful, display an error message
  echo '<p>Please check the reCAPTCHA box and try again.</p>';
  exit;
}

// The reCAPTCHA was successful, continue with form processing
// ...

$name = $_POST['name'];

$age = $_POST['age'];
$ageunit = $_POST['ageunit'];
$address = $_POST['address'];
$city = $_POST['city'];
$pincode = $_POST['pincode'];
$contactno = $_POST['contactno'];
$email = $_POST['email'];
$inquiryType = $_POST['inquiry_type'];
$details = $_POST['details'];

$sql = "INSERT INTO inquiry (name, age, ageunit, address, city, pincode, contactno, email, inquiry_type, details)
VALUES ('$name', '$age', '$ageunit', '$address', '$city', '$pincode', '$contactno', '$email', '$inquiryType', '$details')";

if ($conn->query($sql) === TRUE) {

    ?>

    <script>
        // alert("Form submitted successfully");
        window.location.href = "inquiry.php?msg=Form submitted successfully";
    </script>
<?php
  echo "Form submitted successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
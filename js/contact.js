$(document).ready(function () {
    $('.contact-form').on('submit', function (e) {
       e.preventDefault();
       var name = $.trim($('input[name="name"]').val());
       var email = $.trim($('input[name="email"]').val());
       var phone = $.trim($('input[name="contactno"]').val());
       var age = $.trim($('input[name="age"]').val());
       // Validate the email using a regular expression
       if (!isValidEmail(email)) {
          $('.labelError.email').html('<span class="error-message">Please enter valid email</span>').show();
          fadeOutError('.labelError.email');
          return;
       } else {
          $('.labelError.email').hide();
       }

       if (!isValidPhone(phone)) {
          $('.labelError.phone_number').html('<span class="error-message">Please enter a valid 10-digit phone number</span>').show();
          fadeOutError('.labelError.phone_number');
          return;
       } else {
          $('.labelError.phone_number').hide();
       }

       var formData = $(this).serialize();
       $.ajax({
          url: '/contact', // Change this URL to match your route
          type: 'POST',
          data: formData,
          success: function (response) {
                console.log('Form submitted successfully:', response.message);
          },
          error: function (error) {
                console.error('An error occurred:', error);
          }
       });

       function isValidEmail(email) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
       }

       // Function to validate phone number using a regular expression for exactly 10 digits
       function isValidPhone(phone) {
          var phoneRegex = /^\d{10}$/;
          return phoneRegex.test(phone);
       }
    });
 });
$(document).ready(function () {
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();
        var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        var doctor_id = 6;
        var name = $.trim($('input[name="name"]').val());
        var email = $.trim($('input[name="email"]').val());
        var phone = $.trim($('input[name="phone"]').val());
        var subject = "Contact Added by User";
        var message = "Contact Added by User";
        var age = $.trim($('input[name="age"]').val());
        var city = $.trim($('input[name="city"]').val());
        var addtional_phone = $.trim($('input[name="addtional_phone"]').val());
        // var subject = $.trim($('input[name="subject"]').val());
        // var message = document.getElementById('message').value;

        // Validate the email using a regular expression
        var doctorToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjMyMDdiNGVmYzQzNmM0NTQxYWU3MGUyNmFkZjlhMTdmNjU1MTJhMjE3MTY0ZWVhZjc5MTY5NDNkMGZjZDczNGY1ZjZjMmM5NTExMzJmNjMiLCJpYXQiOjE3MDI5OTg1MTMuMzU2Njc5LCJuYmYiOjE3MDI5OTg1MTMuMzU2NjgxLCJleHAiOjE3MzQ2MjA5MTMuMzQ4MDU1LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.tr3xYX4G2vKt9kKLE_qW0ta6_Je368WGaPHwi5ricsxH5frsMuSf3qVPgWjMnNEv3xEPvVqk4DKm6lbyB6Dx0YxGA_da4Er0VGaIq1ecrc01NUocZKvKcl-VUdPvoK50OcajAsTSN-sWdSUhD9XZOvoXeZoqvT-u5LFwSmCTvSSbovMrRiur6cyxb2O0YRp7hGoxk7TqfguZ1aAjBCBpm1k-VoEzJu9ldcf2dP2GbNuYnKDTlsS93w7ow30s-u-c6s9hYGQNAEK0auKPiVuHWUptFi5mdK6H43SYBeftBHP4n3PeTcP44YIgtnrLCm-LhMfc4HbbFfOkcOqP0oZQXS9l4LV7ozLpPHyvDau8rVx4l0yGNAvvtodYH9-fC636dzPDirvYl9XQstk-oRl-qLnwxJcJfr1mB9oYs19SLilWdm6xgaE-iWO5SnnIawGaMCKu_wB9-RcykuaJWJpEs_kfTSmq3V6_bWsiTVzLTWWqORPVjwY3a5wx5OW33tylZxjVmGVCSoO7BHcpOiUsBi8eQQ2kWowypxIePOziXxEOAVCOYdxymAHBvxj4h7QE-O-hOnNb1p5gAhkgzLCyBgQ_ocj8nUQA5X6ku0uHX9rj2GsgccLNc1EOr8itI1NOp2YoSX2_1--6LB6Tf00IdR2iLmAhvcnpO5OlZ9uyD7Q';


        var formData = {
            doctor_id: doctor_id,
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
            field1:age,
            field2:city,
            field3:addtional_phone,
            // subject: subject,
            // message: message,
        }
        $.ajax({
            // url: '/new-user',
            url: 'https://doctordunia.com/api/contact_us',  // Change this URL to match your route
            type: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                'Authorization': 'Bearer ' + doctorToken,
            },
            success: function (response) {

                $('#customModal').css('display', 'block');

                // Hide the modal after 2 seconds
                setTimeout(function () {
                    $('#customModal').fadeOut();
                    location.reload();
                }, 2000);

                console.log(response.success, 'success');

            },
            error: function (error) {
                console.error('An error occurred:', error);

            }
        });



        // Function to validate phone number using a regular expression for exactly 10 digits

    });
});
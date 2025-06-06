
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("kvGtQ5x34hqCYED-T");
    })();

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Prepare template parameters
        const templateParams = {
            to_name: 'Developer',
            to_email: email,
            from_name: name,
            from_email: email,
            phone_number: number,
            subject: subject,
            message: message,
            reply_to: email
        };

        // Show loading state
        const submitButton = event.target.querySelector('input[type="submit"]');
        const originalText = submitButton.value;
        submitButton.value = 'Sending...';
        submitButton.disabled = true;

        // Log the parameters being sent
        console.log('Sending email with parameters:', templateParams);

        // Send email using EmailJS
        emailjs.send('service_5x7mezv', 'template_jq3g6kt', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully! Check your email.');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.error('FAILED...', error);
                console.error('Error details:', {
                    status: error.status,
                    text: error.text,
                    params: templateParams
                });
                alert('Failed to send message. Error: ' + error.text);
            })
            .finally(function() {
                // Reset button state
                submitButton.value = originalText;
                submitButton.disabled = false;
            });


            emailjs.send('service_5x7mezv', 'template_2ati1jd', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // alert('Message sent successfully! Check your email.');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.error('FAILED...', error);
                console.error('Error details:', {
                    status: error.status,
                    text: error.text,
                    params: templateParams
                });
                // alert('Failed to send message. Error: ' + error.text);
            })
            .finally(function() {
                // Reset button state
                submitButton.value = originalText;
                submitButton.disabled = false;
            });



    });

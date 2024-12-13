document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (email) {
        // Create a mailto link and trigger it
        const mailtoLink = `mailto:jayeshkalkate432@gmail.com?subject=Newsletter Subscription&body=New subscriber email: ${email}`;
        window.location.href = mailtoLink;

        alert(`Thank you for subscribing with the email: ${email}`);
        document.getElementById('email').value = ''; // Clear the input field after submission
    } else {
        alert('Please enter a valid email address.');
    }
});

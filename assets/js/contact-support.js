// JavaScript for Newsletter Subscription Form
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (email) {
        alert(`Thank you for subscribing with the email: ${email}`);
        document.getElementById('email').value = ''; // Clear the input field after submission
    } else {
        alert('Please enter a valid email address.');
    }
});

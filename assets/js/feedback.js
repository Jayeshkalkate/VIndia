// Initialize EmailJS with your user ID
emailjs.init("vW7Q6P2TmJl2w2avY"); // Replace with your EmailJS user ID

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Send the form data to EmailJS
    emailjs.sendForm('service_1rx78j9', 'template_795yyvi', this)
        .then(() => {
            // Display a success message
            document.getElementById("successMessage").classList.remove("hidden");

            // Optionally clear the form
            this.reset();
        }, (error) => {
            // Handle error
            console.error("Failed to send feedback:", error);
            alert("There was an issue sending your feedback. Please try again.");
        });
});

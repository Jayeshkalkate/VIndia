// terms-or-service.js

document.addEventListener("DOMContentLoaded", function() {
    const termsContent = document.querySelector('.content');
    
    // Adding smooth scroll effect to sections
    const sections = termsContent.querySelectorAll('h2');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert('You have clicked on a section.');
        });
    });
});

// Optional: Add interactivity, like hover effects, etc.
document.querySelectorAll('.logo-item img').forEach(image => {
    image.addEventListener('click', function() {
      alert(`You clicked on the ${image.alt} logo.
Now you are visit on the ${image.alt} website !`);
    });
  });
  
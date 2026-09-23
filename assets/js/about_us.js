document.getElementById('learnMoreBtn').addEventListener('click', function() {
    // Find the element where you want to add the new content
    const aboutSection = document.querySelector('.about-section');

    // Create the new content with proper HTML formatting
    const newInfo = document.createElement('div');
    
    // Add the content as HTML (with line breaks and paragraphs)
    newInfo.innerHTML = `
        <p><strong>About VIndia</strong></p>
        <p>Welcome to VIndia, your ultimate destination for everything related to vehicles in India. Whether you're a car enthusiast, a bike lover, or just someone looking for reliable vehicle information, we’ve got you covered. Our mission is simple: to offer clear, accurate, and easy-to-understand facts about the vehicles that are shaping India’s roads.</p>
        
        <p><strong>What We Do:</strong></p>
        <ul>
            <li><strong>In-Depth Vehicle Reviews:</strong> Get detailed insights on the latest cars, bikes, and commercial vehicles in India.</li>
            <li><strong>News & Updates:</strong> Stay up to date with the latest trends, launches, and innovations in the automotive industry.</li>
            <li><strong>Buying Guides:</strong> Making the right vehicle choice has never been easier with our comprehensive guides.</li>
            <li><strong>Historical Insights:</strong> Explore the evolution of vehicles in India and discover the iconic models that have changed the way we travel.</li>
            <li><strong>Expert Opinions:</strong> Benefit from expert reviews and recommendations to help you make informed decisions.</li>
        </ul>
        
        <p><strong>Why VIndia?</strong></p>
        <ul>
            <li><strong>Reliable & Accurate Information:</strong> We pride ourselves on providing facts that you can trust.</li>
            <li><strong>Easy-to-Understand Content:</strong> Our goal is to make vehicle information accessible for everyone.</li>
            <li><strong>Passionate About Vehicles:</strong> We love everything about vehicles in India, and we’re here to share that passion with you.</li>
        </ul>

        <p>Whether you're researching your next vehicle or simply curious about the automotive world, VIndia is here to guide you every step of the way. Join us as we explore the diverse and exciting world of vehicles in India!</p>
    `;

    // Optionally, you can add a new heading for more structured information
    const newHeading = document.createElement('h3');
    newHeading.textContent = "Our Mission";

    // Append the new heading and content to the .about-section
    aboutSection.appendChild(newHeading);
    aboutSection.appendChild(newInfo);

    // Optionally, you can show an alert or just hide the button after it's clicked
    alert("Thank you for showing interest! More details have been added to the page.");
    document.getElementById('learnMoreBtn').style.display = 'none'; // Hides the button after it's clicked
});

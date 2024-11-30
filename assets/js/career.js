// Mock job postings
const jobPostings = [
    {
        title: 'Software Engineer',
        description: 'Develop and maintain software solutions for the automotive industry.',
        location: 'Nandurabar, India'
    },
    {
        title: 'Marketing Manager',
        description: 'Lead marketing campaigns and brand management strategies.',
        location: 'Jalgaon, India'
    },
    {
        title: 'Product Designer',
        description: 'Design innovative vehicle concepts and user interfaces.',
        location: 'Nanded, India'
    }
];

// Function to load job postings
function loadJobPostings() {
    const jobListElement = document.getElementById('job-list');
    jobListElement.innerHTML = ''; // Clear existing job listings
    jobPostings.forEach((job) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.title}</strong><p>${job.description}</p><small>Location: ${job.location}</small>`;
        jobListElement.appendChild(li);
    });
}

// Call the function to load job postings on page load
window.onload = loadJobPostings;

// Form submission handler
document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Handle form data here (e.g., send it to a server)
    alert('Your application has been submitted!');
    document.getElementById('job-form').reset();
});

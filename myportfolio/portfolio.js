document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Project 1",
            description: "A web application built using React.",
            link: "main.html" // Link to the new project page
        },
        {
            title: "Project 2",
            description: "A mobile app developed with Flutter.",
            link: "https://example.com/project2"
        },
        {
            title: "Project 3",
            description: "A personal blog created with WordPress.",
            link: "https://example.com/project3"
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectItem);
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        this.reset(); // Reset form after submission
    });

    // Download Resume Functionality
    document.getElementById('download-resume').addEventListener('click', function() {
        const resumeLink = 'Myprofile\myportfolio\files\manjunath Dwaram-resume.pdf'; // Update with the correct path
        const link = document.createElement('a');
        link.href = resumeLink;
        link.download = 'manjunath Dwaram-resume.pdf'; // Specify the name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

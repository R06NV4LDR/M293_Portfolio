document.addEventListener('DOMContentLoaded', function() {
    const projectId = new URLSearchParams(window.location.search).get('projectId');
    fetchProjectDetails(projectId);
});

function fetchProjectDetails(projectId) {
    // Example: Fetch project details based on projectId
    // This could be from a JSON file, an API, or a JavaScript object
    const projectDetails = {
        1: {
            title: "Project 1",
            description: "This is a detailed description of Project 1.",
            technologies: ["HTML", "CSS", "JavaScript"],
            // Other details
        },
        // Add other projects here
    };

    const project = projectDetails[projectId];
    if (project) {
        document.getElementById('projectDetail').innerHTML = `
            <h1>${project.title}</h1>
            <p>${project.description}</p>
            <p>Technologies Used: ${project.technologies.join(', ')}</p>
            <!-- Add more details as needed -->
        `;
    } else {
        document.getElementById('projectDetail').innerHTML = `<p>Project not found.</p>`;
    }
}
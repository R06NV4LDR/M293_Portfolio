document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = Number(urlParams.get('projectId'));
    fetchProjectDetails(projectId);
});

async function fetchProjectDetails(projectId) {
    const fallbackProjectDetails = {
        1: {
            title: "Project 1",
            description: "This is a detailed description of Project 1.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "image": "assets/img/projects/Kochburg.png",
            "altText": "Kochburg"

        }
    };

    try {
        const response = await fetch(`./assets/projects.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        const project = projects.find(project => project.id === projectId);
        if (project) {
            displayProjectDetails(project);
        } else {
            document.getElementById('projectDetail').innerHTML = `<p>Project not found.</p>`;
        }
    } catch (error) {
        console.error('Error fetching project details:', error);
        const project = fallbackProjectDetails[projectId];
        if (project) {
            displayProjectDetails(project);
        } else {
            document.getElementById('projectDetail').innerHTML = `<p>Error fetching project details.</p>`;
        }
    }
}

function displayProjectDetails(project) {
    let imagesHtml = project.images.map(image =>
        `<div class="project-image">
            <img src="${image.src}" alt="${image.alt}">
        </div>`
    ).join('');

    document.getElementById('projectDetail').innerHTML = `
    <section class="home">
        <div class="project-content">
            <div class="project-info">
                <h1>${project.title}</h1>
                <p>${project.description}</p>
                <p>Technologies Used: ${project.technologies.join(', ')}</p>
                <!-- Add more details as needed -->
            </div>
            <div class="project-image">
                ${imagesHtml}
            </div>
        </div>
    </section>
            `;
}

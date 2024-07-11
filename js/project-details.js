document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = Number(urlParams.get('projectId'));
    fetchProjectDetails(projectId);
});

async function fetchProjectDetails(projectId) {
    const fallbackProjectDetails = {
        1: {
            title: "Project Placeholder",
            description: "This is a detailed description of Project Placeholder.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            images: [
                { src: "assets/img/projects/Kochburg.png", alt: "Kochburg" }
            ]
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
    // Generate HTML for each image slide
    let slidesHtml = project.images.map(image =>
        `<div class="mySlides fade">
            <img src="${image.src}" alt="${image.alt}" style="width:50%">
        </div>`
    ).join('');

    // Check if there's a YouTube video ID and add it as a slide
    if (project.youtubeVideoId) {
        slidesHtml += `
            <div class="mySlides fade">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NuoWX7lTA54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:50%;"></iframe>
            </div>
        `;
    }

    // Add navigation buttons
    slidesHtml += `
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    `;

    // Insert the slides HTML into the slideshow container
    document.getElementById('slideshowContainer').innerHTML = slidesHtml;

    // Insert project details
    document.getElementById('projectDetail').insertAdjacentHTML('afterbegin', `
        <section class="home">
            <div class="project-content">
                <div class="project-info">
                    <h1>${project.title}</h1>
                    <p>${project.description}</p>
                    <h3>Technologies Used:</h3> <p>${project.technologies.join(', ')}</p>
                </div>
            </div>
        </section>
    `);

    // Initialize the slideshow after the slides are inserted into the DOM
    showSlides(slideIndex);
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
}

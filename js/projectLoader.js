// Function to fetch and display projects
function loadProjects() {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => {
        displayProjects(data); // Assuming the excerpt is part of a larger array
      })
      .catch(error => console.error('Error loading projects:', error));
  }
  
  // Function to display projects
  function displayProjects(projects) {
    const container = document.querySelector('.bento-grid');
    container.innerHTML = ''; // Clear existing projects
    projects.forEach(project => {
      const projectElement = `
        <div class="bento-item" data-category="${project.category}">
          <img src="${project.images[0].src}" alt="${project.images[0].altText || project.images[0].alt}" width="100%">
          <div class="project-title">${project.title}</div>
          <a href="${project.link}">Learn More</a>
        </div>
      `;
      container.innerHTML += projectElement;
    });
  }
  
  // Function to filter projects
  function filterProjects(category) {
    fetch('projects.json')
      .then(response => response.json())
      .then(projects => {
        const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);
        displayProjects(filteredProjects);
      })
      .catch(error => console.error('Error filtering projects:', error));
  }
  
  // Initial load of projects
  document.addEventListener('DOMContentLoaded', loadProjects);
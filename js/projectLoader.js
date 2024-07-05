document.addEventListener('DOMContentLoaded', function () {
  fetch('projects.json')
    .then(response => response.json())
    .then(data => {
      const categories = new Set(data.projects.map(project => project.category));
      populateFilters(categories);
      displayProjects(data.projects);
    });

  function populateFilters(categories) {
    const filterContainer = document.getElementById('filter-options');
    categories.forEach(category => {
      const button = document.createElement('button');
      button.textContent = category;
      button.onclick = () => filterProjects(category, data.projects);
      filterContainer.appendChild(button);
    });
  }

  function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear existing projects
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.textContent = project.name; // Customize as needed
      container.appendChild(projectElement);
    });
  }

  function filterProjects(category, projects) {
    const filteredProjects = projects.filter(project => project.category === category);
    displayProjects(filteredProjects);
  }
});
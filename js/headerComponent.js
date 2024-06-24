export default function headerComponent() {
  return <header class="header">
    <a href="" class="logo">RAB.dev</a>

    <div class="bx bx-menu" id="menu-icon"></div>

    <nav class="navbar">
      <a href="/index.html" class="active">Home</a>
      <a href="/about.html">About</a>
      <a href="/skills.html">Skills</a>
      <a href="/projects.html">Projects</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round">
          <i class="fas fa-moon moon-icon"></i>
          <i class="fa-solid fa-sun"></i>
        </div>
      </label>
      <em>Light/Dark Mode!</em>
    </div>
  </header>


    ;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('header-container').innerHTML = headerComponent();
}); 
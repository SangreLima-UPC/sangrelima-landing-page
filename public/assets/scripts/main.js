document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('#main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');
  const currentYear = document.querySelector('#current-year');

  if (navToggle && mainNav) {
    const toggleMenu = () => {
      const isOpen = mainNav.classList.toggle('main-nav--open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    };

    navToggle.addEventListener('click', toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('main-nav--open')) {
          toggleMenu();
        }
      });
    });
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});

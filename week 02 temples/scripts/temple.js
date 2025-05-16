// temples.js

// Toggle hamburger menu
const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('primary-nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '\u2630';
});

// Footer date
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');
const today = new Date();

if (yearSpan) {
  yearSpan.textContent = today.getFullYear();
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
}

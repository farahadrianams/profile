// Select elements from the DOM
const button = document.getElementById('colorBtn');
const menuButton = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const body = document.body;
const navbar = document.querySelector('.navbar');

// Add the glass effect after the page has been scrolled.
const updateNavbar = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
};

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    navbar.classList.remove('menu-open');
};

menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    navbar.classList.toggle('menu-open', !isExpanded);
});

navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 680) closeMenu();
});

// Array of background colors to choose from
const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];

// Add click event listener to the button
button.addEventListener('click', () => {
    // Pick a random color index
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    // Tint the textured background while keeping its grain visible.
    body.style.setProperty('--background-tint', `${colors[randomIndex]}33`);
});

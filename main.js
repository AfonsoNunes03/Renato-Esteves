// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger-toggle');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  });
}

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = hamburger.querySelector('i');
    icon.classList.replace('fa-times', 'fa-bars');
  });
});

// Adding styles for active menu in JS to keep style.css cleaner
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .nav-menu.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      padding: 2.5rem;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      gap: 1.5rem;
      z-index: 1001;
      text-align: center;
    }
  }
`;
document.head.appendChild(style);

// Smooth reveal on scroll (optional utility)
const revealElements = document.querySelectorAll('.animate__animated');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50;
    
    if (isVisible) {
      el.style.visibility = 'visible';
    }
  });
};

// Initial state
revealElements.forEach(el => el.style.visibility = 'hidden');
// Except for initial animations
document.querySelectorAll('.animate__fadeInDown, .animate__fadeIn').forEach(el => el.style.visibility = 'visible');

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger initially

console.log('Renato Esteves Landing Page Loaded - Developed by HARTEG');

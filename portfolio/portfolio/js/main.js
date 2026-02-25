// ============================================
// PORTFOLIO — JavaScript
// You don't need to edit this file!
// ============================================

// --- Mobile nav toggle ---
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// --- Highlight active nav link ---
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('active');
  }
});

// --- Scroll-triggered fade-in animations ---
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// --- Contact form (shows a thank-you message) ---
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // No actual email — just shows thank you
    contactForm.style.display = 'none';
    if (formSuccess) {
      formSuccess.style.display = 'block';
    }
    // To actually send emails, connect a service like Formspree:
    // 1. Go to formspree.io and sign up for free
    // 2. Create a form and get your form ID
    // 3. Change the <form> action to: https://formspree.io/f/YOUR_FORM_ID
    // 4. Remove e.preventDefault() above
  });
}

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Current year in footer ---
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

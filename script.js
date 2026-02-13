document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Optional: Animate hamburger to X
        hamburger.classList.toggle('open');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        // Toggle theme attribute
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Get values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple Validation
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill all fields.';
            formMessage.className = 'form-message error';
            return;
        }

        // Email format validation (basic regex)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.className = 'form-message error';
            return;
        }

        // Simulate success
        formMessage.textContent = 'Form submitted successfully!';
        formMessage.className = 'form-message success';

        // Reset form
        contactForm.reset();

        // Clear message after 3 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 3000);
    });

    // --- Smooth Scrolling for Desktop Links (Optional if CSS scroll-behavior fails) ---
    // Note: CSS html { scroll-behavior: smooth; } handles most cases.
    // This is just to ensure correct offset if needed, but CSS scroll-padding-top is better.

});

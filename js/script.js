// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Generate button loading state
const generateButton = document.querySelector('.generate-button');
const loadingIndicator = document.querySelector('.loading-indicator');

generateButton.addEventListener('click', () => {
    generateButton.style.display = 'none';
    loadingIndicator.style.display = 'flex';
    setTimeout(() => {
        loadingIndicator.style.display = 'none';
        generateButton.style.display = 'flex';
        alert('تم إنشاء البورتفوليو بنجاح!');
    }, 3000);
});

// Mobile menu toggle functionality
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbarLinks');
    
    hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('#navbarLinks a').forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
        });
    });
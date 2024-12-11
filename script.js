document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); 

    const ctaButtons = document.querySelectorAll('.btn');
    console.log(`Found ${ctaButtons.length} buttons with the class ".btn"`); 

    if (ctaButtons.length > 0) {
        ctaButtons.forEach((button) => {
            button.addEventListener('mouseenter', () => {
                button.classList.add('hover-effect'); 
                console.log('Button hover in:', button);
            });

            button.addEventListener('mouseleave', () => {
                button.classList.remove('hover-effect'); 
                console.log('Button hover out:', button);
            });
        });
    } else {
        console.warn('No buttons with the class ".btn" found.');
    }

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); 
            console.log('Hamburger menu toggled:', navMenu.classList.contains('active')); 
        });
    } else {
        console.error('Menu toggle button or navigation menu element not found.');
    }

    console.log('Website loaded and interactive!');
});

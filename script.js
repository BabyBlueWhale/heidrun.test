document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); // Ensure DOM is ready

    // Button Hover Effects
    const ctaButtons = document.querySelectorAll('.btn');
    console.log(`Found ${ctaButtons.length} buttons with the class ".btn"`); // Log the number of buttons found

    if (ctaButtons.length > 0) {
        ctaButtons.forEach((button) => {
            button.addEventListener('mouseenter', () => {
                button.classList.add('hover-effect'); // Add hover effect class
                console.log('Button hover in:', button);
            });

            button.addEventListener('mouseleave', () => {
                button.classList.remove('hover-effect'); // Remove hover effect class
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
            navMenu.classList.toggle('active'); // Toggles visibility of the menu
            console.log('Hamburger menu toggled:', navMenu.classList.contains('active')); // Log menu toggle state
        });
    } else {
        console.error('Menu toggle button or navigation menu element not found.');
    }

    console.log('Website loaded and interactive!');
});

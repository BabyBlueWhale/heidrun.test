document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll<HTMLButtonElement>('.btn');

    if (ctaButtons.length === 0) {
        console.warn('No buttons with the class ".btn" found.');
    } else {
        ctaButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                (button as HTMLElement).style.transform = 'scale(1.1)';
            });

            button.addEventListener('mouseleave', () => {
                (button as HTMLElement).style.transform = 'scale(1)';
            });
        });
    }

    console.log('Website loaded and interactive!');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); 
        });
    }
});


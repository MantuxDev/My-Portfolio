const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.link');
const navbar = document.querySelector('.nav');

// Navbar scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Drag to scroll su tutti i carousel
document.querySelectorAll('.carousel').forEach(carousel => {
    let isDown = false;
    let startX, scrollLeft;
    let isDragging = false;

    carousel.addEventListener('mousedown', e => {
        isDown = true;
        isDragging = false;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        isDragging = true;
        const x = e.pageX - carousel.offsetLeft;
        carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });

    // Blocca il click sui link se si sta trascinando
    carousel.addEventListener('click', e => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);
});
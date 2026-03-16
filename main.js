// ============================
// main.js - Machine Dreams
// ============================

// Inicializar íconos Lucide
lucide.createIcons();

// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {

    // ============================
    // Navbar sticky y scroll
    // ============================
    const navbar = document.querySelector('.navbar');

    // Cambiar estilos al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = 'var(--shadow-md)';
            navbar.style.padding = '0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '10px 0';
        }
    });

    // ============================
    // Smooth scroll para enlaces internos
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Ajusta según altura navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================
    // Animaciones simples al scroll (opcional)
    // ============================
    const scrollElements = document.querySelectorAll('.animate-up, .delay-1, .delay-2, .delay-3');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Activar al cargar

});
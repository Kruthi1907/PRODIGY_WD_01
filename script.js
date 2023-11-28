document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById("navbar");

    document.querySelectorAll('#navbar a, #page-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    let isAtTop = true;

    window.addEventListener('scroll', function() {
        if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
            if (!isAtTop) {
                isAtTop = true;
                navbar.classList.remove('scrolling');
            }
        } else {
            if (isAtTop) {
                isAtTop = false;
                navbar.classList.add('scrolling');
            }
        }

        scrollFunction();
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navbar.style.backgroundColor = "rgba(225, 107, 127, 0.7)"; /* Darker Blue-Grey */
        } else {
            navbar.style.backgroundColor = "rgba(225, 107, 127, 0.7)"; /* Dark Blue-Grey */
        }

        // Highlight the current section in the navbar based on scroll position
        const sections = document.querySelectorAll('.section');
        let currentSectionId = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) {
                currentSectionId = section.id;
            }
        });

        document.querySelectorAll('#navbar a').forEach(anchor => {
            const sectionId = anchor.getAttribute('href').substring(1);
            anchor.classList.toggle('active', sectionId === currentSectionId);
        });
    }

    // Initial call to handle scroll on page load
    scrollFunction();
});

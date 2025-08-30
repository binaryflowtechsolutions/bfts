document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Scroll reveal animations
    const observerOptions = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .bento-card').forEach(element => {
        observer.observe(element);
    });

    // CTA button ripple effect
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    });

    // Portfolio item hover effects
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.portfolio-overlay').style.opacity = 1;
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.portfolio-overlay').style.opacity = 0;
        });
    });

    // Blog post hover animations
    document.querySelectorAll('.blog-post').forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.transform = 'scale(1.05)';
            post.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.35)';
        });
        post.addEventListener('mouseleave', () => {
            post.style.transform = 'scale(1)';
            post.style.boxShadow = 'none';
        });
    });

    // Contact form submission animation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitButton = contactForm.querySelector('.cta-button');
            submitButton.textContent = 'Sending...';
            submitButton.classList.add('sending');
            setTimeout(() => {
                submitButton.textContent = 'Sent!';
                submitButton.classList.remove('sending');
                submitButton.classList.add('success');
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = 'Send Message';
                    submitButton.classList.remove('success');
                }, 2000);
            }, 1500);
        });
    }

    // Dynamic header shadow on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.2)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
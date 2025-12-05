// Loader and AOS initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false
    });
    
    const loader = document.querySelector('.loader');
    
    // Hide loader after page loaded
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1500);

    // Remove loader from DOM after transition
    loader.addEventListener('transitionend', () => {
        loader.classList.add('loader-removed');
    });

    // Parallax scroll effect for hero section
    const heroContent = document.querySelector('.hero-content');
    const heroShapes = document.querySelector('.hero-shapes');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        if (heroContent && heroShapes) {
            heroContent.style.transform = `translateY(${scrollTop * 0.4}px)`;
            heroShapes.style.transform = `translateY(${scrollTop * -0.2}px)`;
        }
    });

    // Animate stats counter when in viewport
    const statsSection = document.querySelector('.stats');
    const statItems = document.querySelectorAll('.stat-value');
    
    let animationStarted = false;

    const animateStats = () => {
        if (animationStarted) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            animationStarted = true;
            
            statItems.forEach(item => {
                const targetValue = parseInt(item.getAttribute('data-target'));
                let currentValue = 0;
                const duration = 2000; // 2 seconds
                const increment = targetValue / (duration / 16); // 60fps
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    item.textContent = Math.ceil(currentValue);
                    
                    if (currentValue >= targetValue) {
                        item.textContent = item.getAttribute('data-symbol') ? 
                            targetValue + item.getAttribute('data-symbol') : 
                            targetValue;
                        clearInterval(counter);
                    }
                }, 16);
            });
        }
    };

    // Check on scroll if stats section is in viewport
    window.addEventListener('scroll', animateStats);

    // Initialize FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.toggle-icon i');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
                    otherItem.querySelector('.toggle-icon i').classList.replace('fa-minus', 'fa-plus');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.replace('fa-plus', 'fa-minus');
            } else {
                answer.style.maxHeight = '0px';
                icon.classList.replace('fa-minus', 'fa-plus');
            }
        });
    });

    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        
        // Add hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .initiative-card, .team-member, .faq-question');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-active');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-active');
            });
        });
        
        // Sync cursor with touch events for mobile
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                cursor.style.left = `${e.touches[0].clientX}px`;
                cursor.style.top = `${e.touches[0].clientY}px`;
            }
        });
    }

    // Initialize smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
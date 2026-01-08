// Modern SaquaStraub Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateNavbar, { passive: true });
    
    // ===== HERO CAROUSEL =====
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % heroSlides.length;
        showSlide(next);
    }
    
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopSlideshow() {
        clearInterval(slideInterval);
    }
    
    // Initialize slideshow
    startSlideshow();
    
    // Dot navigation
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlideshow();
            startSlideshow(); // Restart timer
        });
    });
    
    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlideshow);
        heroSection.addEventListener('mouseleave', startSlideshow);
    }
    
    // ===== SMOOTH SCROLLING =====
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target !== '#') {
                smoothScroll(target);
            }
        });
    });
    
    // ===== MOBILE MENU =====
    const mobileLinks = document.querySelectorAll('#mobileMenu a[href^="#"]');
    const offcanvasElement = document.getElementById('mobileMenu');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement) || new bootstrap.Offcanvas(offcanvasElement);
    
    // Close menu when clicking on links
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            offcanvas.hide();
        });
    });
    
    // Add staggered animation to menu items when opening
    offcanvasElement.addEventListener('shown.bs.offcanvas', function() {
        const menuItems = this.querySelectorAll('.mobile-nav-link');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${(index + 1) * 0.1}s`;
            item.classList.add('animate-in');
        });
    });
    
    // Reset animations when closing
    offcanvasElement.addEventListener('hidden.bs.offcanvas', function() {
        const menuItems = this.querySelectorAll('.mobile-nav-link');
        menuItems.forEach(item => {
            item.classList.remove('animate-in');
            item.style.animationDelay = '';
        });
    });
    
    // ===== GALLERY LIGHTBOX =====
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-image');
        if (img) {
            galleryImages.push({
                src: img.src,
                alt: img.alt,
                index: index
            });
        }
        
        // Add touch support for mobile
        let touchStartTime = 0;
        let touchStartX = 0;
        let touchStartY = 0;
        let hasMoved = false;
        
        item.addEventListener('touchstart', function(e) {
            touchStartTime = Date.now();
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            hasMoved = false;
        }, { passive: true });
        
        item.addEventListener('touchmove', function(e) {
            const touchMoveX = e.touches[0].clientX;
            const touchMoveY = e.touches[0].clientY;
            const moveDistance = Math.sqrt(
                Math.pow(touchMoveX - touchStartX, 2) + 
                Math.pow(touchMoveY - touchStartY, 2)
            );
            
            if (moveDistance > 10) {
                hasMoved = true;
            }
        }, { passive: true });
        
        item.addEventListener('touchend', function(e) {
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTime;
            
            // If it's a tap (short duration and no movement), open lightbox
            if (touchDuration < 500 && !hasMoved) {
                e.preventDefault();
                e.stopPropagation();
                currentImageIndex = index;
                openLightbox(img.src, img.alt, index);
            }
        }, { passive: false });
        
        // Keep click event for desktop and as fallback
        item.addEventListener('click', function(e) {
            // Only handle click if it's not a touch device or if touch events failed
            if (!('ontouchstart' in window) || !hasMoved) {
                e.preventDefault();
                currentImageIndex = index;
                openLightbox(img.src, img.alt, index);
            }
        });
    });
    
    function openLightbox(src, alt, index = 0) {
        currentImageIndex = index;
        
        // Create lightbox modal
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <div class="lightbox-backdrop">
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    ${galleryImages.length > 1 ? `
                        <button class="lightbox-prev" aria-label="Imagem anterior">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        <button class="lightbox-next" aria-label="Próxima imagem">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    ` : ''}
                    <img src="${src}" alt="${alt}" class="lightbox-image">
                    ${galleryImages.length > 1 ? `
                        <div class="lightbox-counter">
                            <span>${index + 1}</span> / <span>${galleryImages.length}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Navigation functions
        function showImage(newIndex) {
            if (newIndex < 0) newIndex = galleryImages.length - 1;
            if (newIndex >= galleryImages.length) newIndex = 0;
            
            currentImageIndex = newIndex;
            const img = lightbox.querySelector('.lightbox-image');
            const counter = lightbox.querySelector('.lightbox-counter span:first-child');
            
            img.src = galleryImages[newIndex].src;
            img.alt = galleryImages[newIndex].alt;
            if (counter) counter.textContent = newIndex + 1;
        }
        
        function nextImage() {
            showImage(currentImageIndex + 1);
        }
        
        function prevImage() {
            showImage(currentImageIndex - 1);
        }
        
        // Close lightbox
        function closeLightbox() {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        }
        
        // Event listeners
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');
        const backdrop = lightbox.querySelector('.lightbox-backdrop');
        
        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (prevBtn) prevBtn.addEventListener('click', prevImage);
        if (nextBtn) nextBtn.addEventListener('click', nextImage);
        
        backdrop.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
        
        // Keyboard navigation
        function handleKeydown(e) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    if (galleryImages.length > 1) prevImage();
                    break;
                case 'ArrowRight':
                    if (galleryImages.length > 1) nextImage();
                    break;
            }
        }
        
        document.addEventListener('keydown', handleKeydown);
        
        // Clean up event listener when lightbox closes
        const originalClose = closeLightbox;
        closeLightbox = function() {
            document.removeEventListener('keydown', handleKeydown);
            originalClose();
        };
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        
        lightboxImage.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        lightboxImage.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold && galleryImages.length > 1) {
                if (diff > 0) {
                    nextImage(); // Swipe left - next image
                } else {
                    prevImage(); // Swipe right - previous image
                }
            }
        }
    }
    
    // ===== MOBILE GALLERY SCROLL INDICATOR =====
    const galleries = document.querySelectorAll('.gallery-grid');
    
    galleries.forEach(gallery => {
        let hasScrolled = false;
        
        gallery.addEventListener('scroll', function() {
            if (!hasScrolled) {
                hasScrolled = true;
                this.classList.add('scrolled');
            }
        }, { passive: true });
        
        // Also hide indicator on touch
        gallery.addEventListener('touchstart', function() {
            if (!hasScrolled) {
                hasScrolled = true;
                this.classList.add('scrolled');
            }
        }, { passive: true });
    });
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // ===== FORM VALIDATION =====
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    const pacoteSelect = document.getElementById('pacote');
    const reservarBtn = document.getElementById('btnReservar');
    
    function validateForm() {
        const checkin = checkinInput.value;
        const checkout = checkoutInput.value;
        const pacote = pacoteSelect.value;
        
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(error => {
            error.classList.add('d-none');
        });
        
        // Validate check-in date
        if (checkin) {
            const checkinDate = new Date(checkin);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (checkinDate < today) {
                document.getElementById('erroCheckin').classList.remove('d-none');
                isValid = false;
            }
        }
        
        // Validate check-out date
        if (checkin && checkout) {
            const checkinDate = new Date(checkin);
            const checkoutDate = new Date(checkout);
            
            if (checkoutDate < checkinDate) {
                document.getElementById('erroCheckout').classList.remove('d-none');
                isValid = false;
            }
        }
        
        // Enable/disable button
        if (checkin && checkout && pacote && isValid) {
            reservarBtn.disabled = false;
        } else {
            reservarBtn.disabled = true;
        }
    }
    
    // Add event listeners for form validation
    if (checkinInput && checkoutInput && pacoteSelect) {
        checkinInput.addEventListener('change', validateForm);
        checkoutInput.addEventListener('change', validateForm);
        pacoteSelect.addEventListener('change', validateForm);
        
        // WhatsApp reservation
        reservarBtn.addEventListener('click', function() {
            const checkin = checkinInput.value;
            const checkout = checkoutInput.value;
            const pacote = pacoteSelect.options[pacoteSelect.selectedIndex].text;
            
            const message = `Olá! Gostaria de fazer uma reserva na SaquaStraub:
            
📅 Check-in: ${new Date(checkin).toLocaleDateString('pt-BR')}
📅 Check-out: ${new Date(checkout).toLocaleDateString('pt-BR')}
👥 Pacote: ${pacote}

Podemos conversar sobre disponibilidade e valores?`;
            
            const whatsappUrl = `https://wa.me/5521976011899?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical images
    const criticalImages = [
        './img/banner/casa.webp',
        './img/banner/piscina.webp'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // ===== INITIALIZE AOS =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }
    
    // ===== ACCESSIBILITY IMPROVEMENTS =====
    
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Keyboard navigation for gallery
    galleryItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `Ver imagem ${index + 1} em tamanho maior`);
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ===== ERROR HANDLING =====
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
        // You could send this to an error tracking service
    });
    
    // ===== CONSOLE WELCOME MESSAGE =====
    console.log('%c🏖️ SaquaStraub Website', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
    console.log('%cDesenvolvido com ❤️ para proporcionar a melhor experiência', 'color: #64748b; font-size: 12px;');
});

// ===== LIGHTBOX STYLES =====
const lightboxStyles = `
.lightbox-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    animation: fadeIn 0.3s ease-out;
}

.lightbox-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-image {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
}

.lightbox-close {
    position: absolute;
    top: -3rem;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 10001;
}

.lightbox-close:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
}

.lightbox-prev,
.lightbox-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 10001;
}

.lightbox-prev {
    left: -4rem;
}

.lightbox-next {
    right: -4rem;
}

.lightbox-prev:hover,
.lightbox-next:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
}

.lightbox-counter {
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@media (max-width: 768px) {
    .lightbox-close {
        top: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.8);
        font-size: 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
    }
    
    .lightbox-prev,
    .lightbox-next {
        top: 50%;
        font-size: 1.2rem;
        width: 3rem;
        height: 3rem;
        padding: 0.75rem;
    }
    
    .lightbox-prev {
        left: 1rem;
    }
    
    .lightbox-next {
        right: 1rem;
    }
    
    .lightbox-counter {
        bottom: 1rem;
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }
    
    .lightbox-backdrop {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    .lightbox-prev,
    .lightbox-next {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1rem;
    }
    
    .lightbox-prev {
        left: 0.5rem;
    }
    
    .lightbox-next {
        right: 0.5rem;
    }
}
`;

// Inject lightbox styles
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);
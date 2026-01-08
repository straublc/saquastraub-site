// JavaScript Simples e Funcional
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE MENU =====
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileMenu && mobileNav) {
        mobileMenu.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animar hamburger
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
        
        // Fechar menu ao clicar em link
        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                const bars = mobileMenu.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            });
        });
    }
    
    // ===== HERO SLIDER =====
    let slideIndex = 1;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.nav-dot');
    
    if (slides.length > 0 && dots.length > 0) {
        // Função para mostrar slide
        function showSlide(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;
            
            // Remover active de todos
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Adicionar active ao atual
            slides[slideIndex - 1].classList.add('active');
            dots[slideIndex - 1].classList.add('active');
        }
        
        // Função para slide atual (chamada pelos dots)
        window.currentSlide = function(n) {
            slideIndex = n;
            showSlide(slideIndex);
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, 4000);
        }
        
        // Próximo slide
        function nextSlide() {
            slideIndex++;
            showSlide(slideIndex);
        }
        
        // Auto slide
        let autoSlide = setInterval(nextSlide, 4000);
        
        // Pausar ao hover
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', () => clearInterval(autoSlide));
            hero.addEventListener('mouseleave', () => {
                autoSlide = setInterval(nextSlide, 4000);
            });
        }
    }
    
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
    
    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== NAVBAR SCROLL =====
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });
    }
    
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
                const erroCheckin = document.getElementById('erroCheckin');
                if (erroCheckin) erroCheckin.classList.remove('d-none');
                isValid = false;
            }
        }
        
        // Validate check-out date
        if (checkin && checkout) {
            const checkinDate = new Date(checkin);
            const checkoutDate = new Date(checkout);
            
            if (checkoutDate < checkinDate) {
                const erroCheckout = document.getElementById('erroCheckout');
                if (erroCheckout) erroCheckout.classList.remove('d-none');
                isValid = false;
            }
        }
        
        // Enable/disable button
        if (checkin && checkout && pacote && isValid && reservarBtn) {
            reservarBtn.disabled = false;
        } else if (reservarBtn) {
            reservarBtn.disabled = true;
        }
    }
    
    // Add event listeners for form validation
    if (checkinInput && checkoutInput && pacoteSelect && reservarBtn) {
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
    
    // ===== INITIALIZE AOS =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }
    
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
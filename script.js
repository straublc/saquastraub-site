document.addEventListener('DOMContentLoaded', function () {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

    document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            const targetId = link.getAttribute('href');

            if (targetId.startsWith('#')) {
                event.preventDefault();

                offcanvas.hide();

                offcanvasElement.addEventListener('hidden.bs.offcanvas', function scrollToTarget() {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    offcanvasElement.removeEventListener('hidden.bs.offcanvas', scrollToTarget);
                });
            }
        });
    });
});

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

 AOS.init();

// const elementsToAnimate = document.querySelectorAll("[data-anime]");
// const animationClass = "animate";

// function animateOnScroll() {
//   const windowTop = window.pageYOffset + window.innerHeight * 0.6;

//   elementsToAnimate.forEach((element) => {
//     if (windowTop > element.offsetTop) {
//       element.classList.add(animationClass);
//     } else {
//       element.classList.remove(animationClass);
//     }
//   });
// }

// animateOnScroll();

// if (elementsToAnimate.length) {
//   window.addEventListener(
//     "scroll",
//     debounce(function () {
//       animateOnScroll();
//     }, 90) 
//   );
// }
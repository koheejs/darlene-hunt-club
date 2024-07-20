import backgroundImageEffect from './modules/feature-background-effect.js';
import sectionParallax from './modules/feature-parallax.js';

(function () {
  // Initialize AOS library
  AOS.init({
    easing: 'ease',
    duration: 2000,
    // delay: 400,
    offset: 10,
    once: true,
  });

  backgroundImageEffect();
  sectionParallax('our-process', 3600);
})();

/**
 * Initializes the menu functionality.
 */
(function () {
  const body = document.body;

  const menuTrigger = document.getElementById('trigger-menu');
  const navigation = document.getElementById('navigation');

  const menuItems = navigation.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    const activePage = item.getAttribute('data-active-page');
    if (body.classList.contains(activePage)) {
      item.classList.add('active');
    }
  });

  const Classes = {
    menuExpanded: 'expanded',
  };

  menuTrigger.addEventListener('click', (event) => {
    navigation.classList.toggle(Classes.menuExpanded);
    menuTrigger.classList.toggle(Classes.menuExpanded);
  });

  document.body.addEventListener('click', (event) => {
    if (event.target !== menuTrigger && !menuTrigger.contains(event.target)) {
      navigation.classList.remove(Classes.menuExpanded);
      menuTrigger.classList.remove(Classes.menuExpanded);
    }
  });
})();

/**
 * Initializes the accordion functionality.
 */
(function () {
  const accordions = document.querySelectorAll('[data-accordion]');
  accordions.forEach(function (accordion) {
    const title = accordion.querySelector('.accordion-title');
    title.addEventListener('click', () => {
      accordion.classList.toggle('expanded');
    });
  });
})();

/**
 * Initializes the Home - Services section scrolling animation effect.
 * ##our-services > h2 > span, add class highlight to span inner h2 when scroll to center of screen
 */
// (function () {
//   const CLASS_NAME = 'highlight';
//   const servicesSection = document.getElementById('our-services');
//   const servicesTitles = servicesSection.querySelectorAll(
//     '.section-title .text'
//   );

//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '-50% 0px', // Adjust to detect center (vertical adjustment)
//     threshold: 0, // Trigger as soon as any part is in view
//   };

//   const callback = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add(CLASS_NAME);
//       } else {
//         entry.target.classList.remove(CLASS_NAME);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(callback, options);

//   servicesTitles.forEach((title) => {
//     observer.observe(title);
//   });
// })();

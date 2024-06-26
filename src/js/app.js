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
  sectionParallax();
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

import backgroundImageEffect from './modules/feature-background-effect.js';

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
})();

/**
 * Initializes the menu functionality.
 */
(function () {
  const menuTrigger = document.getElementById('trigger-menu');
  const navigation = document.getElementById('navigation');

  const Classes = {
    menuExpanded: 'expanded',
  };

  menuTrigger.addEventListener('click', (event) => {
    navigation.classList.toggle(Classes.menuExpanded);
  });

  document.body.addEventListener('click', (event) => {
    if (event.target !== menuTrigger && !menuTrigger.contains(event.target)) {
      navigation.classList.remove(Classes.menuExpanded);
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

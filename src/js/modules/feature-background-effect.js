import { onImageLoad } from './utils.js';

function backgroundImageEffect() {
  const $bgEffectElements = document.querySelectorAll('[data-bg-effect]');
  $bgEffectElements.forEach(function ($element) {
    const backgroundImage = $element.getAttribute('data-background');
    let isLoaded = false;
    let isIntersecting = false;

    onImageLoad(backgroundImage, () => {
      $element.style.backgroundImage = `url(${backgroundImage})`;

      if (isIntersecting) {
        $element.classList.add('has-effect');
      } else {
        isLoaded = true;
      }
    });

    const intersectionCallback = function (entries) {
      const entry = entries[0];

      if (entry.isIntersecting === true) {
        if (isLoaded) {
          $element.classList.add('has-effect');
        } else {
          isIntersecting = true;
        }
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: [0.2],
    });

    observer.observe($element);
  });
}

export default backgroundImageEffect;

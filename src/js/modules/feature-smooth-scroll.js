const PAGES_APPLY_SMOOTH_SCROLL = [
  'home-page',
  'about-us-page',
  'work-page',
  'case-studies-root-page',
  'case-studies-page',
];

function initSmoothScrollEffects() {
  const isApplySmoothScroll = checkIFPageHasSmoothScroll();

  if (!isApplySmoothScroll) {
    return;
  }

  const scrollInstant = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  scrollInstant.on('scroll', (event) => {
    const currentElements = event.currentElements;
    handleOurProcessEffect(currentElements['our-process']);
    handleScrollHighlightEffect(currentElements['scroll-highlight-effect']);
  });

  configScrollEffectByWordAttribute();
}

export default initSmoothScrollEffects;

/**
 * Utilities function
 */

function checkIFPageHasSmoothScroll() {
  const body = document.body;
  let isApplySmoothScroll = false;

  PAGES_APPLY_SMOOTH_SCROLL.forEach((pageClass) => {
    if (body.classList.contains(pageClass)) {
      isApplySmoothScroll = true;
    }
  });

  return isApplySmoothScroll;
}

function configScrollEffectByWordAttribute() {
  const scrollEffectByWordElements = document.querySelectorAll(
    '.scroll-highlight-by-word'
  );

  scrollEffectByWordElements.forEach((wrapper) => {
    const words = wrapper.querySelectorAll('span');
    words.forEach((word, index) => {
      // get percentage with offset from 20 - 80  percent
      const percentage = Math.round(20 + (index / words.length) * 60);
      word.setAttribute('data-word-percentage', percentage);
    });
  });
}

function handleScrollHighlightEffect(targetElement) {
  if (!targetElement) return;
  const scrollProgress = targetElement.progress;
  const percentage = Math.round(scrollProgress * 100);
  const element = targetElement.el;
  const paragraph = element.querySelector('p');
  const words = paragraph.querySelectorAll('span');
  words.forEach((word) => {
    const previousWord = word.previousElementSibling;
    const previousWordPercentage = previousWord
      ? previousWord.getAttribute('data-word-percentage')
      : 0;
    const nextWord = word.nextElementSibling;
    const nextWordPercentage = nextWord
      ? nextWord.getAttribute('data-word-percentage')
      : 100;
    const wordPercentage = word.getAttribute('data-word-percentage');
    if (
      percentage >= previousWordPercentage &&
      percentage <= nextWordPercentage
    ) {
      word.classList.add('highlight');
    } else {
      word.classList.remove('highlight');
    }
  });
}

function handleOurProcessEffect(targetElement) {
  if (!targetElement) return;
  const el = targetElement.el;
  const processesEl = el.querySelector('ul.processes');
  processesEl.scrollLeft = targetElement.progress * processesEl.scrollWidth;
}

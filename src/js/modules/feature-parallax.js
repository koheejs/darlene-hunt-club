const DELTA_1 = 400;
const KEEP_DELTA = 1000;

function sectionParallax() {
  const $section = document.getElementById('descriptions');
  const row1 = $section.querySelector('.row:nth-child(1)');
  const row2 = $section.querySelector('.row:nth-child(2)');

  const upperLimit1 = window.innerHeight * 0.8;
  const upperLimit2 = upperLimit1 + 2 * DELTA_1 + 2 * KEEP_DELTA;

  $section.style.height = `${
    window.innerHeight + upperLimit2 + 2 * DELTA_1 + KEEP_DELTA
  }px`;

  const sectionTop = $section.offsetTop;
  const sectionHeight = $section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;

  // Parallax effect for the background image
  function parallaxBackground() {
    if (scrollY > sectionTop) {
      $section.classList.add('bg-bottom');
    } else {
      $section.classList.remove('bg-bottom');
    }

    if (
      scrollY >= sectionTop &&
      scrollY + window.innerHeight <= sectionBottom
    ) {
      $section.classList.add('parallax');
    } else {
      $section.classList.remove('parallax');
    }
  }

  // Parallax effect for the rows
  function parallaxRow($el, upperLimit, delta) {
    if ($el) {
      if (
        scrollY >= upperLimit &&
        scrollY <= upperLimit + 2 * delta + KEEP_DELTA
      ) {
        let opacity = 0;
        if (scrollY <= upperLimit + delta) {
          opacity = Math.abs(upperLimit - scrollY) / delta;
        } else if (scrollY >= upperLimit + delta + KEEP_DELTA) {
          opacity =
            Math.abs(upperLimit + 2 * delta + KEEP_DELTA - scrollY) / delta;
        } else {
          opacity = 1;
        }
        $el.style.opacity = opacity;
      } else {
        $el.style.opacity = 0;
      }
    }
  }

  window.addEventListener('scroll', parallaxBackground);

  window.addEventListener('scroll', () => {
    parallaxRow(row1, upperLimit1, DELTA_1);
  });

  window.addEventListener('scroll', () => {
    parallaxRow(row2, upperLimit2, DELTA_1);
  });
}

export default sectionParallax;

function sectionParallax() {
  const $sections = document.querySelectorAll('[data-scroll-speed]');

  $sections.forEach(function ($section) {
    const speed = $section.getAttribute('data-scroll-speed');
    const originMarginTop = parseInt($section.style.marginTop, 10) || 0;

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      const updatedMarginTop = originMarginTop + scrollY * speed * -1;
      $section.style.marginTop = `${updatedMarginTop}px`;
      AOS.refresh();
    });
  });
}

export default sectionParallax;

(function () {
  const menuTrigger = document.getElementById('trigger-menu');
  const navigation = document.getElementById('navigation');

  const Classes = {
    menuExpanded: 'expanded',
  };

  menuTrigger.addEventListener('click', () => {
    navigation.classList.toggle(Classes.menuExpanded);
  });

  document.body.addEventListener('click', (e) => {
    if (e.target !== menuTrigger && !menuTrigger.contains(e.target)) {
      navigation.classList.remove(Classes.menuExpanded);
    }
  });
})();

(function () {
  const accordions = document.querySelectorAll('[data-accordion]');
  accordions.forEach(function (accordion) {
    const title = accordion.querySelector('.accordion-title');
    title.addEventListener('click', () => {
      accordion.classList.toggle('expanded');
    });
  });
})();

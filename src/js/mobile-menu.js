(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded =
      refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.openMenuBtn.setAttribute('aria-expanded', !expanded);
    document.body.classList.toggle('menu-open');
    refs.menu.classList.toggle('is-open');
  }
})();

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');
  if (!toggle || !menu) { return; }
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}());

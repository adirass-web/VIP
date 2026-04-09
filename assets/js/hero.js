/**
 * hero.js — Hero image loader + FAQ toggle
 * Reads data-hero-img from .hero element, applies responsive width.
 */
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var src = hero.getAttribute('data-hero-img');
  if (!src) return;

  var img = src.replace(
    'w=1280',
    'w=' + (window.innerWidth < 768 ? 640 : 1280)
  );

  hero.style.setProperty('--hero-background-image', 'url("' + img + '")');
})();

(function () {
  var toggles = document.querySelectorAll('[data-faq-toggle]');
  if (!toggles.length) return;

  toggles.forEach(function (toggle) {
    var targetId = toggle.getAttribute('aria-controls');
    if (!targetId) return;
    var target = document.getElementById(targetId);
    if (!target) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));

      if (expanded) {
        target.hidden = true;
        target.querySelectorAll('details').forEach(function (detailsEl) {
          detailsEl.open = false;
        });
      } else {
        target.hidden = false;
        target.querySelectorAll('details').forEach(function (detailsEl) {
          detailsEl.open = true;
        });
      }
    });
  });
})();

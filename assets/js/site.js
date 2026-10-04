(function () {
  'use strict';
  var button = document.querySelector('[data-nav-toggle]');
  var menu = document.getElementById('site-menu');
  function closeMenu() { if (menu && button) {menu.classList.remove('open'); button.setAttribute('aria-expanded', 'false');} }
  if (button && menu) {
    button.addEventListener('click', function () {button.setAttribute('aria-expanded', String(menu.classList.toggle('open')));});
    menu.addEventListener('click', function (event) {if (event.target.closest('a')) closeMenu();});
    document.addEventListener('keydown', function (event) {if (event.key === 'Escape' && menu.classList.contains('open')) {closeMenu(); button.focus();}});
  }
  var toggle = document.querySelector('[data-faq-toggle-all]');
  var details = Array.from(document.querySelectorAll('.faq details'));
  function syncToggle() {
    if (!toggle) return;
    var allOpen = details.length > 0 && details.every(function (item) {return item.open;});
    toggle.setAttribute('aria-expanded', String(allOpen));
    toggle.textContent = allOpen ? toggle.dataset.closeLabel : toggle.dataset.openLabel;
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = !details.every(function (item) {return item.open;});
      details.forEach(function (item) {item.open = open;}); syncToggle();
    });
    details.forEach(function (item) {item.addEventListener('toggle', syncToggle);});
  }
  function revealAnchor() {
    var id; try {id = decodeURIComponent(location.hash.slice(1));} catch (_) {return;}
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    var parent = target.closest('details'); if (parent) parent.open = true;
    if (target.matches('.faq')) target.querySelectorAll('details').forEach(function (item) {item.open = true;});
    syncToggle();
    requestAnimationFrame(function () {target.scrollIntoView();});
  }
  window.addEventListener('hashchange', revealAnchor); revealAnchor();
})();

(function () {
    var navToggle = document.querySelector('[data-nav-toggle]');
    var navMenu = document.querySelector('[data-nav-menu]');
    if (!navToggle || !navMenu) return;

    var openClass = 'is-open';
    var minWidthQuery = window.matchMedia('(min-width: 721px)');
    var maxWidthQuery = window.matchMedia('(max-width: 720px)');

    function openMenu() {
        navMenu.classList.add(openClass);
        navToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        navMenu.classList.remove(openClass);
        navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', function () {
        var expanded = navToggle.getAttribute('aria-expanded') === 'true';
        if (expanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (maxWidthQuery.matches) {
                closeMenu();
            }
        });
    });

    function handleChange(event) {
        if (event.matches) {
            closeMenu();
        }
    }

    if (typeof minWidthQuery.addEventListener === 'function') {
        minWidthQuery.addEventListener('change', handleChange);
    } else if (typeof minWidthQuery.addListener === 'function') {
        minWidthQuery.addListener(handleChange);
    }
})();

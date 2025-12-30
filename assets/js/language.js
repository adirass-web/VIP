(function () {
    var supported = ['he', 'ru', 'en'];

    function normalize(code) {
        if (!code) return null;
        code = code.toLowerCase();
        if (code === 'iw') return 'he';
        for (var i = 0; i < supported.length; i++) {
            if (code === supported[i] || code.indexOf(supported[i] + '-') === 0) {
                return supported[i];
            }
        }
        return null;
    }

    function detectPreferred() {
        var stored = null;
        try {
            stored = localStorage.getItem('preferredLang');
        } catch (e) { }

        if (stored && supported.indexOf(stored) !== -1) {
            return stored;
        }

        var languages = navigator.languages || [navigator.language || navigator.userLanguage];
        for (var i = 0; i < languages.length; i++) {
            var normalized = normalize(languages[i]);
            if (normalized) return normalized;
        }
        return 'en';
    }

    function setPreferred(lang) {
        if (supported.indexOf(lang) === -1) return;
        try {
            localStorage.setItem('preferredLang', lang);
        } catch (e) { }
    }

    function getCurrentLang() {
        var pathParts = window.location.pathname.split('/').filter(Boolean);
        if (pathParts.length && supported.indexOf(pathParts[0]) !== -1) {
            return pathParts[0];
        }
        return normalize(document.documentElement.lang) || null;
    }

    function redirectIfBetter(options) {
        options = options || {};
        var current = options.currentLang || getCurrentLang();
        var preferred = detectPreferred();
        var paths = options.paths || {};

        if (!preferred || !paths[preferred]) return;

        if (!options.skipIfStored || !localStorage.getItem('preferredLang')) {
            setPreferred(preferred);
        }

        if (preferred !== current && !options.skipRedirect) {
            window.location.replace(paths[preferred]);
        }
    }

    function bindLanguageSwitcher() {
        var links = document.querySelectorAll('[data-lang-option]');
        if (!links.length) return;

        links.forEach(function (link) {
            link.addEventListener('click', function () {
                var lang = link.getAttribute('data-lang-option');
                if (lang) setPreferred(lang);
            });
        });
    }

    window.languageUtils = {
        detectPreferred: detectPreferred,
        setPreferred: setPreferred,
        getCurrentLang: getCurrentLang,
        redirectIfBetter: redirectIfBetter
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindLanguageSwitcher);
    } else {
        bindLanguageSwitcher();
    }
})();

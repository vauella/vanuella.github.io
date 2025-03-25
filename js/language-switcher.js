document.addEventListener('DOMContentLoaded', function() {
    // Initialize language from localStorage or default to French
    const currentLang = localStorage.getItem('language') || 'fr';
    setLanguage(currentLang);

    // Set up language menu listeners
    document.getElementById('lang-fr').addEventListener('click', function(e) {
        e.preventDefault();
        setLanguage('fr');
    });

    document.getElementById('lang-en').addEventListener('click', function(e) {
        e.preventDefault();
        setLanguage('en');
    });
});

function setLanguage(lang) {
    // Store language preference
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

    // Update footer text visibility
    const footerFr = document.getElementById('footer-fr');
    const footerEn = document.getElementById('footer-en');
    if (footerFr && footerEn) {
        footerFr.style.display = lang === 'fr' ? 'inline' : 'none';
        footerEn.style.display = lang === 'en' ? 'inline' : 'none';
    }

    // Update navigation text
    updateNavigationText(lang);
}

function updateNavigationText(lang) {
    const translations = {
        fr: {
            'Events': 'Événements',
            'Songs': 'Chansons',
            'Videos': 'Vidéos',
            'Media': 'Médias',
            'Gallery': 'Galerie'
        },
        en: {
            'Événements': 'Events',
            'Chansons': 'Songs',
            'Vidéos': 'Videos',
            'Médias': 'Media',
            'Galerie': 'Gallery'
        }
    };

    const navLinks = document.querySelectorAll('.navbar .nav-link');
    navLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (translations[lang][linkText]) {
            link.textContent = translations[lang][linkText];
        }
    });
}
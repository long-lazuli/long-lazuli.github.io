function redirectAccordingToLang(urls, checkPreferredLang = true) {
    // Check preferred language
    if( checkPreferredLang ) {
        const preferredLang = getPreferredLanguage();
        if( preferredLang && (preferredLang in urls) ) {
            window.location.replace(urls[preferredLang]);
            return;
        }
    }

    // Check browser language
    const lang = navigator.language || navigator.userLanguage;
    const langStr = lang ? lang.toLowerCase().slice(0, 2) : "";
    if( langStr in urls ) {
        window.location.replace(urls[langStr]);
        return;
    }
    // Default redirection
    window.location.replace(urls.default);
}


function setPreferredLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
}

function getPreferredLanguage() {
        return localStorage.getItem('preferredLanguage');
}

function resetPreferredLanguage() {
    localStorage.removeItem('preferredLanguage');
}
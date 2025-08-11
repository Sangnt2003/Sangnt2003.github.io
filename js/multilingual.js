function changeLanguage() {
    const select = document.getElementById('select-language');
    const selectedLang = select.value;
    const currentPath = window.location.pathname;
    
    // Remove language prefix from current path
    let cleanPath = currentPath;
    if (currentPath.startsWith('/vi/')) {
        cleanPath = currentPath.substring(3);
    } else if (currentPath.startsWith('/en/')) {
        cleanPath = currentPath.substring(3);
    }
    
    // Construct new URL based on selected language
    let newUrl;
    if (selectedLang === 'vi') {
        newUrl = '/vi' + cleanPath;
    } else {
        newUrl = cleanPath;
    }
    
    // Redirect to new URL
    window.location.href = newUrl;
}
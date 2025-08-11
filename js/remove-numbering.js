// Remove numbering from main content headings while keeping sidebar numbering
document.addEventListener('DOMContentLoaded', function() {
    // Target only the main content h1 (not sidebar)
    const mainH1 = document.querySelector('#body h1');
    if (mainH1) {
        const originalText = mainH1.textContent;
        const cleanText = originalText.replace(/^\d+\.?\d*\s+/, '');
        mainH1.textContent = cleanText;
    }
    
    // Also handle any other headings in content that might have numbering
    const contentHeadings = document.querySelectorAll('#body h2, #body h3, #body h4, #body h5, #body h6');
    contentHeadings.forEach(function(heading) {
        heading.textContent = heading.textContent.replace(/^\d+\.?\d*\s+/, '');
    });
});
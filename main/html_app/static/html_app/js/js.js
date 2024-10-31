document.getElementById('runCode').addEventListener('click', function() {
    const htmlContent = document.getElementById('htmlCode').value;
    
    
    const previewFrame = document.getElementById('livePreview');
    previewFrame.innerHTML = htmlContent;
    

    const styleTag = document.createElement('style');
    styleTag.innerHTML = cssContent;
    document.head.appendChild(styleTag);
    

    try {
        eval(jsContent);
    } catch (error) {
        console.error('Ошибка в JavaScript:', error);
    }
});
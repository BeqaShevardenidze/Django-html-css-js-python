document.getElementById('runCode').addEventListener('click', function() {
    // Получаем HTML код
    const htmlContent = document.getElementById('htmlCode').value;
    
    // Обновляем содержимое блока #livePreview с новым HTML
    const previewFrame = document.getElementById('livePreview');
    previewFrame.innerHTML = htmlContent;
    
    // Создаем <style> элемент для добавления CSS
    const styleTag = document.createElement('style');
    styleTag.innerHTML = cssContent;
    document.head.appendChild(styleTag);
    
    // Выполняем JavaScript код с использованием функции eval
    try {
        eval(jsContent);
    } catch (error) {
        console.error('Ошибка в JavaScript:', error);
    }
});
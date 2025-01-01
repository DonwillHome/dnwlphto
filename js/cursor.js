document.addEventListener('DOMContentLoaded', function() {
    console.log('Cursor script loaded');

    // Test if image loads
    const testImg = new Image();
    testImg.onload = () => console.log('CursorDown.png loaded successfully');
    testImg.onerror = () => console.error('Failed to load CursorDown.png');
    testImg.src = 'images/CursorDown.png';

    document.addEventListener('mousedown', function(e) {
        console.log('Mouse clicked at:', e.clientX, e.clientY);
        
        // Create new click image
        const clickImage = document.createElement('div');
        clickImage.className = 'click-image';
        clickImage.style.left = e.clientX + 'px';
        clickImage.style.top = e.clientY + 'px';
        document.body.appendChild(clickImage);
        
        console.log('Click image created:', clickImage);

        // Remove the image after delay
        setTimeout(() => {
            clickImage.style.opacity = '0';
            setTimeout(() => {
                clickImage.remove();
                console.log('Click image removed');
            }, 300); // Wait for fade out
        }, 500); // Increased time to stay visible
    });
}); 
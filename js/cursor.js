document.addEventListener('DOMContentLoaded', () => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Log to check if cursor element is created
    console.log('Cursor element:', cursor);
    
    // Log to check if image is loading
    const img = new Image();
    img.src = 'images/Cursor.png';
    img.onload = () => console.log('Cursor image loaded');
    img.onerror = () => console.error('Cursor image failed to load');

    // Update cursor position with offset
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // Handle click state
    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicking');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('clicking');
    });
}); 
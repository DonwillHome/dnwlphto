// Gallery filtering and lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    let currentCategory = 'headshots';
    let currentIndex = 0;

    // Show headshots by default
    galleryItems.forEach(item => {
        if (item.dataset.category !== 'headshots') {
            item.style.display = 'none';
        }
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;

            galleryItems.forEach(item => {
                if (currentCategory === 'all' || item.dataset.category === currentCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality
    function getCategoryImages() {
        if (currentCategory === 'all') {
            return Array.from(document.querySelectorAll('.gallery-item:not([style*="display: none"]) img'));
        }
        return Array.from(document.querySelectorAll(`.gallery-item[data-category="${currentCategory}"]:not([style*="display: none"]) img`));
    }

    function showImage(index) {
        const images = getCategoryImages();
        currentIndex = index;
        
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
        
        const img = images[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        
        // Update caption if available
        const caption = lightbox.querySelector('.lightbox-caption');
        if (caption) {
            caption.textContent = img.closest('.gallery-item').dataset.caption || '';
        }
    }

    // Open lightbox on image click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            showImage(index);
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Navigate through images
    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                showImage(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentIndex + 1);
            }
        }
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}); 
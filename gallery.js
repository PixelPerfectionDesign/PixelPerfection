document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.gallery-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            lightbox.style.display = 'flex';
            lightboxImg.src = this.href;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    // Optional: close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});
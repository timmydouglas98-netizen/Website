document.querySelectorAll('.grid img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => lightbox.remove());
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращает действие ссылки
            const imageUrl = getComputedStyle(this).getPropertyValue('--_image-url').slice(5, -2);
            modalImg.src = imageUrl;
            
            modal.style.display = 'block';
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });
        });
    });

    close.onclick = function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Длительность анимации
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500); // Длительность анимации
        }
    }
});
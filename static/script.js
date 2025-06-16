const form = document.getElementById('query-form');
const imageContainer = document.getElementById('image-container');
let currentIndex = 0;
let images = [];
let intervalId = null;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const params = new URLSearchParams(new FormData(form));
    const response = await fetch(`/api/product?${params.toString()}`);
    if (response.ok) {
        const data = await response.json();
        images = data.images;
        currentIndex = 0;
        showImages();
    } else {
        alert('Error al obtener producto');
    }
});

function showImages() {
    if (intervalId) clearInterval(intervalId);
    if (!images.length) return;
    const img = document.createElement('img');
    img.src = images[0];
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        img.src = images[currentIndex];
    }, 1000);
}

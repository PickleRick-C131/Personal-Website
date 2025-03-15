document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-gallery img");

    images.forEach(img => {
        const randomX = Math.random() * 200 - 100;  // Random range between -100% to 100%
        const randomY = Math.random() * 200 - 100;  // Random range between -100% to 100%
        const randomScale = 0.5 + Math.random();  // Random scale between 0.5 to 1.5

        img.style.transform = `translate(${randomX}%, ${randomY}%) scale(${randomScale})`;
    });
});

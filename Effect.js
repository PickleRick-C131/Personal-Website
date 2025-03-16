document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-gallery img");

    images.forEach(img => {
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const maxLeft = windowWidth - imgWidth;
        const maxTop = windowHeight - imgHeight;

        const randomLeft = Math.random() * maxLeft;  // Random range between 0 and maxLeft
        const randomTop = Math.random() * maxTop;    // Random range between 0 and maxTop
        const randomX = Math.random() * 50 - 25;     // Random range between -25% to 25%
        const randomY = Math.random() * 50 - 25;     // Random range between -25% to 25%
        const randomScale = 0.75 + Math.random() * 0.75;  // Random scale between 0.75 to 1.5

        img.style.left = `${randomLeft}px`;
        img.style.top = `${randomTop}px`;
        img.style.transform = `translate(${randomX}%, ${randomY}%) scale(${randomScale})`;
    });
});

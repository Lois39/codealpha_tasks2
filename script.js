const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightboxImage").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightboxImage").src = images[currentIndex];
}

// Keyboard navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        changeImage(1);
    } else if (event.key === "ArrowLeft") {
        changeImage(-1);
    } else if (event.key === "Escape") {
        closeLightbox();
    }
});

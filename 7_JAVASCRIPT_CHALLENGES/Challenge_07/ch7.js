//    Image Data


const images = [
    {
        thumb: "thumb1.jpg",
        full: "thumb1.jpg",
        caption: "Ronaldo"
    },
    {
        thumb: "thumb2.png",
        full: "thumb2.png",
        caption: "Juice"
    },
    {
        thumb: "thumb3.png",
        full: "thumb3.png",
        caption: "Burger"
    }
];


const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const counter = document.getElementById("counter");
const caption = document.getElementById("caption");

let currentIndex = 0;


//    Build Thumbnail Grid

images.forEach((img, index) => {
    const image = document.createElement("img");

    image.src = img.thumb;
    image.loading = "lazy";           // lazy load thumbnails

    // ✅ SMALL THUMBNAIL SIZE
    image.setAttribute("width", "120");
    image.setAttribute("height", "80");

    image.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(image);
});


//    Open Lightbox

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = "block";
    document.addEventListener("keydown", handleKeys);
}


// Update Lightbox

function updateLightbox() {
    lightboxImg.src = images[currentIndex].full;
    caption.textContent = images[currentIndex].caption;
    counter.textContent = `${currentIndex + 1} of ${images.length}`;
}


// Navigation Buttons

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});


//   Keyboard Navigation


function handleKeys(e) {
    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }

    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    if (e.key === "Escape") {
        closeLightbox();
    }
}



//    Close Lightbox

function closeLightbox() {
    lightbox.style.display = "none";
    document.removeEventListener("keydown", handleKeys);
}

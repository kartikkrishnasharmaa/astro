// Banner Carousel
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index){
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
    currentIndex++;
    if(currentIndex >= totalSlides){
        currentIndex = 0;
    }
    showSlide(currentIndex);
}, 3000);

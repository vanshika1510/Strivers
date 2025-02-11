let slideIndex = 0;
const slides = document.querySelectorAll('.image-slide');
const totalSlides = slides.length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides-2) {
        slideIndex = 0;
    }
    const offset = -slideIndex * 30; // Move to the next slide
    document.querySelector('.image-slider').style.transform = `translateX(${offset}%)`;
    
}

// Change slide every 3 seconds
setInterval(showSlides, 3000);

//  artist work slide show
let slideIndex2 = 0;
const slides2 = document.querySelectorAll('.image-slide2');
const totalSlides2 = slides2.length;

function showSlide() {
    slideIndex2++;
    if (slideIndex2 >= totalSlides2-2) {
        slideIndex2 = 0;
    }
    const offset2 = -slideIndex2 * 30; // Move to the next slide
    document.querySelector('.image-slider2').style.transform = `translateX(${offset2}%)`;
    
}
setInterval(showSlide, 3000);

//  graphic designers work slide show
let slideIndex3 = 0;
const slides3 = document.querySelectorAll('.image-slide3');
const totalSlides3 = slides3.length;

function showSlide3() {
    slideIndex3++;
    if (slideIndex3 >= totalSlides3-2) {
        slideIndex3 = 0;
    }
    const offset3 = -slideIndex3 * 30; // Move to the next slide
    document.querySelector('.image-slider3').style.transform = `translateX(${offset3}%)`;
    
}
setInterval(showSlide3, 3000);

//  Logo designers work slide show
let slideIndex4 = 0;
const slides4 = document.querySelectorAll('.image-slide4');
const totalSlides4 = slides4.length;

function showSlide4() {
    slideIndex4++;
    if (slideIndex4 >= totalSlides4-2) {
        slideIndex4 = 0;
    }
    const offset4 = -slideIndex4 * 30; // Move to the next slide
    document.querySelector('.image-slider4').style.transform = `translateX(${offset4}%)`;
    
}
setInterval(showSlide4, 3000);
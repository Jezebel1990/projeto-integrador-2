$('.carousel.carousel-slider').carousel({
    padding: 200    
});
autoplay();
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 4500);
}

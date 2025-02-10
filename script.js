$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            990: {
                items: 2
            },
        }
    });
});
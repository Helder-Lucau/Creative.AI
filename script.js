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

// Number counting animation
let valueDisplays = document.querySelectorAll(".countdown")
let interval = 2000
valueDisplays.forEach((display) => {
    let startValue = 0;
    let endValue = parseFloat(display.getAttribute("data-val"));
    endValue = Math.round(endValue)
    let duration = Math.floor(interval / endValue);

    // Start the countdown animation from 0 to the given value
    let counter = setInterval(function () {
        startValue += 1;
        display.textContent = `${startValue}+`;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
})

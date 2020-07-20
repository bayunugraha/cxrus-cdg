// owl-carousel-tabs
$(document).ready(function () {
    $('.owl-carousel.owl-contract-scheme').owlCarousel({
        loop: true,
        margin: 35,
        nav: true,
        dots: false,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1600: {
                items: 5
            }
        }
    });
});
// owl-carousel-tabs
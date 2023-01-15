$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    nav: true,
    loop: true,
    animateIn:'flipInY',
    animateOut:'zoomOutDown',
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots:false
        },
        485: {
            items: 1,
            dots:false
        },
        728: {
            items: 2,
            dots:false
        },
        960: {
            items: 3,
            dots:false
        },
        1200: {
            items: 3,
            dots:true
        }
    }
});


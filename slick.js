$(document).ready(function () {
    $(".slick-slider").slick({
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        rows: 1,
        swipeToSlide: true,
        arrows: true,
        mobileFirst: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 2024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

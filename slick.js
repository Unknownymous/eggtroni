$(function () {
    
    $('.responsive').slick({
    centerMode: true,
    centerPadding: '50px',
        slidesToShow: 3,
        arrows: true,
        dots: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
    // prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
    // nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    });

});
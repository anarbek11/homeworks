$('.sliders').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
})

$(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    asNavFor: ".sliders",
    centerMode: true,
    focusOnSelect: true,
    slide: "div"
});

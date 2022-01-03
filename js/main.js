$(function(){
$('.header-slider').slick({
    dots:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    vertical:true
});

$('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical:true,
    asNavFor: '.protuct__content',
    prevArrow: '<button type="button" class="slick-prev1"><img src="images/prew1.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next1"><img src="images/next1.svg" alt=""></button>',
  });
  $('.protuct__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    fade: false,
    vertical:true,
    asNavFor: '.product__name',
    focusOnSelect: false
  });

});
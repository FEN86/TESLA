(function ($, undefined) {

  $('.slider').slick({
    arrows: false,
    fade: true,
    dots: true
  });

  $('.header__btn').on('click', function () {
    $('.menu').addClass('active');
  });
  $('.close-btn').on('click', function () {
    $('.menu').removeClass('active');
  });

  $(".slider-btn__arrow.icon-angle-left").click(function (event) {
    $(".slider").slick("slickPrev");
  });
  $(".slider-btn__arrow.icon-angle-right").click(function (event) {
    $(".slider").slick("slickNext");
  });

})(jQuery);
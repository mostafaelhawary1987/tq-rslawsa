$(window).on("load", function () {
  $(".pre-loader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });
});
$(document).ready(function () {


  //////////** main slider **//////////
  var mainswiper = new Swiper(".main-slider .swiper-container", {
    spaceBetween: 15,
    loop: false,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });


 
  $(".menu-btn").click(function () {
    $("body").addClass("overflow");
    $(".overlay").fadeIn();
    $(".nav-list").addClass("active");
  });
  $(".overlay").click(function () {
    $("body").removeClass("overflow");
    $(".overlay").fadeOut();
    $(".nav-list").removeClass("active");
  });

 
});

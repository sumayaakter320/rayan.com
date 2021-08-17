$(function () {
  "use strict;";

  // Select all links with hashes
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 50,
            },
            3000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  //preloader js start
  $(window).load(function () {
    $(".preloader").delay(500).fadeOut(500);
  });

  //Back to top button js start

  $(".bk_to_top").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      3000
    );
  });

  $(window).on("scroll", function () {
    var btn_scroll = $(this).scrollTop();

    if (btn_scroll > 50) {
      $(".bk_to_top").fadeIn();
    } else {
      $(".bk_to_top").fadeOut();
    }
  });

  ///////////////// fixed menu on scroll for desktop
  if ($(window).width() > 992) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#menu_part").addClass("fixed-top");
        // add padding top to show content behind navbar
        $("body").css("padding-top", $(".navbar").outerHeight() + "px");
      } else {
        $("#menu_part").removeClass("fixed-top");
        // remove padding top from body
        $("body").css("padding-top", "0");
      }
    });
  } // end if

  //banner slider js start
  // $(".banner_slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   nextArrow: '<i class="fas fa-arrow-right next_arrow"></i>',
  //   prevArrow: '<i class="fas fa-arrow-left prev_arrow"></i>',
  // });

  $(".venobox").venobox();

  $(".testi_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arrow"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  //Mixitup start
//  var containerEl = document.querySelector(".mix");
//
//  var mixer = mixitup(containerEl);
//
//  $(".folio_menu ul li").on("click", function () {
//    $(".folio_menu ul li").removeClass("active");
//    $(this).toggleClass("active");
//  });
  //Mixitup end
});

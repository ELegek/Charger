$(function(){

  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });



    $('.slider-header').slick ({
        arrows: true,
        fade: true,
        infinite: true,
        prevArrow: '<button class="slick-prev slick-arrow" type="button">Prev</button>',
    });

    $('.projects__slider').slick ({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: 3000,
        mobileFirst:true,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
    });

    $('.projects__slider2').slick ({
        rtl: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: 3000,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
    });


    $('.revious__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: 3000,
    });
  
});
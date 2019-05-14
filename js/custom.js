$(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
            $('.navigation').addClass('menu_fix');
        } else {
            $(".navigation").removeClass('menu_fix');
        }
    })

    //    Mixotup
    var containerEl = document.querySelector('.portfolio_item');

    var mixer = mixitup(containerEl);

    $('.controls ul li').click(function () {
        $('.controls ul li').removeClass('active');
        $(this).addClass('active');
    });
    // ===================== =Bannar start ===================
    $('#banner_part').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        arrows: false,
        cssEase: 'linear'
    });

    // ===================== =Bannar End ===================
    // ===================== =blog start ===================
    $('.blog_item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoPlay: true,
        autoplaySpeed: 500,
        prevArrow: '<i class="fas left fa-chevron-left"></i>',
        nextArrow: '<i class="fas right fa-chevron-right"></i>'

    });
    // ===================== =blog End ===================
    // =========scrollTop=====================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 1000);
    });
    // =========scrollTop end=====================
    // =========Venobox Start=====================
    $('.venobox').venobox({
        titleattr: 'data-title',
        spinner: 'rotating-plane',
        spinColor: 'rgb(249, 191, 59)',
        closeBackground: '#222',
    });
    // =========Venobox end=====================
    // =========testimonial_item start=====================
       $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
          autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
    });
// ===============testimonial_item End============================
    // =========Counter Start=====================
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // =========Counter end=====================
    // =========Sponsor end=====================
    $('.sponsor_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
          autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
    });

});
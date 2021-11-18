$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".parallax__img").css({
        "transform" : "translate(0px, -" + st/15 + "px"
    });
    $(".parallax2__img").css({
        "transform" : "translate(0px, -" + st/20 + "px"
    });
    $(".parallax3__img").css({
        "transform" : "translate(0px, -" + st/15 + "px"
    });
    $(".parallax4__img").css({
        "transform" : "translate(0px, -" + st/20 + "px"
    });
});

document.querySelector('#burgir').addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
        document.querySelector('.header__navbar .nav').classList.add('opacity');
        setTimeout(function() {
            document.querySelector('.header__navbar .nav').classList.remove('active');
            document.querySelector('.header__navbar .nav').classList.remove('opacity');
            document.querySelector('body').classList.remove('hidden');
        }, 500);
    } else {
        this.classList.add('active');
        setTimeout(function() {
            document.querySelector('.header__navbar .nav').classList.add('active');
        }, 500);
        document.querySelector('.header__navbar .nav').classList.add('active');
        document.querySelector('body').classList.add('hidden');
    };
});

$(window).scroll(function(){
    if ( $(this).scrollTop() > 100) {
        $('.besamogas').css({bottom : '20px'});
    } else {
        $('.besamogas').css({bottom : '-100%'});
    }
});
$('.besamogas').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

document.querySelector('.footer__phone').addEventListener('click', function() {
    this.classList.add('active');
});
$(window).ready(function() {

    $('.js--sticky').waypoint(function(direction) {
        if (direction == 'down') {
            $('.regular-nav').addClass('sticky');
            $('.logo-box').addClass('js-logo-mobile');
            $('.navigation_button').addClass('js-nav-backgound'); //icon-mod-mobile tt
            $('.js-user-icon-1').attr('src', 'img/Icon search.png');
            $('.js-user-icon-2').attr('src', 'img/Icon heart.png');
            $('.js-user-icon-3').attr('src', 'img/Icon bag.png');
            $('.icon-bag-text').addClass('js-user-text');

        } else {
            $('.regular-nav').removeClass('sticky');
            $('.logo-box').removeClass('js-logo-mobile');
            $('.navigation_button').removeClass('js-nav-backgound');
            $('.js-user-icon-1').attr('src', 'img/Icon search-white.png');
            $('.js-user-icon-2').attr('src', 'img/Icon heart-white.png');
            $('.js-user-icon-3').attr('src', 'img/Icon bag-white.png');
            $('.icon-bag-text').removeClass('js-user-text');
        }
    }, {
        offset: '25%'
    });

});
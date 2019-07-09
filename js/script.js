$(document).ready(function(){

    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.container-menu-responsive').addClass('menu-scroll');
            $('.container-menu').addClass('menu-scroll');
        }
        else{
            $('.container-menu-responsive').removeClass('menu-scroll');
            $('.container-menu').removeClass('menu-scroll');
        }
    })

    $('#show-menu').click(function(){
        $('.container-menu-item').css('left','0%');
        $('.container-menu-item').css('transition', 'left 0.3s ease-in-out');
    })
    $('#hide-menu').click(function(){
        $('.container-menu-item').css('left','-100%');
    })
})
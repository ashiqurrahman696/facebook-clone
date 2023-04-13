$(document).ready(function(){
    $('#search').hide();
    $('#h-left form').on('click', function(){
        $('#search').show();
    });
    $('#search-input i').on('click', function(){
        $('#search').hide();
    });
    $('.tab').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('#stories').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        items: 4,
        margin: 10
    });
    $('.like').on('click', function(){
        $(this).toggleClass('liked');
        $('#like i').toggleClass('far');
        $('#like i').toggleClass('fa');
    });
});
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplayspeed: 3000,
        speed:2000,
        fade: true
    });
    $('.marketplace_wrapper').slick({
        infinite: true,
        dots: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/marketplaces/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/marketplaces/right.png"></button>',
        slidesToShow: 1
    });
});

// все что дальше - new

jQuery(document).ready(function($){
    // Клик по кнопке-гамбургеру открывает меню, повторный клик закрывает  
    $('.burger').click(function(){
      $('.burger').toggleClass("open");
      $('.sidebar').toggleClass("show");
      $('.hidden-overley').toggleClass("show");
      $('body').toggleClass("sidebar-opened")
    });
    // Когда панель открыта, клик по облсти вне панели закрывает ее 
    $('.hidden-overley').click(function(){
      $(this).toggleClass("show");
      $('.sidebar').toggleClass("show");
      $('.burger').toggleClass("open");
      $('body').toggleClass("sidebar-opened")
    });
    // меняем активность пункта меню по клику (НЕОБЯЗАТЕЛЬНО)
    $('.sidebar ul li').click(function(){
        $(this).addClass("current-menu-item").siblings().removeClass("current-menu-item");
    });
});

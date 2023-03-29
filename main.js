$(document).ready(function(){
    $(window).scroll(function(){
        /* Barra de navegación con propiedad sticky cuando scroll */
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Mostrar el Scroll button/limpiar código */
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll button
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // eliminar el scroll
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Aplica nuevamente el desplazamiento suave en los elementos del menú haga clic
        $('html').css("scrollBehavior", "smooth");
    });

    /* toggle menu/navbar script */
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /* Animación de texto typing */
    var typed = new Typed(".typing", {
        strings: ["Frontend developer", "Backend developer", "Desktop developer", "Designer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend developer", "Backend developer", "Desktop developer", "Designer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
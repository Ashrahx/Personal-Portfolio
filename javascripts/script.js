'use strict';

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
        strings: ["Frontend developer", "Designer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend developer", "Designer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

//Carrusel
// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});

// Función para cambiar el modo de color y el texto del enlace
function toggleColorMode() {
    const root = document.documentElement;
    const link = document.getElementById("colorModeLink");
  
    if (root.style.getPropertyValue("--purple") === "red") {
      // Cambia a modo normal
      root.style.setProperty("--purple", "#6202c2");
      root.style.setProperty("--lightblue", "#34b4fc");
      root.style.setProperty("--lightpurple", "#9977bc");
      link.textContent = "Color blindness mode";
    } else {
      // Cambia a modo daltonismo
      root.style.setProperty("--purple", "red"); // Cambia el valor a uno visible para el ejemplo
      root.style.setProperty("--lightblue", "green"); // Cambia el valor a uno visible para el ejemplo
      root.style.setProperty("--lightpurple", "blue"); // Cambia el valor a uno visible para el ejemplo
      link.textContent = "Normal color mode";
    }
  }

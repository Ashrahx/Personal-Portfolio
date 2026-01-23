'use strict';

$(document).ready(function(){

    $(window).scroll(function(){
        // Barra de navegación sticky
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Botón Scroll-up
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Acción del botón Scroll-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Menú hamburguesa
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Animación de texto
    var typed = new Typed(".typing", {
        strings: ["Frontend developer", "Backend developer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Carrusel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });

    // Toggle Skills/Tools
    const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");

    if(toggleBtns.length > 0){
        for (let i = 0; i < toggleBtns.length; i++) {
            toggleBtns[i].addEventListener("click", function () {
                elemToggleFunc(toggleBtnBox);
                for (let j = 0; j < toggleBtns.length; j++) { elemToggleFunc(toggleBtns[j]); }
                elemToggleFunc(skillsBox);
            });
        }
    }

    // Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    if(contactForm){
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var form = event.target;
            var formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(function(response) {
                if (response.ok) {
                    document.getElementById('modal-message').textContent = 'Thank you for your message!';
                    form.reset();
                    showModal();
                } else {
                    response.json().then(function(data) {
                        document.getElementById('modal-message').textContent = data.error || 'Oops! Something went wrong.';
                        showModal();
                    });
                }
            }).catch(function(error) {
                document.getElementById('modal-message').textContent = 'Oops! Something went wrong.';
                showModal();
            });
        });
    }

    function showModal() {
        var modal = document.getElementById('modal');
        modal.style.display = 'flex';

        document.getElementById('close-modal').addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});

/* ===========================
   SEGURIDAD (ANTI-COPY)
   =========================== */
const disabledKeys = ["c", "C", "x", "J", "u", "I"];

const showAlert = e => {
    e.preventDefault(); 
    return alert("Sorry, you can't view or copy source codes this way!");
}

// Bloquea clic derecho (Menú contextual)
document.addEventListener("contextmenu", e => {
    showAlert(e); 
});

// Bloquea Ctrl + Teclas prohibidas y F12
document.addEventListener("keydown", e => {
    if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
        showAlert(e);
    }
});

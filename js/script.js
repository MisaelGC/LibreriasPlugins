// JDSlider
$('.slideshow').jdSlider({
    wrap: '.slide-inner', //Especificar el Slide que vamos a usar
    isAuto: true, //Inicia la animación automaticamente
    isLoop: true, //Se vuelve loop o ciclico
    interval: 3000, //Tiempo por cada Slide
    isCursor: true //Pausar animacion con mouse
});


// Pinterest Grid
$('.pinterest-grid').pinterest_grid({
    no_columns: 4, //Número de columnas
    padding_x: 10, //Margenes internos horizontales
    padding_y: 10, //Margenes internos vertical
    margin_bottom: 50, //Margen inferior
    single_column_breakpoint: 769 //Punto de quiebre en navegador
});


// Ekko Lightbox
$(document).on("click", "[data-toggle='lightbox']", function(e) {

    e.preventDefault(); //Quitar eventos por efecto en el navegador
    $(this).ekkoLightbox(); //Activa el Ekko Lightbox
});


// Mouse Parallax Efect - JQuery
var mouseParallax = $(".mouseParallax");

$(".mouseParallax").mousemove(function(e) {

    var posX = e.offsetX;
    var posY = e.offsetY;

    for (var i = 0; i < mouseParallax.length; i++) {

        $(mouseParallax[i]).css({

            "width": "110%",
            "left": -posX / (i * 250) + "%",
            "top": posY / (i * 250) + "%"
        });
    }

    $(mouseParallax[0]).css({ "width": "100%" });

});


// Navegacion Scroll
$(".nav-link").click(function(e) {

    e.preventDefault();

    var target = $(this).attr("href");

    $("html, body").animate({

        scrollTop: $(target).offset().top
    }, 1000, "easeOutBack");
});


// ScrollUp
$.scrollUp({

    scrollText: "",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
});


// Super Scrollorama
var controller = $.superscrollorama();

controller.addTween("#articulos .container", TweenMax.from(

    $("#articulos .container"), .25, { css: { marginLeft: "-100%" }, ease: Quad.easeInOut }
));


// Sticky JS
if (window.matchMedia("(min-width:991px)").matches) {

    $("#top").sticky({ topSpacing: 0, zIndex: 100 });
}


// Validacion de Formulario
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form,
            addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        }, false);
    }, false);
})();

// ICheck
$(".icheck").iCheck({

    checkboxClass: "icheckbox_flat-blue",
    radioClass: "iradio_flat-blue"
});
// Inicialización de Swiper para el carrusel con la clase ".mySwiper-2"
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3, // Muestra 3 diapositivas por vez de forma predeterminada
    spaceBetween: 20, // Espacio de 20px entre las diapositivas
    loop: true, // Habilita el bucle infinito (cuando llega al final, vuelve al inicio)
    loopFillGroupWithBlank: true, // Rellena con diapositivas vacías si el grupo no está completo
    navigation: {
        nextEl: ".swiper-button-next", // Botón para avanzar a la siguiente diapositiva
        prevEl: ".swiper-button-prev", // Botón para retroceder a la diapositiva anterior
    },
    breakpoints: {
        // Configuración de los puntos de interrupción para hacerlo responsivo
        0: {
            slidesPerView: 1, // Muestra 1 diapositiva en pantallas pequeñas (menos de 520px)
        },
        520: {
            slidesPerView: 2, // Muestra 2 diapositivas en pantallas medianas (de 520px a 949px)
        },
        950: {
            slidesPerView: 3, // Muestra 3 diapositivas en pantallas grandes (950px o más)
        }
    }
});

// Selecciona todos los elementos con la clase ".tabInput" (generalmente para inputs de pestañas)
let tabInputs = document.querySelectorAll(".tabInput");

// Itera sobre cada input con la clase ".tabInput"
tabInputs.forEach(function(input){

    // Agrega un evento de cambio (change) a cada input
    input.addEventListener("change", function(){
        let id = input.ariaValueMax; // Obtiene el valor máximo de la propiedad 'ariaValueMax' del input (esto se utiliza para identificar el swiper)
        let thisSwiper = document.getElementById("swiper" + id); // Selecciona el swiper correspondiente utilizando el id formado con "swiper" + el id del input
        thisSwiper.swiper.update(); // Actualiza el swiper para reflejar cualquier cambio (por ejemplo, cuando el input se activa o cambia)
    })

});

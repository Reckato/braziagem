const botonMenu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if(botonMenu && nav){

    botonMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}


/* Carrusel Inicio*/

const slides = document.querySelectorAll(".slide");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

let indice = 0;


if(slides.length > 0 && btnAnterior && btnSiguiente){

    function mostrarSlide(numero){

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[numero].classList.add("active");
    }


    function siguienteSlide(){

        indice++;

        if(indice >= slides.length){
            indice = 0;
        }

        mostrarSlide(indice);
    }


    function anteriorSlide(){

        indice--;

        if(indice < 0){
            indice = slides.length - 1;
        }

        mostrarSlide(indice);
    }


    btnSiguiente.addEventListener("click", siguienteSlide);
    btnAnterior.addEventListener("click", anteriorSlide);

    setInterval(siguienteSlide, 7000);

}



/* Modal de imagenes */

const modal = document.getElementById("modal");
const imagenModal = document.getElementById("imagen-modal");
const cerrarModal = document.getElementById("cerrar-modal");

const imagenes = document.querySelectorAll(".modal-img");


if(modal && imagenModal && cerrarModal){

    imagenes.forEach(imagen => {

        imagen.addEventListener("click", () => {

            modal.classList.add("active");

            imagenModal.src = imagen.src;

        });

    });


    cerrarModal.addEventListener("click", () => {

        modal.classList.remove("active");

    });


    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.classList.remove("active");

        }

    });

}


/* Selector de idiomas */


const selectorIdioma = document.getElementById("idioma");


if(selectorIdioma){

    selectorIdioma.addEventListener("change", () => {

        const idioma = selectorIdioma.value;

        const elementos = document.querySelectorAll("[data-es]");



        elementos.forEach(elemento => {

            elemento.textContent = elemento.getAttribute(`data-${idioma}`);

        });

    });

}
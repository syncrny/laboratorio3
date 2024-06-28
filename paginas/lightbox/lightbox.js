// Selecciona todas las imágenes que tienen el atributo data-lightbox
const images = document.querySelectorAll("img[data-lightbox]");

// Verifica si hay imágenes seleccionadas
if (images) {
    // Crea y configura el Lightbox
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    // Crea y configura el botón de cierre
    const lightboxCloseButton = document.createElement("button");
    lightboxCloseButton.classList.add("lightbox__close");
    lightboxCloseButton.innerHTML = "X";
    lightbox.appendChild(lightboxCloseButton);

    // Agrega el evento click a cada imagen para mostrarla en el Lightbox
    images.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = image.src;
            
            // Elimina cualquier contenido previo en el Lightbox y agrega la nueva imagen
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
            lightbox.appendChild(lightboxCloseButton);
        });
    });

    // Agrega el evento click al Lightbox para cerrarlo cuando se hace click fuera de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove("active");
        document.body.classList.remove("overflow-hidden");
    });

    // Agrega el evento click al botón de cierre para cerrar el Lightbox
    lightboxCloseButton.addEventListener("click", () => {
        lightbox.classList.remove("active");
        document.body.classList.remove("overflow-hidden");
    });
}

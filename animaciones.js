document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3, // Cambia el valor según tus necesidades
        rootMargin: "0px 0px -50px 0px" // Ajusta el margen raíz para activar la animación antes
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

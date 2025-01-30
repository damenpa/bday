document.addEventListener("DOMContentLoaded", () => {
    const numStars = 100; // Cantidad de estrellas
    const numComets = 10; // Cantidad de cometas
    const space = document.body;

    // Función para generar una estrella
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        space.appendChild(star);
    }

    // Función para generar un cometa
    function createComet() {
        const comet = document.createElement("div");
        comet.classList.add("comet");
        comet.style.top = `${Math.random() * 100}vh`;
        comet.style.left = `${Math.random() * 100}vw`;
        space.appendChild(comet);
    }

    // Generar estrellas
    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    // Generar cometas
    for (let i = 0; i < numComets; i++) {
        createComet();
    }

    // Crear Saturno
    const saturn = document.createElement("div");
    saturn.classList.add("planet", "saturn");
    space.appendChild(saturn);
});

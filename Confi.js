let isConfettiRunning = false;

function startConfettiAnimation() {
    if (typeof confetti === 'undefined') {
        console.error("ERROR: La función 'confetti' no está definida.");
        return;
    }

    if (isConfettiRunning) return;

    isConfettiRunning = true;
    console.log("Lanzando ráfaga de 64 partículas de trigo.");

    // Lanzamos exactamente 64 partículas en un solo disparo
    confetti({
        particleCount: 64, // Cantidad exacta solicitada
        spread: 70,
        origin: { x: 0.5, y: 0.6 },
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
            image: [{
                src: "trigo.png", // Asegúrate de que esta imagen exista
                width: 32,
                height: 32,
            }],
        },
    });

    // Pequeño cooldown para evitar spam visual
    setTimeout(() => {
        isConfettiRunning = false;
        console.log("Listo para otro lanzamiento.");
    }, 1000);
}
// --- EFECTO DE FLOTACIÓN EN CONTENEDORES ---
const contenedores = document.querySelectorAll('.animado');
contenedores.forEach((div, i) => {
    setTimeout(() => {
        div.classList.add('float');
    }, i * 400);
});

// --- DESTELLOS CRISTALINOS ---

const sparkContainer = document.getElementById("spark-container");

function crearDestello() {
    const spark = document.createElement("div");
    spark.classList.add("spark");

    // Ubicación aleatoria
    spark.style.left = Math.random() * 100 + "%";
    spark.style.top = Math.random() * 100 + "%";

    // Animación
    spark.style.animation = "sparkle 1.8s ease-out forwards";

    sparkContainer.appendChild(spark);

    setTimeout(() => spark.remove(), 2000);
}

setInterval(crearDestello, 300);

// Animación del destello
const styleAnim = document.createElement("style");
styleAnim.textContent = `
@keyframes sparkle {
    0% { opacity: 0; transform: scale(0.3); }
    40% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.6); }
}`;
document.head.appendChild(styleAnim);


// --- BRILLO PULSANTE DEL TÍTULO ---
const titulo = document.querySelector(".titulo-brillante");

setInterval(() => {
    titulo.style.filter = "brightness(1.4)";
    setTimeout(() => {
        titulo.style.filter = "brightness(1)";
    }, 400);
}, 2200);


// --- ANIMACIÓN FLOTANTE PARA LA BIBOO DE CUERPO COMPLETO ---
const fullBody = document.querySelector(".full-body-biboo");

if (fullBody) {
    fullBody.style.animation = "floatBiboo 4s ease-in-out infinite";
}

// Insertamos la animación en el documento
const estiloBiboo = document.createElement("style");
estiloBiboo.textContent = `
@keyframes floatBiboo {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
}`;
document.head.appendChild(estiloBiboo);
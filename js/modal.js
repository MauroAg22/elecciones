// Obtén elementos del DOM
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

// Abrir el modal cuando se hace clic en el botón
openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Cerrar el modal cuando se hace clic en el botón de cierre o en el fondo
closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
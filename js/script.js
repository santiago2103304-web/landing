document.addEventListener('DOMContentLoaded', () => {
    const botonCampana = document.getElementById('btn-accion');
    if (botonCampana) {
        botonCampana.addEventListener('click', () => {
            alert('¡Gracias por tu apoyo, Santiago! Te has unido a la lista de cambio para este 2026.');
        });
    }
});
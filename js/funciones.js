document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo');
    const cambiarTextoBtn = document.getElementById('cambiarTexto');
    const resaltarBtn = document.getElementById('resaltar');
    const cambiarFondoBtn = document.getElementById('cambiarFondo');
    const editarBotonesBtn = document.getElementById('editarBotones');
    const menuBtn = document.getElementById('menuBtn');
    const dropdown = document.getElementById('dropdown');

    const coloresFondo = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];
    let colorIndex = 0;

    const tamaños = ['small', 'medium', 'large'];
    const formas = ['square', 'rounded', 'circle'];
    let tamañoIndex = 0;
    let formaIndex = 0;

    cambiarTextoBtn.addEventListener('click', () => {
        titulo.textContent = 'Texto Cambiado';
    });

    resaltarBtn.addEventListener('click', () => {
        titulo.classList.toggle('highlight');
    });

    cambiarFondoBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = coloresFondo[colorIndex];
        colorIndex = (colorIndex + 1) % coloresFondo.length;
    });

    editarBotonesBtn.addEventListener('click', () => {
        cambiarTextoBtn.textContent = 'Texto Modificado';
        resaltarBtn.textContent = 'Resaltar Modificado';
    });

    menuBtn.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!menuBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle(tamaños[tamañoIndex]);
            button.classList.toggle(formas[formaIndex]);
            tamañoIndex = (tamañoIndex + 1) % tamaños.length;
            formaIndex = (formaIndex + 1) % formas.length;
        });
    });
});

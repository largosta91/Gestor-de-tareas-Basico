const input = document.getElementById('tareaInput');
const boton = document.getElementById('agregarBtn');
const lista = document.getElementById('listaTareas');

// 🔹 Recuperar tareas guardadas en localStorage o iniciar vacío
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
renderTareas();

boton.addEventListener('click', () => {
    const tarea = input.value.trim();
    if (tarea === '') return;

    tareas.push(tarea);
    guardarTareas();

    renderTareas();
    input.value = '';
});

// 🔹 Mostrar todas las tareas en pantalla
function renderTareas() {
    lista.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;

        // Marcar como completada al hacer click
        li.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
        });

        // Botón de borrar
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = '❌';
        btnBorrar.onclick = () => {
            tareas.splice(index, 1);
            guardarTareas();
            renderTareas();
        };

        li.appendChild(btnBorrar);
        lista.appendChild(li);
    });
}

// 🔹 Guardar en localStorage
function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}


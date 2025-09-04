const input = document.getElementById('tareaInput');
const boton = document.getElementById('agregarBtn');
const lista = document.getElementById('listaTareas');

boton.addEventListener('click', () => {
    const tarea = input.value.trim();
    if(tarea === '') return;

    const li = document.createElement('li');
    li.textContent = tarea;
    li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';
    });

    lista.appendChild(li);
    input.value = '';
});
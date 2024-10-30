// Selección de los divs de colores y sus colores originales
const divAzul = document.getElementById('divAzul');
const divRojo = document.getElementById('divRojo');
const divVerde = document.getElementById('divVerde');
const divAmarillo = document.getElementById('divAmarillo');

const coloresOriginales = {
    divAzul: 'blue',
    divRojo: 'red',
    divVerde: 'green',
    divAmarillo: 'yellow'
};

// Función para alternar entre color original y negro al hacer clic
function toggleColor(event) {
    const div = event.target;
    div.style.backgroundColor = div.style.backgroundColor === 'black' ? coloresOriginales[div.id] : 'black';
}

// Asignar evento de clic a cada div para alternar color
divAzul.addEventListener('click', toggleColor);
divRojo.addEventListener('click', toggleColor);
divVerde.addEventListener('click', toggleColor);
divAmarillo.addEventListener('click', toggleColor);

// Selección del div "key" y el elemento de última tecla presionada
const keyDiv = document.getElementById('key');
const ultimaTeclaDiv = document.getElementById('ultima-tecla');
const dynamicContainer = document.getElementById('dynamic-container');

// Manejo del evento de teclado
document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase(); // Convertimos la tecla a minúscula para evitar problemas de mayúsculas

    // Cambiar el color del div "key" según la tecla presionada
    if (key === 'a') {
        keyDiv.style.backgroundColor = 'pink';
        ultimaTeclaDiv.textContent = 'Última tecla presionada: A';
    } else if (key === 's') {
        keyDiv.style.backgroundColor = 'orange';
        ultimaTeclaDiv.textContent = 'Última tecla presionada: S';
    } else if (key === 'd') {
        keyDiv.style.backgroundColor = 'skyblue';
        ultimaTeclaDiv.textContent = 'Última tecla presionada: D';
    } else if (key === 'r') {
        // Resetear el color del div "key" a blanco
        keyDiv.style.backgroundColor = 'white';
        ultimaTeclaDiv.textContent = 'Última tecla presionada: R';
        
        // Eliminar todos los divs generados dinámicamente en el dynamicContainer
        while (dynamicContainer.firstChild) {
            dynamicContainer.removeChild(dynamicContainer.firstChild);
        }
    }

    // Crear un nuevo div con color según la tecla presionada
    if (key === 'q' || key === 'w' || key === 'e') {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('color-box');

        if (key === 'q') {
            nuevoDiv.style.backgroundColor = 'purple';
            ultimaTeclaDiv.textContent = 'Última tecla presionada: Q';
        } else if (key === 'w') {
            nuevoDiv.style.backgroundColor = 'gray';
            ultimaTeclaDiv.textContent = 'Última tecla presionada: W';
        } else if (key === 'e') {
            nuevoDiv.style.backgroundColor = 'brown';
            ultimaTeclaDiv.textContent = 'Última tecla presionada: E';
        }

        // Agregar el nuevo div al contenedor de dinámicos
        dynamicContainer.appendChild(nuevoDiv);
    }
});

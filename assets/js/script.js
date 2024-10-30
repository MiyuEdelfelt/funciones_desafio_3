function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

// Pinta el div de verde al cargar la página
pintar(ele);

// Cambia el color a amarillo al hacer clic en el div
ele.addEventListener("click", function(event) {
    event.stopPropagation();  // Evita que el clic en el div se propague al documento
    pintar(ele, 'yellow');
});

// Cambia el color a verde al hacer clic en cualquier otra parte de la página
document.addEventListener("click", function() {
    pintar(ele, 'green');
});

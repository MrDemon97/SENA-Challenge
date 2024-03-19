// Función para calcular el área y el perímetro de un círculo
function calcularCirculo() {
    var radio = parseFloat(document.getElementById("radio").value);
    if (!isNaN(radio)) {
        var opcion = document.getElementById("opcion-circulo").value;
        if (opcion === "2") {
            var area = Math.PI * radio * radio;
            alert("El área del círculo es: " + area);
        } else if (opcion === "3") {
            var perimetro = 2 * Math.PI * radio;
            alert("El perímetro del círculo es: " + perimetro);
        } else {
            alert("Selecciona una opción válida.");
        }
    } else {
        alert("Ingresa un valor válido para el radio del círculo.");
    }
}

// Función para calcular el área y el perímetro de un rectángulo
function calcularRectangulo() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    if (!isNaN(base) && !isNaN(altura)) {
        var opcion = document.getElementById("opcion-rectangulo").value;
        if (opcion === "2") {
            var area = base * altura;
            alert("El área del rectángulo es: " + area);
        } else if (opcion === "3") {
            var perimetro = 2 * (base + altura);
            alert("El perímetro del rectángulo es: " + perimetro);
        } else {
            alert("Selecciona una opción válida.");
        }
    } else {
        alert("Ingresa valores válidos para la base y la altura del rectángulo.");
    }
}

// Función para calcular el área y el volumen de una esfera
function calcularEsfera() {
    var radioEsfera = parseFloat(document.getElementById("radio-esfera").value);
    if (!isNaN(radioEsfera)) {
        var opcion = document.getElementById("opcion-esfera").value;
        if (opcion === "2") {
            var area = 4 * Math.PI * radioEsfera * radioEsfera;
            alert("El área de la esfera es: " + area);
        } else if (opcion === "3") {
            var volumen = (4 / 3) * Math.PI * radioEsfera * radioEsfera * radioEsfera;
            alert("El volumen de la esfera es: " + volumen);
        } else {
            alert("Selecciona una opción válida.");
        }
    } else {
        alert("Ingresa un valor válido para el radio de la esfera.");
    }
}

// Función para calcular el área, el volumen y el perímetro de un cubo
function calcularCubo() {
    var lado = parseFloat(document.getElementById("lado-cubo").value);
    if (!isNaN(lado)) {
        var opcion = document.getElementById("opcion-cubo").value;
        if (opcion === "2") {
            var area = 6 * lado * lado;
            alert("El área del cubo es: " + area);
        } else if (opcion === "3") {
            var volumen = lado * lado * lado;
            alert("El volumen del cubo es: " + volumen);
        } else if (opcion === "4") {
            var perimetro = 12 * lado;
            alert("El perímetro del cubo es: " + perimetro);
        } else {
            alert("Selecciona una opción válida.");
        }
    } else {
        alert("Ingresa un valor válido para el lado del cubo.");
    }
}
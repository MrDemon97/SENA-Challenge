// Función para calcular el área y el perímetro de un círculo
function calcularCirculo() {
    // Obtenemos el valor del radio del círculo del campo de entrada
    var radio = parseFloat(document.getElementById("radio").value);
    // Verificamos si el valor ingresado es un número válido
    if (!isNaN(radio)) {
        // Obtenemos la opción seleccionada (área o perímetro) del campo de selección
        var opcion = document.getElementById("opcion-circulo").value;
        // Verificamos qué opción se seleccionó y realizamos el cálculo correspondiente
        if (opcion === "2") {
            // Fórmula para calcular el área del círculo
            var area = Math.PI * radio * radio;
            // Mostramos el resultado del cálculo del área en un mensaje de alerta
            alert("El área del círculo es: " + area);
        } else if (opcion === "3") {
            // Fórmula para calcular el perímetro del círculo
            var perimetro = 2 * Math.PI * radio;
            // Mostramos el resultado del cálculo del perímetro en un mensaje de alerta
            alert("El perímetro del círculo es: " + perimetro);
        } else {
            // Si no se selecciona una opción válida, mostramos un mensaje de alerta
            alert("Selecciona una opción válida.");
        }
    } else {
        // Si el valor ingresado para el radio no es válido, mostramos un mensaje de alerta
        alert("Ingresa un valor válido para el radio del círculo.");
    }
}

// Función para calcular el área y el perímetro de un rectángulo
function calcularRectangulo() {
    // Obtenemos los valores de la base y la altura del rectángulo del campo de entrada
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    // Verificamos si los valores ingresados para la base y la altura son números válidos
    if (!isNaN(base) && !isNaN(altura)) {
        // Obtenemos la opción seleccionada (área o perímetro) del campo de selección
        var opcion = document.getElementById("opcion-rectangulo").value;
        // Verificamos qué opción se seleccionó y realizamos el cálculo correspondiente
        if (opcion === "2") {
            // Fórmula para calcular el área del rectángulo
            var area = base * altura;
            // Mostramos el resultado del cálculo del área en un mensaje de alerta
            alert("El área del rectángulo es: " + area);
        } else if (opcion === "3") {
            // Fórmula para calcular el perímetro del rectángulo
            var perimetro = 2 * (base + altura);
            // Mostramos el resultado del cálculo del perímetro en un mensaje de alerta
            alert("El perímetro del rectángulo es: " + perimetro);
        } else {
            // Si no se selecciona una opción válida, mostramos un mensaje de alerta
            alert("Selecciona una opción válida.");
        }
    } else {
        // Si alguno de los valores ingresados no es válido, mostramos un mensaje de alerta
        alert("Ingresa valores válidos para la base y la altura del rectángulo.");
    }
}

// Función para calcular el área y el volumen de una esfera
function calcularEsfera() {
    // Obtenemos el valor del radio de la esfera del campo de entrada
    var radioEsfera = parseFloat(document.getElementById("radio-esfera").value);
    // Verificamos si el valor ingresado para el radio de la esfera es un número válido
    if (!isNaN(radioEsfera)) {
        // Obtenemos la opción seleccionada (área o volumen) del campo de selección
        var opcion = document.getElementById("opcion-esfera").value;
        // Verificamos qué opción se seleccionó y realizamos el cálculo correspondiente
        if (opcion === "2") {
            // Fórmula para calcular el área de la esfera
            var area = 4 * Math.PI * radioEsfera * radioEsfera;
            // Mostramos el resultado del cálculo del área en un mensaje de alerta
            alert("El área de la esfera es: " + area);
        } else if (opcion === "3") {
            // Fórmula para calcular el volumen de la esfera
            var volumen = (4 / 3) * Math.PI * radioEsfera * radioEsfera * radioEsfera;
            // Mostramos el resultado del cálculo del volumen en un mensaje de alerta
            alert("El volumen de la esfera es: " + volumen);
        } else {
            // Si no se selecciona una opción válida, mostramos un mensaje de alerta
            alert("Selecciona una opción válida.");
        }
    } else {
        // Si el valor ingresado para el radio de la esfera no es válido, mostramos un mensaje de alerta
        alert("Ingresa un valor válido para el radio de la esfera.");
    }
}
// Función para calcular el área, el volumen y el perímetro de un cubo
function calcularCubo() {
    // Obtenemos el valor del lado del cubo del campo de entrada
    var lado = parseFloat(document.getElementById("lado-cubo").value);
    // Verificamos si el valor ingresado para el lado del cubo es un número válido
    if (!isNaN(lado)) {
        // Obtenemos la opción seleccionada (área, volumen o perímetro) del campo de selección
        var opcion = document.getElementById("opcion-cubo").value;
        // Verificamos qué opción se seleccionó y realizamos el cálculo correspondiente
        if (opcion === "2") {
            // Fórmula para calcular el área del cubo (área de una de sus caras * cantidad de caras)
            var area = 6 * lado * lado;
            // Mostramos el resultado del cálculo del área en un mensaje de alerta
            alert("El área del cubo es: " + area);
        } else if (opcion === "3") {
            // Fórmula para calcular el volumen del cubo (lado^3)
            var volumen = lado * lado * lado;
            // Mostramos el resultado del cálculo del volumen en un mensaje de alerta
            alert("El volumen del cubo es: " + volumen);
        } else if (opcion === "4") {
            // Fórmula para calcular el perímetro del cubo (suma de las longitudes de todas las aristas)
            var perimetro = 12 * lado;
            // Mostramos el resultado del cálculo del perímetro en un mensaje de alerta
            alert("El perímetro del cubo es: " + perimetro);
        } else {
            // Si no se selecciona una opción válida, mostramos un mensaje de alerta
            alert("Selecciona una opción válida.");
        }
    } else {
        // Si el valor ingresado para el lado del cubo no es válido, mostramos un mensaje de alerta
        alert("Ingresa un valor válido para el lado del cubo.");
    }
}
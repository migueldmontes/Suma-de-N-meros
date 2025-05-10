let totalSuma = 0; // Acumulador de la suma total
let continuar = true; // Controla el bucle
let mensaje = document.getElementById("mensaje");
let resultado = document.getElementById("resultado");
let inicioBtn = document.getElementById("inicioBtn");

inicioBtn.addEventListener("click", function() {
  // Inicia el bucle de suma
  while (continuar) {
    // Pedir los dos números
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));

    // Calcular la suma
    let suma = num1 + num2;

    // Mostrar la suma en el documento
    resultado.innerHTML = `La suma de ${num1} y ${num2} es ${suma}`;

    // Acumular la suma total
    totalSuma += suma;

    // Preguntar si quiere continuar
    continuar = (prompt("¿Quieres continuar (S/N)?").toUpperCase() === "S");

    if (!continuar) {
      // Mostrar la suma total cuando termine
      mensaje.innerHTML = `La suma total de todos los números es: ${totalSuma}`;
      resultado.innerHTML += "<br>¡Hasta luego!";
    }
  }
});



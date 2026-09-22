// Constantes descriptivas para el cálculo
const TOTAL_NOTAS = 3;
const NOTA_MINIMA_APROBATORIA = 3.0;
 
// Escuchador de eventos (mejores prácticas)
document.getElementById("btnCalcular").addEventListener("click", calcularPromedio);
 
function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
 
    const elemPromedio = document.getElementById("mensajePromedio");
    const elemEstado = document.getElementById("mensajeEstado");
 
    // Validación de entradas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        elemPromedio.textContent = "Debe ingresar las tres notas.";
        elemEstado.textContent = "";
        return;
    }
 
    const sumaNotas = nota1 + nota2 + nota3;
    const promedio = sumaNotas / TOTAL_NOTAS;
 
    elemPromedio.textContent = "Promedio: " + promedio.toFixed(2);
 
    if (promedio >= NOTA_MINIMA_APROBATORIA) {
        elemEstado.textContent = "Resultado: aprobado";
    } else {
        elemEstado.textContent = "Resultado: reprobado";
    }
}
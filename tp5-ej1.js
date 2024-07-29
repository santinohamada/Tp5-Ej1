const boton = document.querySelector("button");
boton.addEventListener("click", solicitarNumero);

function generarNumero() {
  return Math.floor(Math.random() * 10000);
}
const div = document.querySelector(".align-content-center");
function solicitarNumero() {
  boton.remove();
  const formulario = document.createElement("form");
  formulario.innerHTML = `
    <label for="numero">Ingrese el numero!</label><br>
    <input type="number" name="numero">
    <button class = "btn btn-success"> intentar</button>
  `;
  const numero = generarNumero();
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    const numeroIngresado = document.querySelector("input").value
    comprobarNumero(numero, numeroIngresado);
  });
  div.appendChild(formulario);
}
let Mensaje = document.createElement("p");
function comprobarNumero( numero, numeroIngresado) {
  if (numero == numeroIngresado) {
      Mensaje.innerHTML = `<b>HAS ACERTADO!!!</b>`;
    }
    if (numero > numeroIngresado) {
        Mensaje.innerHTML = `<b>El numero que buscas es mayor al que ingresaste</b>`;
    }
    div.appendChild(Mensaje);
  if(numero <numeroIngresado) {
    Mensaje.innerHTML = `<b>El numero que buscas es menor al que ingresaste</b>`;
  }
}

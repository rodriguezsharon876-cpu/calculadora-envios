import { calcularEnvio } from "./envios.js";

const formulario = document.querySelector("#formulario");
const subtotalInput = document.querySelector("#subtotal");
const resultado = document.querySelector("#resultado");
const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  resultado.classList.remove("error");

  if (subtotalInput.value.trim() === "") {
    mostrarError("Ingresa un subtotal antes de calcular.");
    return;
  }

  const subtotal = Number(subtotalInput.value);

  try {
    const envio = calcularEnvio(subtotal);
    const total = subtotal + envio;
    resultado.textContent = `Envío: ${formatoCOP.format(envio)}. Total: ${formatoCOP.format(total)}.`;
  } catch (error) {
    mostrarError(error.message);
  }
});

function mostrarError(mensaje) {
  resultado.textContent = mensaje;
  resultado.classList.add("error");
}

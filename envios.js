/**
 * Calcula el costo de envío según el subtotal de la compra.
 * @param {number} subtotal Entero no negativo expresado en COP.
 * @returns {number} Costo del envío en COP.
 */
export function calcularEnvio(subtotal) {
  if (typeof subtotal !== "number" || !Number.isFinite(subtotal)) {
    throw new TypeError("El subtotal debe ser un número.");
  }

  if (!Number.isInteger(subtotal) || subtotal < 0) {
    throw new RangeError("El subtotal debe ser un entero no negativo.");
  }

  return subtotal >= 100000 ? 0 : 8000;
}

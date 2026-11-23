import test from "node:test";
import assert from "node:assert/strict";
import { calcularEnvio } from "./envios.js";

test("cobra 8000 COP justo antes del límite", () => {
  assert.equal(calcularEnvio(99999), 8000);
});

test("ofrece envío gratis en el límite exacto", () => {
  assert.equal(calcularEnvio(100000), 0);
});

test("ofrece envío gratis por encima del límite", () => {
  assert.equal(calcularEnvio(100001), 0);
});

test("rechaza un subtotal negativo", () => {
  assert.throws(() => calcularEnvio(-1), RangeError);
});

test("cobra 8000 COP para una compra de cero COP", () => {
  assert.equal(calcularEnvio(0), 8000);
});

# Calculadora de envíos

Proyecto de demostración que calcula el costo de envío de una compra expresada en pesos colombianos.

## Regla de negocio

- Si el subtotal es menor que 100.000 COP, el envío cuesta 8.000 COP.
- Si el subtotal es igual o mayor que 100.000 COP, el envío es gratis.
- El subtotal debe ser un número entero y no negativo.
- Los campos vacíos, números negativos y decimales muestran un error de validación.

## Requisitos

- Un navegador web actualizado.
- Node.js 22 o superior para ejecutar las pruebas.

## Uso en el navegador

1. Abre `index.html` en un navegador.
2. Escribe el subtotal sin puntos ni comas. Por ejemplo, `99999`.
3. Pulsa **Calcular**.
4. Comprueba el costo de envío y el total.

Ejemplos:

| Entrada | Resultado esperado |
|---:|---:|
| `99999` | Envío de 8.000 COP |
| `100000` | Envío de 0 COP |
| `100001` | Envío de 0 COP |
| campo vacío | Mensaje de validación |

## Pruebas automatizadas

Abre una terminal en esta carpeta y ejecuta:

```bash
npm test
```

También puedes usar directamente:

```bash
node --test --test-isolation=none
```

La opción `--test-isolation=none` permite que el resumen muestre los cinco casos individuales. Con `node --test` también se ejecutan, pero algunas versiones recientes de Node.js agrupan el resultado por archivo.

La ejecución correcta debe mostrar cinco pruebas aprobadas y ninguna fallida.

## Estructura

- `index.html`: interfaz de la calculadora.
- `styles.css`: presentación visual.
- `app.js`: interacción con el formulario.
- `envios.js`: función que aplica la regla de negocio.
- `envios.test.js`: pruebas unitarias.

## Despliegue

El proyecto es un sitio estático y puede publicarse con GitHub Pages desde la rama `main` y la carpeta `/(root)`.

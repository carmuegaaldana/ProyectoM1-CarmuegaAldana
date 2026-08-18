const botonGenerar = document.getElementById("boton-generar");
const selectorCantidad = document.getElementById("cantidad-colores");
const selectorFormato = document.getElementById("formato-color");
const contenedorPaleta = document.getElementById("paleta");
const mensaje = document.getElementById("mensaje");
let temporizadorMensaje;

function mostrarMensajeTemporal(texto) {
  clearTimeout(temporizadorMensaje);
  mensaje.textContent = texto;

  temporizadorMensaje = setTimeout(function () {
    mensaje.textContent = "";
  }, 3000);
}

function generarColorHex() {
  const caracteres = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const posicionAleatoria = Math.floor(
      Math.random() * caracteres.length
    );

    color += caracteres[posicionAleatoria];
  }

  return color;
}

function generarColorHsl() {
  const tono = Math.floor(Math.random() * 360);
  const saturacion = Math.floor(Math.random() * 41) + 60;
  const luminosidad = Math.floor(Math.random() * 31) + 35;

  return `hsl(${tono}, ${saturacion}%, ${luminosidad}%)`;
}

function obtenerColorTexto(color) {
  const colorTemporal = document.createElement("div");
  colorTemporal.style.color = color;
  document.body.appendChild(colorTemporal);

  const colorCalculado = getComputedStyle(colorTemporal).color;
  colorTemporal.remove();

  const valores = colorCalculado.match(/\d+/g).map(Number);
  const luminosidad =
    (valores[0] * 299 + valores[1] * 587 + valores[2] * 114) / 1000;

  return luminosidad > 150 ? "#1e293b" : "#ffffff";
}

async function copiarColor(color) {
  try {
    await navigator.clipboard.writeText(color);
    mostrarMensajeTemporal(`¡Código ${color} copiado al portapapeles!`);
  } catch {
    mostrarMensajeTemporal("No se pudo copiar el código.");
  }
}

function crearTarjetaColor(color) {
  const tarjeta = document.createElement("button");

  tarjeta.type = "button";
  tarjeta.classList.add("tarjeta-color");
  tarjeta.style.backgroundColor = color;
  tarjeta.style.color = obtenerColorTexto(color);
  tarjeta.textContent = color.toUpperCase();
  tarjeta.setAttribute("aria-label", `Copiar el código ${color}`);

  tarjeta.addEventListener("click", function () {
    copiarColor(color);
  });

  return tarjeta;
}

function generarPaleta() {
  const cantidad = Number(selectorCantidad.value);
  const formato = selectorFormato.value;

  clearTimeout(temporizadorMensaje);
  contenedorPaleta.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    const color =
      formato === "hex" ? generarColorHex() : generarColorHsl();

    contenedorPaleta.appendChild(crearTarjetaColor(color));
  }

  mostrarMensajeTemporal(
  `¡Paleta de ${cantidad} colores en formato ${formato.toUpperCase()} generada!`
);
}

botonGenerar.addEventListener("click", generarPaleta);

generarPaleta();

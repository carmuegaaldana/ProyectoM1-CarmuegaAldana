# Colorfly Studio

Colorfly Studio es una aplicación web para generar paletas de colores de manera rápida y sencilla. Permite elegir la cantidad de colores, mostrarlos en formato HEX o HSL y copiar cada código al portapapeles.

El proyecto fue realizado como trabajo integrador del Módulo 1 de Full Stack y está desarrollado con HTML semántico, CSS y JavaScript vanilla.

## Funcionalidades

- Generación de paletas aleatorias de 6, 8 o 9 colores.
- Selección de formato HEX o HSL.
- Generación automática de una paleta al cargar la página.
- Creación de una nueva combinación mediante el botón **Generar paleta**.
- Copia de un color al portapapeles al seleccionar su tarjeta.
- Mensajes que informan la generación y la copia de colores.
- Ajuste automático del color del texto según la luminosidad del fondo.
- Uso de las tarjetas mediante mouse o teclado.
- Diseño adaptable a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- **HTML5:** estructura y elementos semánticos.
- **CSS3:** estilos, variables, Flexbox, Grid, gradientes y animaciones.
- **JavaScript:** generación de colores, manipulación del DOM y eventos.
- **Clipboard API:** copia de los códigos al portapapeles.
- **Google Fonts:** tipografías Inter y Poppins.

No se utilizaron frameworks, bibliotecas de JavaScript ni herramientas de compilación.

## Estructura del proyecto

```text
ProyectoM1-AldanaCarmuega/
├── index.html
├── readme.md
├── css/
│   └── style.css
└── source/
    └── app.js
```

## Instrucciones de uso

1. Seleccionar la cantidad de colores: 6, 8 o 9.
2. Elegir el formato de los códigos: HEX o HSL.
3. Presionar el botón **Generar paleta**.
4. Seleccionar una tarjeta de color para copiar su código.
5. Comprobar el mensaje de confirmación debajo del botón.

También es posible recorrer los controles con la tecla `Tab` y activar una tarjeta con `Enter` o la barra espaciadora.

## Decisiones técnicas

### Estructura semántica

La interfaz está organizada con `header`, `main`, `section`, `fieldset` y `footer`. Los elementos `label` se relacionan con sus respectivos selectores mediante el atributo `for`, lo que mejora la comprensión y la accesibilidad del formulario.

### Generación de colores HEX

Cada valor HEX se construye seleccionando seis caracteres aleatorios de la cadena `0123456789ABCDEF` y agregando `#` al comienzo.

Ejemplo:

```text
#2563EB
```

### Generación de colores HSL

Los colores HSL utilizan:

- Un tono aleatorio entre 0 y 359 grados.
- Una saturación entre 60 % y 100 %.
- Una luminosidad entre 35 % y 65 %.

Limitar la saturación y la luminosidad ayuda a obtener colores visibles y evita gran parte de los tonos demasiado grises, claros u oscuros.

Ejemplo:

```text
hsl(220, 85%, 55%)
```

### Contraste del texto

El navegador convierte cada color generado a RGB mediante `getComputedStyle()`. Después, JavaScript calcula su luminosidad aproximada y elige texto oscuro para fondos claros o texto blanco para fondos oscuros.

### Creación de las tarjetas

Las tarjetas se generan dinámicamente con `document.createElement()`. Cada una recibe:

- El color generado como fondo.
- El código del color como contenido.
- Un evento de clic para copiar el valor.
- `role="button"` y `tabindex="0"` para que pueda recibir el foco.
- Eventos de teclado para responder a `Enter` y a la barra espaciadora.
- Un `aria-label` que describe la acción disponible.

### Mensajes accesibles

El elemento utilizado para mostrar mensajes incluye `role="status"` y `aria-live="polite"`. De este modo, las tecnologías de asistencia pueden anunciar la generación de la paleta y el resultado de la copia sin interrumpir al usuario.

### Diseño visual

Los colores principales se almacenan en variables CSS para mantener la consistencia y facilitar futuros cambios. Flexbox organiza la estructura general y CSS Grid distribuye las tarjetas mediante `auto-fit` y `minmax()`, adaptando las columnas al ancho disponible.

## Cómo ejecutar el proyecto

El proyecto no necesita instalación de dependencias.

### Opción recomendada: Live Server

1. Descargar o clonar el repositorio.
2. Abrir la carpeta en Visual Studio Code.
3. Instalar la extensión **Live Server**, si no está instalada.
4. Abrir `index.html`.
5. Presionar **Open with Live Server**.

La aplicación se abrirá en una dirección similar a:

```text
http://127.0.0.1:5500
```

## Cómo desplegar con GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir todos los archivos conservando la estructura de carpetas.
3. Comprobar que `index.html` esté en la raíz del repositorio.
4. Abrir **Settings** en el repositorio.
5. Ingresar en **Pages**, dentro de **Code and automation**.
6. En **Build and deployment**, seleccionar **Deploy from a branch**.
7. Elegir la rama `main` y la carpeta `/(root)`.
8. Guardar la configuración y esperar a que finalice el despliegue.

GitHub mostrará una dirección similar a:

```text
https://usuario.github.io/nombre-del-repositorio/
```

## Autoría

Desarrollado por Aldana Carmuega para el Proyecto Integrador del Módulo 1 — 2026.

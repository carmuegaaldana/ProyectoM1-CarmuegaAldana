# Colorfly Studio

Colorfly Studio es una aplicación web para generar paletas de colores de manera rápida y sencilla. Permite elegir la cantidad de colores, mostrarlos en formato HEX o HSL y copiar cada código al portapapeles.

El proyecto fue realizado como trabajo integrador del Módulo 1 de Full Stack y está desarrollado con HTML semántico, CSS y JavaScript vanilla.

Enlace a la app: https://carmuegaaldana.github.io/ProyectoM1-CarmuegaAldana/

## Funcionalidades

- Generación de paletas aleatorias de 6, 8 o 9 colores.
- Selección de formato HEX o HSL.
- Generación automática de una paleta al cargar la página.
- Creación de una nueva combinación mediante el botón **Generar paleta**.
- Copia de un color al portapapeles al seleccionar su tarjeta.
- Mensajes que informan la generación y la copia de colores.
- Ocultar automaticamente el mensaje de copia despues de tres segundos.
- Ajuste automático del color del texto según la luminosidad del fondo.
- Tarjetas accesibles mediante mouse o teclado y con foco visible.
- Diseño responsive para computadoras, tablets y celulares.

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
├── css/
│   └── style.css
├── docs/
│   ├── capturas/
│   │   └── archivos de evidencia .png
│   ├── flujo-app/
│   │   └── capturas del funcionamiento .png
│   └── prompts.md
├── source/
│   └── app.js
├── index.html
└── readme.md
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

- Un elemento `button` con `type="button"`.
- El color generado como fondo.
- El código del color como contenido.
- Un evento de clic para copiar el valor.
- Un `aria-label` que describe la acción disponible.

Se eligió un botón real en lugar de simular su comportamiento con otro elemento HTML. De esta manera, las tarjetas reciben foco y responden a `Enter` y a la barra espaciadora de forma nativa.

### Mensajes accesibles

El elemento utilizado para mostrar mensajes incluye `role="status"` y `aria-live="polite"`. De este modo, las tecnologías de asistencia pueden anunciar la generación de la paleta y el resultado de la copia sin interrumpir al usuario.

Después de copiar un código, el mensaje desaparece automáticamente a los tres segundos. Si se copia otro color antes de que termine ese tiempo, `clearTimeout()` cancela el temporizador anterior y comienza uno nuevo.

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

## Cómo desplegar el proyecto con GitHub Pages

Como la aplicación utiliza HTML, CSS y JavaScript sin herramientas de compilación, puede publicarse directamente con GitHub Pages.
1. Subir todos los archivos al repositorio de GitHub conservando la estructura de carpetas.
2. Comprobar que index.html esté en la raíz del repositorio.
3. Abrir Settings en el repositorio.
4. Seleccionar Pages dentro de Code and automation.
5. En Build and deployment, elegir Deploy from a branch.
6. Seleccionar la rama main y la carpeta /(root).
7. Presionar Save y esperar a que GitHub termine la publicación.
La demo de este proyecto está disponible en:
https://carmuegaaldana.github.io/ProyectoM1-CarmuegaAldana/

## Capturas del flujo principal

### 1. Configuración de la paleta

El usuario puede elegir la cantidad de colores y el formato de salida.

![Configuración de Colorfly Studio](./docs/flujo-app/01-configuracion.png)

### 2. Generación de una paleta

La aplicación genera dinámicamente una paleta de nueve colores en formato HEX.

![Paleta HEX generada](./docs/flujo-app/02-paleta-generada.png)

### 3. Copia de un color

Al seleccionar una tarjeta, el código se copia al portapapeles y se muestra un mensaje de confirmación.

![Confirmación de color copiado](./docs/flujo-app/03-color-copiado.png)

### 4. Vista responsive

En pantallas pequeñas, los controles se reorganizan y las tarjetas se muestran en dos columnas.

![Vista responsive de Colorfly Studio](./docs/flujo-app/04-vista-responsive.png)

## Uso de inteligencia artificial

Durante el desarrollo se utilizó una herramienta de inteligencia artificial como apoyo para revisar la semántica HTML, los estilos, la lógica JavaScript, la accesibilidad y el diseño responsive.

Los prompts utilizados, las decisiones aplicadas y sus evidencias visuales están documentados en [docs/prompts.md](./docs/prompts.md).


## Autoría

Desarrollado por Aldana Carmuega para el Proyecto Integrador del Módulo 1 — 2026.

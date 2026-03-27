# 🏍️ JBC Racing Parts — Guía de Ingeniería Web

## Información del proyecto

| Campo | Detalle |
|---|---|
| **Asignatura** | Ingeniería Web |
| **Docente** | John Leonardo Hernández Matiz |
| **Fecha** | Febrero – Marzo 2026 |
| **Integrantes** | Bryan Alejandro Núñez Hernández · Cristian David Cotrino Vásquez · Jonathan López |

---

## Estructura del proyecto

```
📁 JBC RACING PARTSS/
│
├── 📄 JBC RACING PARTS.html   → página principal (frontend)
├── 📄 estilo.css              → estilos visuales
├── 📄 server.js               → servidor backend (Node.js + Express)
├── 📄 package.json            → lista de librerías necesarias
├── 📄 package-lock.json       → versiones exactas instaladas (auto)
├── 📁 node_modules/           → librerías descargadas (auto)
├── 🗄️  mensajes.db            → base de datos SQLite (se crea sola)
├── 🖼️  WebWeb.png             → logo
├── 🖼️  fondo.png              → imagen de fondo del header
├── 🎵  audio.mp3              → música de fondo
└── 🎬  video.mp4              → video circular de "Sobre nosotros"
```

---

## Tecnologías utilizadas

### Node.js
Es un entorno que permite ejecutar JavaScript fuera del navegador, directamente en el computador o servidor. Antes JavaScript solo funcionaba en el navegador; con Node.js se puede usar para crear servidores, manejar archivos y bases de datos. En este proyecto lo usamos para correr el `server.js`.

### npm (Node Package Manager)
Es el gestor de paquetes de Node.js. Permite descargar librerías de terceros con un solo comando. Se usa así:
```bash
npm install       # descarga todo lo que está en package.json
node server.js    # arranca el servidor
```

### Express
Librería de Node.js que facilita crear servidores web. Sin Express habría que escribir mucho más código para recibir peticiones HTTP. Con Express se hace en pocas líneas.

### SQLite (better-sqlite3)
Base de datos ligera que guarda toda la información en un solo archivo `.db`. No necesita instalación separada ni configuración compleja. En este proyecto guarda los mensajes del formulario en `mensajes.db`.

### CORS
Librería que permite que el HTML (frontend) pueda hablar con el servidor (backend) aunque estén en puertos distintos. Sin CORS el navegador bloquea las peticiones.

---

## Cómo funciona la base de datos

### ¿Qué es SQLite?
Es una base de datos que vive en un solo archivo (`mensajes.db`). No necesita un servidor aparte como MySQL — el mismo `server.js` la maneja. Se puede abrir y ver en VS Code con la extensión **SQLite Viewer**.

### Estructura de la tabla

```
tabla: mensajes
┌────┬──────────────┬───────────┬──────────────────┬───────────┬─────────────┬─────────────┐
│ id │ fecha        │ nombre    │ email            │ telefono  │ tema        │ mensaje     │
├────┼──────────────┼───────────┼──────────────────┼───────────┼─────────────┼─────────────┤
│  1 │ 20/3/2026... │ Juan      │ juan@correo.com  │ 300...    │ repuesto    │ Necesito... │
│  2 │ 21/3/2026... │ María     │ maria@correo.com │ 310...    │ precio      │ Cuánto...   │
└────┴──────────────┴───────────┴──────────────────┴───────────┴─────────────┴─────────────┘
```

El campo `id` se asigna automáticamente (1, 2, 3...) gracias a `AUTOINCREMENT`.

### Flujo completo de los datos

```
1. Usuario llena el formulario en el HTML
         ↓
2. JavaScript hace fetch() POST → manda los datos al servidor
         ↓
3. server.js recibe los datos en la ruta /api/mensajes
         ↓
4. better-sqlite3 ejecuta INSERT INTO mensajes y los guarda en mensajes.db
         ↓
5. El servidor responde { ok: true }
         ↓
6. El HTML muestra el alert y redirige a la sección Mensajes
         ↓
7. JavaScript hace fetch() GET /api/mensajes
         ↓
8. El servidor lee todos los registros de mensajes.db
         ↓
9. El HTML construye la tabla y la muestra al usuario
```

### Rutas de la API

| Método | Ruta | Qué hace |
|---|---|---|
| `GET` | `/api/mensajes` | Trae todos los mensajes guardados |
| `POST` | `/api/mensajes` | Guarda un mensaje nuevo |
| `DELETE` | `/api/mensajes` | Borra todos los mensajes |

### Cómo ver la base de datos en VS Code
1. Instalar la extensión **SQLite Viewer** (de Florian Klampfer)
2. Buscar el archivo `mensajes.db` en el explorador de archivos
3. Hacer clic en él → se abre como tabla visual

---

## Cómo correr el proyecto

```bash
# 1. Instalar librerías (solo la primera vez)
npm install

# 2. Arrancar el servidor
node server.js

# 3. Abrir en el navegador
http://localhost:5000
```

---

## Los 28 temas implementados

### Tema 1 — Estructura semántica de HTML5
**Qué es:** Las etiquetas semánticas describen el significado del contenido, no solo su apariencia.
**En el proyecto:** Se usa `<header>` para la cabecera con el logo, `<nav>` para el menú de navegación, `<section>` para el contenedor principal, `<article>` para cada sección de contenido (catálogo, marcas, contacto, etc.), y `<footer>` para el pie de página.

---

### Tema 2 — Etiquetas básicas
**Qué es:** Las etiquetas fundamentales de HTML para mostrar texto, imágenes, listas y estructurar contenido.
**En el proyecto:** Se usan `<h1>` y `<h2>` para títulos, `<p>` para párrafos, `<ul>` y `<li>` para las listas del catálogo de repuestos, `<strong>` para resaltar palabras clave como los kilómetros de mantenimiento, y `<div>` para los contenedores de secciones.

---

### Tema 3 — Imágenes, listas y enlaces
**Qué es:** Cómo insertar imágenes con `<img>`, crear listas con `<ul>/<ol>` y hacer enlaces con `<a>`.
**En el proyecto:** El logo `WebWeb.png` se muestra con `<img src="WebWeb.png" alt="Logo">`. Los repuestos del catálogo están en listas `<ul>`. Los botones del nav usan `<a href="#">` con `onclick` para navegar entre secciones.

---

### Tema 4 — Introducción a CSS
**Qué es:** CSS (Cascading Style Sheets) es el lenguaje que da estilo visual a la página: colores, tamaños, fuentes, espaciados.
**En el proyecto:** Todo el diseño visual está en el archivo `estilo.css`, separado del HTML. Se vincula con `<link rel="stylesheet" href="estilo.css">` en el `<head>`.

---

### Tema 5 — Las propiedades CSS más utilizadas
**Qué es:** Las propiedades básicas: `color`, `background`, `font-size`, `padding`, `margin`, `width`, `height`, etc.
**En el proyecto:** Se usan en absolutamente todos los elementos. Por ejemplo, `color: var(--blanco)` para el texto, `padding: 14px 20px` en el nav, `font-size: 3em` en el título principal, `max-width: 1100px` en el contenedor principal para que no se estire demasiado.

---

### Tema 6 — Creación de un favicon
**Qué es:** El favicon es el pequeño ícono que aparece en la pestaña del navegador.
**En el proyecto:** Se implementa con `<link rel="icon" type="image/png" href="ms-icon-310x310.png">` en el `<head>`. El archivo `ms-icon-310x310.png` es el logo de CB Racing Parts.

---

### Tema 7 — Bordes redondeados
**Qué es:** La propiedad `border-radius` redondea las esquinas de cualquier elemento.
**En el proyecto:** Se usa en las cards del catálogo (`border-radius: 8px`), en el mapa de ubicación (`border-radius: 8px`), en el canvas del velocímetro (`border-radius: 8px`), en el video circular de "Sobre nosotros" (`border-radius: 50%` que lo convierte en círculo perfecto) y en los botones.

---

### Tema 8 — Sombras
**Qué es:** `box-shadow` agrega sombra alrededor de un elemento. `text-shadow` agrega sombra al texto.
**En el proyecto:** Los artículos tienen `box-shadow: 2px 7px 16px rgba(189, 44, 9, 0.30)` que genera un brillo rojo oscuro alrededor. El título `<h1>` tiene `text-shadow: 2px 4px 12px var(--rojo)`. El header tiene `box-shadow: 0 4px 20px var(--rojo)` en la parte inferior.

---

### Tema 9 — Imágenes de fondo
**Qué es:** La propiedad `background-image` permite poner una imagen como fondo de cualquier elemento.
**En el proyecto:** El header usa `background-image` con dos capas: un degradado oscuro encima y la imagen `fondo.png` debajo. Esto se logra separando ambas con una coma: `background-image: linear-gradient(...), url('fondo.png')`.

---

### Tema 10 — Tipografías
**Qué es:** Cómo usar fuentes externas (Google Fonts) y aplicarlas con `font-family`.
**En el proyecto:** Se importan dos fuentes de Google Fonts: `Bebas Neue` (fuente decorativa para títulos, con letras altas y estrechas) y `Rajdhani` (fuente para el texto general, moderna y deportiva). Se importan con `<link>` en el `<head>` y se aplican con `font-family: 'Bebas Neue', sans-serif`.

---

### Tema 11 — Cajas flotantes (float)
**Qué es:** `float` empuja un elemento a la izquierda o derecha y permite que el texto lo rodee.
**En el proyecto:** El video circular en "Sobre nosotros" usa `float: right` para quedar a la derecha mientras el texto lo rodea por la izquierda. Se usa `clearfix::after { clear: both }` para limpiar el float y que el siguiente elemento no se vea afectado.

---

### Tema 12 — Centrar el contenido
**Qué es:** Técnicas para centrar elementos horizontal y verticalmente.
**En el proyecto:** El contenedor principal usa `margin: 40px auto` para centrarse horizontalmente. El nav usa `justify-content: center` con Flexbox. Los textos del footer usan `text-align: center`. El canvas del velocímetro está centrado con `text-align: center` en su contenedor.

---

### Tema 13 — Flex, sin dolor
**Qué es:** Flexbox es un sistema de layout que distribuye elementos en fila o columna de forma flexible.
**En el proyecto:** El nav usa `display: flex` con `gap: 12px` para los botones. Las cards del catálogo usan `display: flex; flex-wrap: wrap` para que se acomoden automáticamente. Los chips de información del inicio usan `display: flex; flex-wrap: wrap; gap: 12px`. Los grupos de marcas también usan Flexbox.

---

### Tema 14 — Posición de los elementos (position)
**Qué es:** La propiedad `position` controla cómo se ubica un elemento en la página (`static`, `relative`, `absolute`, `fixed`, `sticky`).
**En el proyecto:** El `header` tiene `position: relative` para que sus pseudoelementos `::before` y `::after` se posicionen dentro de él. Estos pseudoelementos usan `position: absolute` con `top`, `left`, `bottom`, `right` para quedar en las esquinas. La etiqueta de categoría de las cards (MOTOR, FRENOS) usa `position: absolute; top: 0; right: 0`.

---

### Tema 15 — Transformaciones (transform)
**Qué es:** La propiedad `transform` mueve, rota, escala o inclina elementos sin afectar el flujo del documento.
**En el proyecto:** Los `::before` y `::after` del header usan `transform: rotate(-25deg)` para los rectángulos decorativos inclinados. El video de "Sobre nosotros" usa `transform: rotate(-5deg)` para quedar ligeramente inclinado. Las cards del catálogo al hacer hover usan `transform: translateY(-6px) scale(1.02)` para subir y agrandarse un poco. Los botones del nav usan `transform: translateY(-3px)` en hover.

---

### Tema 16 — Formularios
**Qué es:** Los elementos de formulario (`<form>`, `<input>`, `<select>`, `<textarea>`, `<button>`) permiten capturar datos del usuario.
**En el proyecto:** La sección "Contacto" tiene un formulario completo con `<input type="text">` para el nombre, `<input type="email">` para el correo, `<input type="tel">` para el teléfono, `<select>` para el tipo de consulta y `<textarea>` para el mensaje. El `onsubmit` llama a la función `guardarMensaje()` que envía los datos al servidor.

---

### Tema 17 — iframe
**Qué es:** `<iframe>` incrusta contenido externo dentro de la página, como mapas, videos de YouTube u otras páginas.
**En el proyecto:** La sección "Ubicación" tiene un `<iframe>` de Google Maps que muestra el mapa de Bogotá. Tiene los atributos `allowfullscreen`, `loading="lazy"` (para cargar solo cuando el usuario llega a esa sección) y `referrerpolicy` por seguridad.

---

### Tema 18 — Transiciones (transition)
**Qué es:** `transition` hace que los cambios de estilo ocurran de forma suave y animada en lugar de ser instantáneos.
**En el proyecto:** Los botones del nav tienen `transition: background-color 0.25s, transform 0.2s` para que el cambio de color y el movimiento al hacer hover sean suaves. El mapa tiene `transition: filter 0.4s ease` para que el efecto de color gris desaparezca suavemente. Los inputs del formulario tienen `transition: border-color 0.3s, box-shadow 0.3s` al recibir foco.

---

### Tema 19 — Columnas de texto
**Qué es:** La propiedad `column-count` divide el texto en varias columnas como un periódico.
**En el proyecto:** El texto de "Sobre nosotros" usa `column-count: 2; column-gap: 30px; column-rule: 1px solid var(--gris2)` para dividir los párrafos en dos columnas con una línea divisoria entre ellas. En móviles se cambia a `column-count: 1` con media queries.

---

### Tema 20 — Vídeo
**Qué es:** La etiqueta `<video>` permite reproducir videos directamente en la página sin plugins externos.
**En el proyecto:** En "Sobre nosotros" hay un video circular que se reproduce automáticamente con los atributos `autoplay muted loop playsinline`. Está dentro de un `<div>` con `border-radius: 50%` y `overflow: hidden` para que tome forma circular. La fuente es el archivo local `video.mp4`.

---

### Tema 21 — Audio
**Qué es:** La etiqueta `<audio>` permite reproducir sonido en la página con controles nativos del navegador.
**En el proyecto:** En "Sobre nosotros" hay un reproductor de audio con el atributo `controls` que muestra los botones de play, pausa y volumen. La fuente es el archivo local `audio.mp3`. Se incluye una fuente alternativa `audio.ogg` para compatibilidad con todos los navegadores.

---

### Tema 22 — Transparencias y degradados
**Qué es:** `rgba()` permite colores con transparencia. `linear-gradient()` crea degradados de un color a otro.
**En el proyecto:**
- El header tiene un degradado oscuro encima de la foto: `linear-gradient(180deg, rgba(10,0,0,0.6), rgba(0,0,0,0.85))`
- Los botones del nav tienen degradado de gris oscuro a negro: `linear-gradient(180deg, #3a3a3a, #1e1e1e)`
- Las cards del catálogo tienen degradado diagonal: `linear-gradient(145deg, #2a2a2a, #1a1a1a)`
- Las sombras usan `rgba(189, 44, 9, 0.30)` para transparencia
- El canvas del velocímetro dibuja el arco con `createLinearGradient()` del API de Canvas

---

### Tema 23 — Animaciones (animation)
**Qué es:** `@keyframes` define una animación con estados intermedios. `animation` la aplica a un elemento.
**En el proyecto:**
- `@keyframes pulso` → el logo del header late suavemente (escala de 1 a 1.07 y vuelve), se aplica infinitamente con `animation: pulso 3s ease-in-out infinite`
- `@keyframes entrada` → cada sección aparece deslizándose desde abajo al abrirla (`opacity: 0` y `translateY(22px)` a `opacity: 1` y `translateY(0)`)
- `@keyframes brillar` → el video circular pulsa con un brillo rojo que va de tenue a intenso y vuelve

---

### Tema 24 — SVG (gráficos vectoriales)
**Qué es:** SVG (Scalable Vector Graphics) son gráficos dibujados con código XML. No pierden calidad al escalar.
**En el proyecto:** En el header hay una bandera de carreras en cuadros blancos y negros hecha completamente con SVG. Está formada por rectángulos `<rect>` con coordenadas `x`, `y`, `width` y `height` dentro de una etiqueta `<svg viewBox="0 0 80 40">`. El mástil es un rectángulo rojo. No es una imagen — es código dibujado directamente en el HTML.

---

### Tema 25 — Canvas
**Qué es:** `<canvas>` es un elemento HTML que permite dibujar gráficos 2D con JavaScript usando su API de dibujo.
**En el proyecto:** En la sección Inicio hay un velocímetro animado dibujado con Canvas. Se obtiene el contexto con `canvas.getContext('2d')`. Se dibuja el arco de fondo con `ctx.arc()`, el arco de velocidad con un degradado `createLinearGradient()`, las marcas con `ctx.moveTo()` y `ctx.lineTo()`, la aguja y el texto con `ctx.fillText()`. Se anima con `requestAnimationFrame()` que redibuja cada fotograma.

---

### Tema 26 — Adaptación a móviles (media queries)
**Qué es:** `@media` permite aplicar estilos diferentes según el tamaño de la pantalla del dispositivo.
**En el proyecto:**
- `@media (max-width: 768px)` → para tablets y móviles grandes: el nav se vuelve vertical (`flex-direction: column`), el catálogo se apila en una columna, las marcas se apilan, el video deja de flotar y se centra, el texto de dos columnas pasa a una sola
- `@media (max-width: 480px)` → para móviles pequeños: el título se reduce, los chips de información se apilan, el botón de enviar ocupa todo el ancho

---

### Tema 27 — Contenido editable
**Qué es:** El atributo `contenteditable="true"` convierte cualquier elemento HTML en un área editable directamente por el usuario, sin necesidad de un `<input>`.
**En el proyecto:** En "Sobre nosotros" hay una sección llamada "Notas rápidas" con un `<div contenteditable="true">`. El usuario puede hacer clic y escribir directamente dentro de él como si fuera un bloc de notas. Está estilizado con bordes, fondo oscuro y cambia de color al recibir foco.

---

### Tema 28 — Storage
**Qué es:** `localStorage` es un sistema de almacenamiento del navegador que guarda datos como texto en el dispositivo del usuario. Los datos persisten aunque se cierre el navegador.
**En el proyecto:** Las notas escritas en el `contenteditable` se guardan automáticamente con `localStorage.setItem('cbNotas', texto)` cada vez que el usuario escribe (`evento input`). Al recargar la página se recuperan con `localStorage.getItem('cbNotas')`. Esto es diferente a la base de datos: localStorage es solo local en el navegador, mientras que SQLite guarda en el servidor y se puede ver desde VS Code.

---

## Preguntas teóricas

### 1.1 ¿Cuáles son los componentes esenciales de una aplicación web moderna y cómo se comunican?

Una aplicación web moderna está compuesta por distintos elementos que trabajan en conjunto para brindar una experiencia interactiva, escalable y segura.

**Frontend (Cliente)** — es la parte con la que interactúa el usuario. Tecnologías: HTML (estructura), CSS (estilos), JavaScript (lógica). Se comunica con el backend mediante HTTP/HTTPS, APIs REST y WebSockets.

**Backend (Servidor)** — gestiona la lógica de negocio. En este proyecto usamos Node.js con Express. Recibe peticiones del frontend, procesa los datos y los guarda en la base de datos. Responde en formato JSON.

**Base de Datos** — almacena la información de forma persistente. En este proyecto usamos SQLite (archivo `mensajes.db`). El backend se conecta a ella mediante la librería `better-sqlite3`. No se comunica directamente con el frontend.

**API** — define las rutas de comunicación entre frontend y backend. En este proyecto es una API REST con tres rutas: `GET /api/mensajes`, `POST /api/mensajes` y `DELETE /api/mensajes`.

**Flujo de comunicación:**
1. El usuario interactúa con el frontend
2. El frontend envía una solicitud HTTP al backend
3. El backend procesa la solicitud y consulta la base de datos
4. Devuelve la respuesta al frontend en formato JSON
5. El frontend actualiza la interfaz con los datos recibidos

---

### 1.2 ¿Por qué es necesaria la separación de responsabilidades entre cliente y servidor?

**Organización** — el frontend maneja presentación e interacción; el backend maneja lógica y datos. Evita mezclar diseño con reglas de negocio.

**Seguridad** — la lógica crítica y la base de datos no quedan expuestas al usuario. La autenticación se controla desde el servidor.

**Escalabilidad** — se puede mejorar el backend sin tocar el frontend, y viceversa.

**Reutilización** — una misma API puede servir para la web, una app móvil o aplicaciones de terceros.

**Trabajo en equipo** — permite dividir el desarrollo en equipos especializados: frontend, backend y base de datos.

---

### 1.3 ¿Cómo facilita HTML5 la creación de contenido web estructurado y accesible?

HTML5 introduce etiquetas semánticas que describen el significado del contenido: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`. Esto mejora la organización, el posicionamiento SEO y la accesibilidad para lectores de pantalla. También añade soporte nativo para `<video>`, `<audio>`, `<canvas>` y formularios avanzados sin necesidad de plugins externos.

---

### 1.4 ¿Qué ventajas aportan las etiquetas semánticas frente a `<div>`?

Las etiquetas semánticas indican el significado del contenido, mientras que `<div>` solo agrupa elementos sin describirlos. Ventajas: código más claro y organizado, mejor posicionamiento en buscadores, mayor accesibilidad, y mantenimiento más sencillo.

---

## Actividad de Trabajo Autónomo

En el repositorio de GitHub se incluye:
- Archivo `JBC RACING PARTS.html` — página web completa
- Archivo `estilo.css` — hoja de estilos
- Archivo `server.js` — servidor backend
- Archivo `package.json` — configuración de dependencias
- Logo de la página web (`WebWeb.png`)
- Archivo Markdown (este README)
- Diagrama estructural (`Diagrama.jpg`)

## Procedimiento y Metodología

Se desarrolló una página web completa para la tienda **CB Racing Parts** implementando los 28 temas del curso de Ingeniería Web. El frontend se construyó con HTML5, CSS3 y JavaScript puro. El backend se desarrolló con Node.js y Express. La persistencia de datos se implementó con SQLite. Se aplicaron buenas prácticas de separación de responsabilidades manteniendo el HTML, CSS y JavaScript en archivos independientes.

> Repositorio desarrollado como parte de la asignatura Ingeniería Web – 2026.

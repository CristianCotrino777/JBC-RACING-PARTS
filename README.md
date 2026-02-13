 Guía #1 – Ingeniería Web

Integrantes:

Bryan Alejandro Núñez Hernández

Cristian David Cotrino Vásquez

Jonathan López

Docente:
John Leonardo Hernández Matiz

Fecha:
Febrero de 2026

 Contenido

Preguntas

Actividad de Trabajo Autónomo

Procedimiento y Metodología de la práctica

 Preguntas
1️ ¿Cuáles son los componentes esenciales de una aplicación web moderna y cómo se comunican?

Una aplicación web moderna está compuesta por distintos elementos que trabajan juntos para brindar una experiencia interactiva, escalable y segura.

 1. Frontend (Cliente)

Es la parte con la que interactúa el usuario.

Tecnologías utilizadas:

HTML (estructura)

CSS (estilos)

JavaScript (lógica)

Frameworks como React o Angular

Funciones principales:

Renderizar la interfaz

Capturar eventos del usuario

Enviar solicitudes al backend

Mostrar datos recibidos

Comunicación:

HTTP/HTTPS

APIs REST

GraphQL

WebSockets (tiempo real)

 2. Backend (Servidor)

Gestiona la lógica de negocio y procesa las solicitudes.

Tecnologías comunes:

Node.js

Django

Spring Boot

Laravel

Funciones principales:

Procesar reglas de negocio

Autenticación y autorización

Validación de datos

Conexión con bases de datos

Comunicación:

Recibe peticiones HTTP del frontend

Consulta o modifica datos en la base de datos

Devuelve respuestas en formato JSON o XML

 3. Base de Datos

Almacena la información de la aplicación.

Tipos comunes:

Relacionales: MySQL, PostgreSQL

No relacionales: MongoDB

Funciones principales:

Persistencia de datos

Consultas y transacciones

Integridad y seguridad

Comunicación:

El backend se conecta mediante drivers u ORMs

No se comunica directamente con el frontend

 4. API (Interfaz de Comunicación)

Define cómo el frontend y backend intercambian datos.

Tipos de API:

REST

GraphQL

SOAP

Actúa como intermediaria entre cliente y servidor.

 5. Servidor Web

Gestiona las solicitudes HTTP y sirve los recursos.

Ejemplos:

Nginx

Apache HTTP Server

Funciones:

Servir archivos estáticos

Redirigir solicitudes al backend

Gestionar balanceo de carga

 Flujo de Comunicación

El usuario interactúa con el frontend.

El frontend envía una solicitud HTTP al backend.

El backend procesa la solicitud.

Consulta o modifica la base de datos.

Devuelve la respuesta al frontend.

El frontend actualiza la interfaz.

 Componentes adicionales

Autenticación: JWT, OAuth

Servicios en la nube: Amazon Web Services, Microsoft Azure, Google Cloud Platform

Contenedores: Docker

Orquestación: Kubernetes

CDN para distribución global

2️ ¿Por qué es necesaria la separación de responsabilidades entre cliente y servidor?

La separación entre frontend y backend permite crear aplicaciones más organizadas, seguras y escalables.

✔ Organización y claridad

Frontend: presentación e interacción

Backend: lógica, reglas y acceso a datos

Evita mezclar diseño con reglas de negocio.

 Mayor seguridad
La lógica crítica no puede ser modificada por el usuario.

La base de datos no queda expuesta.

La autenticación se controla desde el servidor.

 Escalabilidad

Se puede escalar el backend sin afectar el frontend.

Permite usar arquitecturas como microservicios.

Es clave en aplicaciones grandes como Netflix o Amazon.

 Reutilización

Una misma API puede servir para:

Aplicación web

Aplicación móvil

Aplicaciones de terceros

Reduce la duplicación de código.

 Trabajo en equipo

Permite dividir el desarrollo en:

Equipo frontend

Equipo backend

Equipo base de datos / DevOps

3️ ¿Cómo facilita HTML5 la creación de contenido web estructurado y accesible?

HTML5 facilita la estructuración del contenido gracias a sus etiquetas semánticas.

En lugar de usar muchos <div>, ahora existen etiquetas como:

<header>

<nav>

<section>

<article>

<footer>

Beneficios:

Mejor organización del contenido

Mejor SEO

Mayor accesibilidad para lectores de pantalla

Formularios más avanzados (email, date, number)

Soporte para audio y video sin plugins

4️ ¿Qué ventajas aportan las etiquetas semánticas frente a <div>?

Las etiquetas semánticas indican el significado del contenido, mientras que <div> solo agrupa elementos sin describirlos.

Ventajas:

Código más claro y organizado

Mejor posicionamiento en buscadores

Mayor accesibilidad

Mantenimiento más sencillo

En resumen, las etiquetas semánticas permiten que la página sea más comprensible tanto para desarrolladores como para los navegadores.

 Actividad de Trabajo Autónomo

En el repositorio de GitHub se incluye:

Archivo index.html

Logo de la página web

Archivo Markdown

Diagrama estructural

 Procedimiento y Metodología de la práctica

Se realizó la codificación en Markdown para estructurar correctamente la información y facilitar su comprensión tanto por el sistema como por el usuario final.

Se evidencia:

Código fuente en Markdown

Visualización final renderizada en GitHub

 Repositorio desarrollado como parte de la asignatura Ingeniería Web – 2026.

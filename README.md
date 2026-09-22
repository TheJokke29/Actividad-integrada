# Auditoría de Código y Buenas Prácticas Web
 
Este repositorio contiene la corrección de un proyecto de cálculo de promedio de notas, aplicando las mejores prácticas de desarrollo web.
 
## Tabla de Hallazgos y Correcciones de Auditoría
 
| Elemento Afectado | Tipo de Error / Mala Práctica | Descripción del Problema | Corrección Aplicada |
| :--- | :--- | :--- | :--- |
| `Mi Pagina De Notas.HTML` | Nomenclatura de Archivos | Uso de espacios y mayúsculas en el nombre del archivo HTML. | Renombrado a `index.html` (minúsculas y sin espacios). |
| `Estilos Del Sitio.CSS` | Nomenclatura de Archivos | Nombre con espacios y mayúsculas. | Renombrado a `styles.css`. |
| `<title>` en HTML | Semántica / Accesibilidad | Falta de título o título no descriptivo en la pestaña. | Agregado `<title>Calculadora de Promedio de Notas</title>`. |
| Etiqueta `<h1>` | Semántica / Accesibilidad | Ausencia de un encabezado principal para la jerarquía del documento. | Incorporado `<h1>Cálculo de Promedio</h1>` al inicio del contenedor. |
| Clases CSS (`.cont1`) | Convención de Nombres | Nombre de clase genérico e impropio (`cont1`). | Cambiado a selector descriptivo `.contenedor-principal`. |
| IDs CSS/JS (`#r`, `#r2`) | Convención de Nombres | Identificadores crípticos y poco explicativos. | Renombrados a `#mensajePromedio` y `#mensajeEstado`. |
| JavaScript Incrustado | Arquitectura de Código | Código JS mezclado dentro de etiquetas `<script>` en el HTML. | Extraída la lógica a un archivo externo e independiente `script.js`. |
| Nombres de Variables (`x`, `a`, `b`, `c`) | Mantenibilidad / Código Limpio | Variables con letras individuales que dificultan la lectura. | Renombradas a `nota1`, `nota2`, `nota3` y constantes explícitas. |
| Nombre de Función (`calc()`) | Mantenibilidad | Función declarada con abreviaturas poco descriptivas. | Renombrada a `calcularPromedio()`. |
| Atributos `onclick` en HTML | Separación de Responsabilidades | Evento inline ligado directamente en el botón HTML. | Removido `onclick` y reemplazado por `addEventListener("click", ...)` en JS. |
 
## Estructura Final del Proyecto
 
- `index.html`: Estructura  del sitio.
- `styles.css`: Estilos visuales y diseño adecuado
- `script.js`: Lógica de validación y cálculo del promedio.
- `README.md`: Documentación y reporte de auditoría.
// Un commit en Git es una "foto" o un "snapshot" de los cambios realizados en los archivos de un proyecto en un momento específico.
// Cuando haces un commit, Git guarda el estado actual de los archivos que están en el área de preparación (staging area) 
// y los agrega al historial del repositorio.

// 1) ¿Qué hace un commit en términos simples?

// - Guarda un punto de control: Un commit registra los cambios en el repositorio y crea un "punto de control" 
//   que puedes regresar o consultar en el futuro.
// - Asocia un mensaje: Cada commit incluye un mensaje que describe los cambios realizados, lo que ayuda a otros 
//   (y a ti mismo) a entender qué se cambió y por qué.
// - Historial de cambios: Los commits forman una cadena o historial, permitiéndote rastrear la evolución de un proyecto.
//   Cada commit tiene un identificador único (hash) que lo distingue de los demás.

// 2) ¿Cómo funciona?

// - Modificación de archivos: Primero modificas archivos en tu proyecto.
// - Agregar al área de preparación: Luego usas git add para agregar esos archivos al staging area (área de preparación).
// - Crear el commit: Finalmente, usas git commit -m "Mensaje" para crear un commit, 
//   que guarda el estado de los archivos preparados en el historial del proyecto.

// Ejemplo:
// Terminal - Bash
// git add archivo.txt
// git commit -m "Corrige error en el cálculo de impuestos"

// Este proceso es como escribir un registro en un diario: una vez que se hace un commit, ese cambio queda registrado 
// para siempre en la historia del proyecto, y puedes volver a él o analizarlo cuando sea necesario.

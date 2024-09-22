// COMANDOS BASICOS DE GIT //

// CONFIGURACION INICIAL 

// git config --global.user.name"Tu Nombre": Configura tu nombre de usuario
// git config --global user.email "tuemail@example.com": Configura tu correo electrónico.
// git config --list: Muestra la configuración actual.

// 2. Creación y gestión de repositorios

// git init: Inicializa un nuevo repositorio Git en el directorio actual.
// git clone URL: Clona un repositorio remoto a tu máquina local.

// 3. Seguimiento de cambios

// git status: Muestra el estado de los archivos en el directorio de trabajo.
// git add nombreArchivo: Agrega un archivo al área de preparación (staging).
// git add .: Agrega todos los archivos modificados al área de preparación.
// git commit -m "Mensaje del commit": Guarda los cambios en el historial del repositorio con un mensaje descriptivo.
// git commit --amend: Modifica el último commit realizado.

// 4. Ramas (branches)

// git branch: Lista las ramas locales.
// git branch nombreRama: Crea una nueva rama.
// git checkout nombreRama: Cambia a la rama especificada.
// git checkout -b nombreRama: Crea y cambia a una nueva rama.
// git merge nombreRama: Fusiona la rama especificada con la rama actual.
// git branch -d nombreRama: Elimina una rama local.

// 5. Actualización y sincronización

// git fetch: Descarga los cambios del repositorio remoto, pero no los fusiona.
// git pull: Descarga y fusiona los cambios del repositorio remoto en tu rama actual.
// git push: Sube los commits de tu rama local al repositorio remoto.

// 6. Ver historial

// git log: Muestra el historial de commits.
// git log --oneline: Muestra el historial de commits en una sola línea por commit.

// 7. Deshacer cambios

// git reset nombreArchivo: Elimina un archivo del área de preparación (staging).
// git checkout -- nombreArchivo: Revierte los cambios locales de un archivo.
// git revert HASHdelCommit: Crea un nuevo commit que revierte un commit anterior.
// git reset --hard: Revierte todos los cambios locales al último commit.

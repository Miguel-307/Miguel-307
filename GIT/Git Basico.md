git init: Inicializa un nuevo repositorio Git vacío en el directorio actual.

git status: Muestra el estado de los archivos en el repositorio, incluyendo los archivos modificados, no rastreados, y los cambios listos para el commit.

git add <archivo>: Añade un archivo específico al área de preparación (staging area), listo para ser incluido en el próximo commit.

git add .: Añade todos los archivos modificados y no rastreados al área de preparación.

git commit -m "Initial commit": Realiza un commit con el mensaje "Initial commit", guardando todos los cambios del área de preparación en el historial del repositorio.

git remote add origin https:///owner/repository.git: Enlaza el repositorio local con un repositorio remoto en GitHub o cualquier otro servidor de Git.

git clone https://github.com/username/projectname.git: Clona un repositorio remoto a tu máquina local, creando una copia del proyecto.

git push: Envía tus commits locales al repositorio remoto (por lo general, a la rama activa).

git config --global user.name "Your Name": Configura tu nombre de usuario global para los commits.

git config --global user.email mail@example.com: Configura tu correo electrónico global para los commits.

git diff: Muestra las diferencias entre el estado actual del repositorio y el último commit.

git checkout <rama>: Cambia a otra rama o revisa un archivo en particular desde el repositorio.

ls: Lista los archivos y directorios en el directorio actual (no es un comando específico de Git, pero se usa comúnmente con Git).

git log: Muestra el historial de commits en el repositorio.

git show 48c83b3690dfc7b0e622fd220f8f37c26a77c934: Muestra detalles específicos de un commit usando su hash.

git remote set-url origin https://github.com/username/repo2.git: Cambia la URL del repositorio remoto asociado a "origin".

git remote -v: Muestra las URLs de los repositorios remotos asociados con el repositorio local.

git pull: Trae (y fusiona) los cambios del repositorio remoto a tu repositorio local.

git rm <archivo>: Elimina un archivo del repositorio y lo marca para ser eliminado en el próximo commit.

git clean: Elimina los archivos no rastreados en el repositorio local.

git mkdir: No es un comando Git, pero puedes usarlo para crear directorios locales si es necesario.

git reset: Reestablece el estado del repositorio a un commit anterior. Se puede usar para deshacer cambios no deseados
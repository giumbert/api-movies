# API Movies

Es una api para guardar datos de películas.

La misma levanta en `http://localhost`, por el puerto configurado en el archivo`.env`.

## Instalación

Se creó utilizando lo siguiente instalado de manera global:
- mongodb 4.4.9
- node 14.17.6
- npm 6.14.15
- nodemon 2.0.12

Una vez clonado o descargado el proyecto, se debe crear un archivo `.env` con los siguientes valores en el root del proyecto.
```sh
PORT=3000
MONGO_HOST=localhost
MONGO_SCHEMA=api-movies
```

Una vez clonado, abrir una terminal y ubicarse dentro del proyecto
```sh
cd api-movies
npm i
npm start
```

La API se divide en 3 principales endpoints
- Género: `/api/genres`
- Autor: `/api/authors`
- Película: `/api/movies`

Para cada uno se utilizan los siguientes métodos GET, POST, PUT y DELETE.

- `/api/genres`
  - GET: devuelve `json` con lista de géneros creados
    - `/api/genres/[ID del género a consultar]`
    - Devuelve `json` con el género solicitado
  - POST: crea un nuevo género tomando el `name` del `body`
    - Se debe enviar el `name` en el `body`
    - ```sh
      {
        "name": "Nombre del género a crear"
      }
      ```
    - Devuelve `json` del género creado
  - PUT: edita el género
    - `/api/genres/[ID del género a editar]`
    - Se debe enviar el `name` en el `body`
    - ```sh
      {
        "name": "Nuevo nombre del género a editar"
      }
      ```
    - Devuelve `json` con el género editado
  - DELETE: elimina el género
    - `/api/genres/[ID del género a eliminar]`
    - Devuelve `json` con el género eliminado
- `/api/authors`
  - GET: devuelve `json` con lista de autores creados
    - `/api/authors/[ID del autor a consultar]`
    - Devuelve `json` con el autor solicitado
  - POST: crea un nuevo autor tomando el `name` del `body`
    - Se debe enviar el `name` en el `body`
    - ```sh
      {
        "name": "Nombre del autor"
      }
      ```
    - Devuelve `json` del autor creado
  - PUT: edita el autor
    - `/api/authors/[ID del autor a editar]`
    - Se debe enviar el `name` en el `body`
    - ```sh
      {
        "name": "Nuevo nombre del autor a editar"
      }
      ```
    - Devuelve `json` con el autor editado
  - DELETE: elimina el autor
    - `/api/authors/[ID del autor a eliminar]`
    - Devuelve `json` con el autor eliminado
- `/api/movies`
  - GET: devuelve `json` con lista de películas creadas
    - `/api/movies/[ID de la película a consultar]`
    - Devuelve `json` con la película solicitado
  - POST: crea una nueva película tomando el `title, genreId, authorId` del `body`
    - Se debe enviar `title, genreId, authorId` en el `body`
    - ```sh
      {
        "title": "Título de la película",
        "genreId": "ID del género",
        "authorId": "ID del autor"
      }
      ```
    - Devuelve `json` con la película creada
  - PUT: edita la película
    - `/api/movies/[ID del película a editar]`
    - Se debe enviar `title, genreId, authorId` en el `body`
    - ```sh
      {
        "title": "Nuevo título de la película a editar",
        "genreId": "Nuevo ID del género a editar",
        "authorId": "Nuevo ID del autor a editar"
      }
      ```
    - Devuelve `json` con el película editado
  - DELETE: elimina la película
    - `/api/movies/[ID del película a eliminar]`
    - Devuelve `json` con el película eliminado

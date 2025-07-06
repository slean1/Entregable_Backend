# API Pokémon 1.0

## 📌 Descripción

Esta API está construida en **Node.js**, utilizando **MongoDB** como motor de base de datos.  
El proyecto incluye una **precarga de usuario** con las siguientes credenciales de prueba:

- **Usuario:** `ereyesm@gmail.com`
- **Password:** `123PAssword456`

---

## 📂 Estructura de carpetas

/src
config: Acceso a datos, swagger, variables de entorno
controllers: Controladores, tanto de métodos de pokemon como de usuarios
middleware: Protege rutas privadas
models: Estructura de bdd
services: Lógica de negocio de la aplicación
repositories: definición de funciones para interacción con bdd


---

## 🗂️ Documentación Swagger

Una vez levantado **Docker**, la documentación **Swagger** estará disponible en:  
[http://localhost:3000/api-docs/#/](http://localhost:3000/api-docs/#/)

---

## ⚡ Datos precargados

El proyecto incluye una **precarga de Pokémon** del **1 al 150**.

---

## 🚀 Cómo usar este proyecto

### 1️⃣ Clonar el repositorio

```bash
# Clona el repositorio
git clone https://github.com/slean1/Entregable_Backend.git

# Entra a la carpeta del proyecto
cd Entregable_Backend

# Construir la imagen y levantar el contenedor
docker-compose up --build

Nota: Asegúrate de tener Docker y Docker Compose instalados en tu máquina.


API Base URL: http://localhost:3000
Swagger Docs: http://localhost:3000/api-docs/#/

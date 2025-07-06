# api/Dockerfile

# 1) Imagen base: Node 22 slim
FROM node:22-slim

# Instala build-essential y Python (necesarios para compilar módulos nativos)
RUN apt-get update && apt-get install -y build-essential python3 && rm -rf /var/lib/apt/lists/*


# 2) Directorio de trabajo
WORKDIR /usr/src/app

# 3) Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# 4) Instalar dependencias (solo production)
RUN npm install --production

# 5) Copiar el resto del código fuente
COPY . .

# 6) Exponer el puerto de la API
EXPOSE 3000

# 7) Comando por defecto para arrancar la aplicación
CMD ["npm", "run", "dev"]

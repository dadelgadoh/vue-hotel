# Utiliza una imagen base con Node.js
FROM node:latest as build-stage

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo
# COPY . .
COPY ./ .

# Compila el proyecto Vue.js
RUN npm run build

# # Stage de producción
# FROM nginx:latest

# # Copia la compilación estática del proyecto Vue.js del stage de construcción
# COPY --from=build-stage /app/dist /usr/share/nginx/html

# # Expone el puerto en el que se ejecuta el servidor Nginx
# EXPOSE 80

# # Comando para iniciar el servidor Nginx
# CMD ["nginx", "-g", "daemon off;"]


FROM nginx as production-stage
EXPOSE 3000
RUN mkdir /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /app
# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Elimina el contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia tus archivos HTML y CSS al directorio que Nginx sirve
COPY public/ /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# El contenedor ejecutará Nginx por defecto
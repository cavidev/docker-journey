# De que imagen se basa y la version de la imagen
FROM node:22

# El directorio donde se va a ejecuar la aplicacion -codigo fuente
# en el contenedor
RUN mkdir -p /home/app

# Donde va a obtener la aplicacion para copiarla en la direccion anterior
COPY /services /home/app

#exponer un puerto para conectarse a la app
EXPOSE 3000

#Para ejecutarlo
CMD ["node", "/home/app/server.js"]
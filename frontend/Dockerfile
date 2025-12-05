FROM nginx:latest

COPY . /usr/share/nginx/html

EXPOSE 80 
# Forzamos el comando de inicio para mantener el contenedor UP
CMD ["nginx", "-g", "daemon off;"]

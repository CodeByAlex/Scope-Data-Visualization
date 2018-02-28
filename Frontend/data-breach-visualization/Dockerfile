#Create image as base image - Using nginx for the webserver
FROM nginx

#Copy build artifacts to nginx
COPY dist /usr/share/nginx/html

#Expose port 80
EXPOSE 80

#Commands to build from docker
#docker build -t scope-frontend .
#docker run -p 80:80 -it scope-frontend

#To access box terminal
#docker exec -it variable-id /bin/bash
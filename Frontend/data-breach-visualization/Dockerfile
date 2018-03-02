# Create image based on the official Node 7 image from dockerhub
FROM node:7 as node

# Install Angular CLI
RUN yarn global add @angular/cli
RUN ng set --global packageManager=yarn

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Build project with ahead of time compilation
RUN yarn
RUN ng build -aot

#Create image as base image - Using nginx for the webserver
FROM nginx

#Copy build artifacts to nginx
COPY --from=node /usr/src/app/dist /usr/share/nginx/html

#Expose port 80
EXPOSE 80

#Commands to build from docker
#docker build -t scope-frontend .
#docker run -p 80:80 -it scope-frontend

#To access box terminal
#docker exec -it variable-id /bin/bash
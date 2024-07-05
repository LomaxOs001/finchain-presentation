# Use a node image as the base image and name it 'build' for later reference
FROM node:20.12.0-alpine as build

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install dependencies, matching package-lock.json
RUN npm ci

# install the Angular CLI
RUN npm install -g @angular/cli

COPY . .

RUN npm run build --configuration=production

# Use the latest version of the official Nginx image as the base image
FROM nginx:latest

# copy the custom nginx configuration file to the container in the default location
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy the build output from the 'build' image to the default Nginx public folder
COPY --from=build /app/dist/finchain-app/browser /usr/share/nginx/html

EXPOSE 80
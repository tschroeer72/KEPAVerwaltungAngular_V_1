# Base image
FROM node:20.14-alpine as node

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND/OR package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build --prod

# Base image NGINX
FROM nginx:alpine

# Take copy from build foled into NGINX public folder
COPY --from=node /app/dist/kepaverwaltung-angular/browser /usr/share/nginx/html

# Expose application port
EXPOSE 80

# Etapa 1 - Build Angular
FROM node:20 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Etapa 2 - NGINX
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/frontend-angular /usr/share/nginx/html

EXPOSE 80

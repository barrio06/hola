FROM node:18.19.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY . .

RUN ng build --configuration production

FROM nginx:stable

COPY --from=build /app/dist/hola /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

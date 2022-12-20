FROM node:lts as build
WORKDIR /rolefr_front
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx as production
COPY --from=build /rolefr_front/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

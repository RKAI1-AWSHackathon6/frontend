FROM node:14.17.0 AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.17-alpine as production-stage

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

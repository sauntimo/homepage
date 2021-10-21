# React + Deps
FROM node:16-alpine3.12 as build-deps

WORKDIR /usr/src/app

COPY ./frontend/package.json /app/package.json
COPY ./frontend/yarn.lock /app/yarn.lock

RUN yarn install

COPY ./shared /usr/src/app/shared
COPY ./frontend/ /usr/src/app

RUN yarn build


# Nginx
FROM nginx:1.21.3-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
COPY ./frontend/nginx.conf /etc/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

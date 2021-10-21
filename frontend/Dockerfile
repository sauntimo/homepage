# React + Deps
FROM node:16-alpine3.12 as build-deps

WORKDIR /usr/src/app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install

COPY ./../shared /usr/src/app/shared
COPY ./ /usr/src/app

RUN yarn build


# Nginx
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

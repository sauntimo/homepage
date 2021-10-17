FROM node:16-alpine3.12

WORKDIR /app

COPY ./frontend/package.json /app/package.json
COPY ./frontend/yarn.lock /app/yarn.lock

RUN yarn install

COPY ./shared /shared

COPY ./frontend /app

EXPOSE 3000

CMD ["yarn", "dev"]

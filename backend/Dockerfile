FROM node:16-alpine3.12

WORKDIR /app

ADD ./backend/package.json /app/package.json
ADD ./backend/yarn.lock /app/yarn.lock

RUN yarn install

COPY ./shared /shared

ADD ./backend /app

EXPOSE 3001

CMD ["yarn", "start:dev"]

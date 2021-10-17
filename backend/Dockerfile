FROM node:16-alpine3.12

WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

RUN yarn install --production

ADD . /app

EXPOSE 3001

CMD ["yarn", "start:prod"]

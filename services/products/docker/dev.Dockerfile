FROM node:latest

WORKDIR /opt/service/web-gateway
COPY package.json yarn.lock* ./

RUN yarn

COPY .  .

ENV NODE_ENV "development"

CMD yarn run dev
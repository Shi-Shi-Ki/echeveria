FROM node:14

ENV APP_ROOT /usr/src/app

WORKDIR $APP_ROOT

ADD package*.json tsconfig.json tsconfig.build.json yarn.lock $APP_ROOT/

RUN yarn install
# need copy command before build
COPY . .
RUN yarn build

# public port
EXPOSE 50051

CMD ["yarn","run","start:prod"]


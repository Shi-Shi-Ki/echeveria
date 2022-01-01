FROM node:14

ENV APP_ROOT /usr/app

WORKDIR $APP_ROOT

ADD package*.json tsconfig.json tsconfig.build.json webpack*.js $APP_ROOT/

RUN yarn install
COPY . .
RUN yarn build:prod

EXPOSE 50051

CMD yarn start:app:prodp

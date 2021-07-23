FROM node:14

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY tsconfig.build.json /usr/src/app/
COPY yarn.lock /usr/src/app/
COPY . .


FROM envoyproxy/envoy-alpine:v1.14.1

ENV HOME /root
WORKDIR $HOME

COPY ./gateway/envoy-config.yaml /etc/envoy/envoy-config.yaml
COPY ./gateway/gen $HOME/gen
COPY ./gateway/package.json $HOME/.
COPY ./gateway/webpack.config.js $HOME/.
COPY ./gateway/client.js $HOME/.
COPY ./gateway/index.html $HOME/.
COPY ./.env.dev $HOME/.
COPY ./.env.prod $HOME/.

RUN apk upgrade --update
RUN apk add npm

RUN npm install
ENV PATH $PATH:$HOME/node_modules/.bin
RUN npm run webpack:prod

CMD /usr/local/bin/envoy -c /etc/envoy/envoy-config.yaml

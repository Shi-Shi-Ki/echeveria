FROM envoyproxy/envoy-dev:c41850ce99689180727c65c3c9fa410257ff9cd9

COPY envoy-config.yml /etc/envoy/gateway-envoy.yaml
COPY docker-entrypoint.sh /
RUN chmod 755 /docker-entrypoint.sh

ENV GATEWAY_ENV="local"
ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD /usr/local/bin/envoy --bootstrap-version 2 -c /etc/envoy/gateway-envoy.yaml


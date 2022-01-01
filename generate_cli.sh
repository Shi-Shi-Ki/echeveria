#! bin/bash

DIST_DIR=./gateway/gen

protoc --plugin=./node_modules/.bin/protoc-gen-grpc-web \
  --js_out=import_style=commonjs:${DIST_DIR} \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${DIST_DIR} \
  -Iproto \
  proto/*.proto

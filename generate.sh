#! bin/bash

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=src/gen \
  --ts_proto_opt=nestJs=true \
  --ts_proto_opt=outputClientImple=true \
  --ts_proto_opt=addGrpcMetadata=true \
  --ts_proto_opt=esModuleInterop=true \
  -Iproto \
  proto/*.proto


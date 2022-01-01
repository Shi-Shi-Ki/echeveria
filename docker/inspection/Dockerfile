FROM golang:1.16-alpine

ENV PATH="${PATH}:/sbin"
ENV GOPATH=/usr/local

RUN apk upgrade --update
RUN apk add vim
RUN apk add git
RUN apk add curl
RUN go install github.com/ktr0731/evans@latest
RUN go get github.com/fullstorydev/grpcurl
RUN go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest

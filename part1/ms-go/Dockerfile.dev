FROM golang:latest

RUN go get -u github.com/gorilla/mux

WORKDIR /go/src/app
ADD src src

CMD ["go", "run", "src/index.go"]
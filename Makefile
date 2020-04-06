.PHONY: login build push pull run

all: login build push

build:
	docker build . -t magida/shop

push:
	docker push magida/shop

pull:
	docker pull magida/shop

run:
	docker container run -p 80:3000 magida/shop

login:
	docker login

clean:
	echo "hello world"

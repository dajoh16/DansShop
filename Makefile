.PHONY: login build push pull rundockercompose

all: login build push

build:
	docker build . -t magida/shop

push:
	docker push magida/shop

pull:
	docker pull magida/shop

rundockercompose:
	docker-compose up -d && docker-compose logs --follow

rundocker:
	docker container run -p 80:3000 magida/shop

login:
	docker login

clean:
	echo "hello world"

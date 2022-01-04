include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f

.PHONY: test

test:
	docker exec -it api npm run test
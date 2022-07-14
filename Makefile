.PHONY:setup
setup:
	cp .env.dist .env
	docker-compose up -d
	pnpm i --shamefully-hoist
	pnpm db:generate
	pnpm dev
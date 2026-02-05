run:
	docker compose up postgres -d && \
	npm install && \
	npm run db:generate && \
	npx prisma db push --skip-generate && \
	npm run seed && \
	npm run dev

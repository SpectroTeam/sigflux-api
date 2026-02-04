FROM node:20-alpine AS builder
WORKDIR /app

COPY *.json ./
RUN npm ci

COPY src ./src
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN DATABASE_URL="dummy" npx prisma generate
RUN npm run build

RUN npm prune --omit=dev

FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package*.json ./

EXPOSE 3000
CMD ["npm", "start"]

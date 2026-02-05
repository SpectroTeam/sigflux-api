FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache \
    openssl \
    ca-certificates

COPY *.json ./
RUN npm ci

COPY src ./src
COPY prisma ./prisma
# gera prisma client
RUN npx prisma generate
RUN npm run build

# remove dev dependencies
RUN npm prune --omit=dev

FROM node:20-alpine
WORKDIR /app

RUN apk add --no-cache \
  openssl \
  ca-certificates

ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package*.json ./

CMD ["npm", "start"]

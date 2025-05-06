#* Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add curl

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# * Production Stage
FROM node:20-alpine
WORKDIR /app

RUN apk add curl

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/build ./build

EXPOSE 3001

CMD ["npm", "start"]
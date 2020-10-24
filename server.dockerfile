FROM node:alpine
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install
COPY ./server/ ./
ENTRYPOINT npm run start:dev
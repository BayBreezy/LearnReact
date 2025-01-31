FROM node:20 as base

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npx", "-y", "serve", "-s", "dist"]
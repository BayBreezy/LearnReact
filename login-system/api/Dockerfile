FROM node:20 as base

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM base as production

ENV NODE_ENV=production

COPY --from=base /app/dist ./dist
COPY --from=base /app/prisma ./prisma

CMD ["node", "dist/main"]

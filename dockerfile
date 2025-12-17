FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# build TypeScript → JavaScript
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

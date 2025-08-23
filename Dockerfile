FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Levanta el servidor que mantiene el proceso activo
CMD ["node", "server.js"]

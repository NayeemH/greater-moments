FROM node:15-alpine

COPY package*.json ./
RUN npm install
EXPOSE 8080
CMD ["node", "/index.js"]

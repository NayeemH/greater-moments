FROM node:15-alpine

COPY . /src
RUN npm install
EXPOSE 8080
CMD ["node", "/index.js"]

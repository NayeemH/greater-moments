FROM node:latest AS ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm install @angular/cli && npm install && npm run build --prod

FROM node:10 AS server-build
WORKDIR /usr/src/app
COPY --from=ui-build /usr/src/app/dist/greater-moment .dist
COPY package*.json ./
RUN npm install
COPY server .

EXPOSE 3080

CMD ["node", "server/index.js"]

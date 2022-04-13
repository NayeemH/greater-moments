FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/greater-moment /usr/share/nginx/html
COPY --from=node /app/server /usr/share/nginx/html
EXPOSE 80
CMD ["node", "server/index.js"]

FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
COPY server .
EXPOSE 8080
CMD ["node", "server/index.js"]
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/greater-moment /usr/share/nginx/html

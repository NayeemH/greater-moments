FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
CMD ["npm", "start"]
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/greater-moment /usr/share/nginx/html
EXPOSE 80

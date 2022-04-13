# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod
# #stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/greater-moment /usr/share/nginx/html
# COPY --from=node /app/server /usr/share/nginx/html
# EXPOSE 80

# FROM node:10 AS ui-build
# WORKDIR /usr/src/app
# COPY greater-moment/ ./greater-moment/
# RUN cd greater-moment && npm install @angular/cli && npm install && npm run build

# FROM node:10 AS server-build
# WORKDIR /root/
# COPY --from=ui-build /usr/src/app/greater-moment/dist ./greater-moment/dist
# COPY package*.json ./
# RUN npm install
# COPY server .

# #stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/greater-moment /usr/share/nginx/html
# COPY --from=node /app/server /usr/share/nginx/html

# EXPOSE 80

# CMD ["node", "server/index.js"]

FROM loiane/angular-cli as client-app
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run start
RUN npm run build --prod


# # Node server
# FROM node:16.14.2-alpine as server-app
# WORKDIR /app/server
# COPY server /app/server

# # Final image
# FROM node:16.14.2-alpine
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# # COPY --from=server-app /app/server /usr/src/app
# COPY --from=client-app /app/dist/greater-moment /usr/src/app/dist
EXPOSE 80
CMD [ "node",server/index.js" ]

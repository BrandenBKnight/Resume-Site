# Build stage
FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:alpine
WORKDIR /app
COPY --from=build /app .
COPY --from=build /app/server /app/server
EXPOSE 3000
CMD ["node", "server/server.js"]

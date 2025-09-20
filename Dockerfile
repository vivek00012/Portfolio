# Use official Node.js image
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the app (adjust if your build command is different)
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
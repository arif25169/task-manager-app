FROM node:18-alpine

WORKDIR /app

COPY ../frontend/package.json ../frontend/package-lock.json ./
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

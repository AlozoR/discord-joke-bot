FROM node:14

WORKDIR /joke-bot

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

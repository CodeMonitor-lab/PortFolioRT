# Initialize docker
FROM node:22.14.0

WORKDIR /portfolioi/client

COPY package.json ./

RUN npm ci 

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
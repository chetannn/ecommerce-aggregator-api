## Ecommerce Aggregator API

![Node.js CI](https://github.com/chetannn/ecommerce-aggregator-api/actions/workflows/nodejs.yml/badge.svg)

### Install Dependencies
``` npm install``` or ```yarn ```
### Create and copy env file
``` touch .env && cp .env.example .env ```
### Run the server
``` npm run dev ``` or ``` yarn dev ```
### Run the server in watch mode
``` npm run watch ``` or ``` yarn watch ```
### Run Test Suit
```npm test ``` or ``` yarn test```

### Database Migrate
``` npm run db:migrate ``` or ``` yarn db:migrate ```

### Database Seed
``` npm run db:seed ``` or ``` yarn db:seed ```

### Scrapping Script
``` npm run scrap ``` or ``` yarn scrap ```

### Some useful commands
``` npx sequelize-cli db:migrate```
``` npx sequelize-cli db:seed:all```
``` npx sequelize-cli seed:generate --name users ```
``` npx sequelize-cli model:generate --name Item --attributes title:string,link:string,userId:integer ```

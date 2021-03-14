## Ecommerce Aggregator API

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

### Some useful commands
``` npx sequelize-cli db:migrate```
``` npx sequelize-cli db:seed:all``
``` npx sequelize-cli seed:generate --name users ```
``` npx sequelize-cli model:generate --name Item --attributes title:string,link:string,userId:integer ```

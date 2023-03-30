const express = require("express");
const connect_to_database = require("./database_connection");
const TodoRouter = require("./todo");
const app = express();

// This is used for importing value of the variables from .env file
require("dotenv").config();
console.log(process.env.DATABASE_USERNAME);

connect_to_database();

app.use("/todo", TodoRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running ${port}`);
});

const mongoose = require("mongoose");

const connect_to_database = async () => {
  const connection = await mongoose.connect(process.env.DB_CONNECTION_URL);

  if (connection) {
    console.log("database connected");
  } else {
    console.log("databasse not connected");
  }
};

module.exports = connect_to_database;

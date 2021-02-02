const { db } = require("./config");

console.log("db: ", db);

const getAllBreweries = () => {
  return db.ref("breweries/").once("value");
};

module.exports = {
  getAllBreweries,
};

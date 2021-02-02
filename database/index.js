const { db } = require("./config");

console.log("db: ", db);

const getAllBreweries = () => {
  console.log("AKDHAFSDIHF");
  return db.ref("breweries/").once("value");
  // .then((data) => {
  //   return data.val();
  // });
};

module.exports = {
  getAllBreweries,
};

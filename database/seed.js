import { openDatabase } from "expo-sqlite";
import data from "../Breweries.json";

const db = openDatabase("ATX-beer-passport");

const seedDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS breweries (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(100) NOT NULL, website VARCHAR(50), street_address VARCHAR(50) NOT NULL, zip INT, logo VARCHAR(200);",
      []
    );

    for (let i = 0; i < data.length; i++) {
      tx.executeSql(
        `INSERT INTO breweries (name, website, street_address, zip, logo) VALUES (${
          data[i].Brewery
        }, ${data[i].Website}, ${data[i].Street - Address}, ${data[i].Zip}, ${
          data[i].Logo
        })`,
        []
      );
    }
  });
};

module.exports = { seedDatabase };

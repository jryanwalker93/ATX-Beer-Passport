import { openDatabase } from "expo-sqlite";
import data from "../Breweries.json";

const db = openDatabase("atxBeerPassport.db");

const seedDatabase = () => {
  // console.log(aaaaa);
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS breweries (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(100) NOT NULL, website VARCHAR(50), street_address VARCHAR(50) NOT NULL, zip INT, logo VARCHAR(200));",
      []
    );

    // tx.executeSql(
    //   "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, username VARCHAR(100) NOT NULL, password VARCHAR(50)",
    //   []
    // );

    // for (let i = 0; i < data.length; i++) {
    //   tx.executeSql(
    //     `INSERT INTO breweries (name, website, street_address, zip, logo) VALUES (${data[i].Brewery}, ${data[i].Website}, ${data[i].streetAddress}, ${data[i].Zip}, ${data[i].Logo})`,
    //     []
    //   );
    // }
    // // console.log(db);
    // tx.executeSql(`SELECT * FROM breweries`, [], (res) => console.log(res));
  });
};

module.exports = { seedDatabase };

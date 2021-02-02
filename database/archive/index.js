import { openDatabase } from "expo-sqlite";

const db = openDatabase({ name: "atxBeerPassport.db" });

const registerUser = (username, password) => {
  // console.log("username: ", username);
  // console.log("password: ", password);
  console.log(db);
  // console.log("aaadddaa");

  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO users (username, password)
         VALUES (?, ?)
         `,
      [username, password],
      (tx, results) => console.log("RESULTS: ", results)
    );
  });
};

module.exports = {
  registerUser,
};

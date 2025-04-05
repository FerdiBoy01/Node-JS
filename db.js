const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar_nodejs",
});

db.connect((err) => {
  if (err) {
    console.log("koneksi gagal", err);
  } else {
    console.log("koneksi ke database berhasil");
  }
});

module.exports = db;

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("terkoneksi ke database");

  db.query("CREATE DATABASE IF NOT EXISTS belajar_nodejs", (err) => {
    if (err) throw err;
    console.log("DATABASE INI BERHASIL DI BUAT");

    db.changeUser({ database: "belajar_nodejs" }, (err) => {
      if (err) throw err;

      const sql = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nama VARCHAR(100),
                    email VARCHAR(100)
                )
            `;

      db.query(sql, (err) => {
        if (err) throw err;
        console.log("tabel ini berhasil dibuat");
        db.end();
      });
    });
  });
});

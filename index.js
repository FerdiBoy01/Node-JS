const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

app.post("/users", (req, ress) => {
  const { nama, email } = req.body;
  const sql = "INSERT INTO users (nama, email) VALUES (?, ?)";
  db.query(sql, [nama, email], (err, result) => {
    if (err) {
      console.error(err);
      return ress.status(500).send("gagal menambahkan data");
    }
    ress.send("data berhasil di tambahkan");
  });
});

app.listen(3000, () => {
  console.log("server berhasil berjalan di http://localhost:3000");
});

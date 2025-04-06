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

//update data
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nama, email } = req.body;

  const sql = "UPDATE users SET nama = ?, email = ? WHERE id = ?";
  db.query(sql, [nama, email, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("data gagal di update");
    }
    if (result.affectedRows === 0) {
      return res.status("data tidak ditemukan");
    }
    res.send("data berhasil di update");
  });
});

//hapus data
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("data gagal di hapus", err);
    }
    res.send("data berhasil di hapus");
  });
});

app.listen(3000, () => {
  console.log("server berhasil berjalan di http://localhost:3000");
});

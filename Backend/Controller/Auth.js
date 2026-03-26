const { db } = require("../DBconnection/db.js");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "name,email,password is required" });
  try {
    const [Emailexist] = await db.query(
      "SELECT * FROM vignesh WHERE email = ?",
      [email],
    );
    if (Emailexist.length > 0)
      return res.status(409).json({ message: "Email Already exists" });
    const hashedpassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO vignesh (name,email,password) VALUES (?,?,?)`;
    const [result] = await db.query(sql, [name, email, hashedpassword]);
    return res.status(200).json({ message: "successfully Signuped" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "name,password is required" });
  try {
    const [Isemail] = await db.query(`SELECT * FROM vignesh WHERE email = ?`, [
      email,
    ]);
    if (Isemail.length === 0)
      return res.status(400).json({ message: "Invalid Email" });
    const Ispassword = await bcrypt.compare(password, Isemail[0].password);
    if (!Ispassword)
      return res.status(401).json({ message: "Invalid password" });
    return res.status(200).json({ Isemail });
  } catch (err) {}
};

module.exports = { signup, login };

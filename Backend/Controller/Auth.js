const { db } = require("../DBconnection/db.js");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "name,email,password is required",status:false });
  try {
    const [Emailexist] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );
    if (Emailexist.length > 0)
      return res.status(409).json({ message: "Email Already exists",status:false });
    const hashedpassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO users (name,email,password) VALUES (?,?,?)`;
    const [result] = await db.query(sql, [name, email, hashedpassword]);
    return res.status(200).json({ message: "successfully Signuped",status:true });
  } catch (err) {
    return res.status(500).json({ message: err.message,status:false });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "name,password is required",status:false });
  try {
    const [Isemail] = await db.query(`SELECT * FROM users WHERE email = ?`,[email]);
    if (Isemail.length === 0)
      return res.status(400).json({ message: "Invalid Email",status:false });
    const Ispassword = await bcrypt.compare(password, Isemail[0].password);
    if (!Ispassword)
      return res.status(401).json({ message: "Invalid password",status:false });
    if(Isemail[0].active=== 0)
    {
      return res.status(403).json({message:'Account is Deactivated',status:false})
    }
    return res.status(200).json({ Isemail,status:true });
  } catch (err) {
    return res.status(500).json({message:err.message,status:false})
  }
};

module.exports = { signup, login };

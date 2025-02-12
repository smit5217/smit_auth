const db = require("../db");
const bcrypt = require("bcrypt");

exports.createUser = async (first_name, last_name, email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword,"hash password")
    return db.execute(
        "INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)",
        [first_name, last_name, email, hashedPassword, role]
    );
};

exports.getUserByEmail = async (email) => {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
};

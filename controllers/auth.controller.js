const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    const { first_name, last_name, email, password, role } = req.body;
    if (!["admin", "customer"].includes(role)) {
        return res.status(400).json({ message: "Invalid role" });
    }

    try {
        await User.createUser(first_name, last_name, email, password, role);
        res.status(201).json({ message: "User registered. Verify your email!" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.getUserByEmail(email);

    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Invalid credentials" });

    if (user.role !== "admin") return res.status(403).json({ message: "You are not allowed to login from here" });

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
};

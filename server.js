const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const cors = require('cors');

dotenv.config();
const app = express();

const corsOptions = {
 origin: '*',
 methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
 allowedHeaders: ['Content-Type', 'Authorization', 'accept', 'access-control-allow-origin'],
 credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

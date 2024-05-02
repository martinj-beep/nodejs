import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.port;

const app = express();



app.listen(PORT, () => console.log(`app is running on port ${PORT}`))
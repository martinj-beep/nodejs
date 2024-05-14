import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js"

dotenv.config(); // padarys kad dotenv veiktu

const { PORT, MONGO_URI } = process.env  // pasiimam info is env

mongoose.connect(MONGO_URI, { dbName: "office" }). then(() => console.log("connected to DB")).catch(() => console.log("failed to connect"));

const app = express();

app.use(express.json()); // nurodo ka reiketu naudoti appsui
app.use(router);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
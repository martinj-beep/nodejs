import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import attendeesRouter from "./routes/attendeesRouter.js";
import eventsRouter from "./routes/eventsRouter.js"

dotenv.config();

const PORT = process.env.PORT; // is dotenv pasiimsim PORT ir idesim i kintamaji
const MONGO_URI = process.env.MONGO_URI; // is dotenv pasiimsim MONGO_URI ir idesim i kintamaji

mongoose.connect(MONGO_URI).then(() => console.log("Connected to Mongo DB")).catch(() => console.log("Could not connect"))  // padarys kad laisvai belekada programa prisiungs prie DB

const app = express();

app.use(express.json()) // pasakys appsui naudoti json (suprasti json). Turi eiti pries routerius
app.use(attendeesRouter, eventsRouter);


app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))
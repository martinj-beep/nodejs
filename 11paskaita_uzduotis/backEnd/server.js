import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config(); // padarys kad dotenv veiktu

const { PORT, MONGO_URI } = process.env  // pasiimam info is env

mongoose.connect(MONGO_URI, { dbName: "website" }). then(() => console.log("connected to DB")).catch(() => console.log("failed to connect"));
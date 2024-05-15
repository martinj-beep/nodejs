import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { PORT, MONGO_URI } = process.env
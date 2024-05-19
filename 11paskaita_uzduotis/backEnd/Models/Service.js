import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    description: String
})

export default mongoose.model("Service", serviceSchema)
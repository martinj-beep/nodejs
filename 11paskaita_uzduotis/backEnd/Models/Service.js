import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    description: String
})

export default mongoose.model("Membership", membershipSchema)
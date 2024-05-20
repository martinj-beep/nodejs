import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    surname: String,
    email: String,
    service_id: String
})

export default mongoose.model("User", userSchema)
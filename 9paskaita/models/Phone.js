import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
    brand: String,
    year: Number
}) // susikuriame telefono schema su mongoose

export default mongoose.model("Phone", phoneSchema) // eksportuojam shema ir sukursim nauja Phone kolekcija musu serveryje
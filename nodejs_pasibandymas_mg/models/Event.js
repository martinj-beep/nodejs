import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    id: String,
    name: String,
    date: String,
    location: String,
    description: String,
    attendeeIds: [
        {
            type: mongoose.Schema.Types.ObjectId, // pasiimsime butent to zmogaus object id. Rasom objekto formatu, taip bus galima duoti daugiau funkcionalumo object key
            ref: "Attendee" // aki mongoose nores apjungti dvi kolekcijas, kur ju reiketu ieskoti. referuos i phone kolekcija
        }
    ]
})

export default mongoose.model("event", eventSchema);
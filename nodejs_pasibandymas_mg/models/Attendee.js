import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    eventId: [
        {
            type: mongoose.Schema.Types.ObjectId, // pasiimsime butent to zmogaus object id. Rasom objekto formatu, taip bus galima duoti daugiau funkcionalumo object key
            ref: "Event" // aki mongoose nores apjungti dvi kolekcijas, kur ju reiketu ieskoti. referuos i phone kolekcija
        }
    ]
})

export default mongoose.model("attendee", attendeeSchema);
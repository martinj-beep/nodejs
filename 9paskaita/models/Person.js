import mongoose from "mongoose";

const personSchema = new mongoose.Schema({ // sio modelio phone fieldas bus arejus
    name: String,
    email: String,
    phone: [
        {
            type: mongoose.Schema.Types.ObjectId, // pasiimsime butent to zmogaus object id. Rasom objekto formatu, taip bus galima duoti daugiau funkcionalumo object key
            ref: "Phone" // aki mongoose nores apjungti dvi kolekcijas, kur ju reiketu ieskoti. referuos i phone kolekcija
        }
    ] 
})

export default mongoose.model("Person", personSchema)
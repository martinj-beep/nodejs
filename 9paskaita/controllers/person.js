import Person from "../models/Person.js"
import Phone from "../models/Phone.js"

export async function addPerson(req, res) {
    const { name, email } = req.body;

    const newPerson = new Person({
        name,
        email
    })

    await newPerson.save();

    res.json(newPerson);
}

export async function addPhoneToPerson(req, res) {
    const { personId, phoneId } = req.params;

    const person = await PersonfindById(personId);
    const phone = await Phone.findById(phoneId); // kreipsimes i dvi kolekcijas kad pasiimtume is ju irasus pagal ID;

    person.phone.push(phone) // atnaujinam zmogaus objekta su pasirinktu telefonu

    await person.save(); // issaugojom pakitimus person objekte

    res.json(person)
}

export async function getPeople(req, res) {
    const people = await Person.find();

    req.json(people);
}

export async function getPeopleWithPhones(req, res) {
    const people = await Person.find().populate("phone"); 

    res.json(people)
}
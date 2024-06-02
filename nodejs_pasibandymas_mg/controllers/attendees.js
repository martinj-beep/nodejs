import Attendee from "../models/Attendee.js";

export async function getAttendees(req, res) {

    try {
        const attendees = await Attendee.find({});
        res.json(attendees);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }

}

export async function createAttendee(req, res) {
    const { name, email, eventId } = req.body;

    if (!name || !email || !eventId) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const newAttendee = new Attendee({
        name,
        email,
        eventId
    }) // sukursime nauja irasa mongodb
    
    try {
        await newAttendee.save(); // sukurtas attendee bus issaugotas duomenu  bazeje

    res.json({newAttendee})
    } catch (error) {
        res.status(500).json({ error: error.message }) // 500 bus bendras serverio erroras
    }
}

export async function updateAttendeeById(req, res) {
    const { id } = req.params;
    const { name, email, eventId } = req.body;

    try {
        const attendee = await Attendee.findById(id);
        if (!attendee) {
            res.status(404).json({ message: `Attendee by id: ${id} not found`})
            return;
        }

        attendee.name = name,
        attendee.email = email,
        attendee.eventId = eventId,

        await attendee.save()
        res.status(200).json(attendee)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export async function deleteAttendeeById(req, res) {
    const { id } = req.params;

    try {
        const response = await Attendee.findByIdAndDelete(id);

        if (!response) {
            res.status(404).json({ message: "attendee not found"});
            return;
        }
        console.log(response);

        res.json({ message: "success"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
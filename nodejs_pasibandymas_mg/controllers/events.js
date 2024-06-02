import Event from "../models/Event.js"

export async function getEvents(req, res) {

    try {
        const events = await Event.find({});
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }

}

export async function getEventById(req, res) {
    const { id } = req.params;

    try {
        const event = await Event.findById(id);

        res.json(event)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export async function createEvent(req, res) {
    const { name, date, location, description, attendeeIds } = req.body;

    if (!name || !date || !location || !description || !attendeeIds ) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const newEvent = new Event({
        name,
        date,
        location,
        description,
        attendeeIds
    }) // sukursime nauja irasa mongodb
    
    await newEvent.save(); // sukurtas eventas bus issaugotas duomenu  bazeje

    res.json({newEvent})
}

export async function updateEventsById(req, res) {
    const { id } = req.params;
    const { name, date, location, description, attendeeIds } = req.body;

    try {
        const event = await Event.findById(id);
        if (!event) {
            res.status(404).json({ message: `Event by id: ${id} not found`})
            return;
        }

        event.name = name;
        event.date = date;
        event.location = location;
        event.description = description;
        event.attendeeIds = attendeeIds;

        await event.save()
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function addAttendeesToEvent(req, res) {
    const { eventId, attendeeId } = req.params;

    const event = await Event.findById(eventId);
    const attendee = await Attendee.findById(attendeeId); // kreipsimes i dvi kolekcijas kad pasiimtume is ju irasus pagal ID;

    event.attendeeIds.push(attendee) // atnaujinam zmogaus objekta su pasirinktu telefonu

    await event.save(); // issaugojom pakitimus person objekte

    res.json(event)
}

export function removeAttendeesFromEvent(req, res) {
    res.json({})
}

export async function deleteEventById(req, res) {
    const { id } = req.params;

    try {
        const response = await event.findByIdAndDelete(id);

        if (!event) {
            res.status(404).json({ message: "event not found"});
            return;
        }
        console.log(response);

        res.json({ message: "success"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
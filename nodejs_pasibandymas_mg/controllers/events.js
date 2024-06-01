import Event from "../models/Event.js"

export async function getEvents(req, res) {
    const events = await Event.find({});

    res.json(events)
}

export function getEventById(req, res) {
    res.json({})
}

export async function createEvent(req, res) {
    const { id, name, date, location, description, attendeeIds } = req.body;

    const newEvent = new Event({
        id,
        name,
        date,
        location,
        description,
        attendeeIds
    }) // sukursime nauja irasa mongodb
    
    await newEvent.save(); // sukurtas eventas bus issaugotas duomenu  bazeje

    res.json({newEvent})
}

export function updateEventsById(req, res) {
    res.json({})
}

export function addAttendeesToEvent(req, res) {
    res.json({})
}

export function removeAttendeesFromEvent(req, res) {
    res.json({})
}

export function deleteEventById(req, res) {
    res.json({})
}
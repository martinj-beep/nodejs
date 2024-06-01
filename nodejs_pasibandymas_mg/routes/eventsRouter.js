import express from "express";
import { addAttendeesToEvent, deleteEventById, getEvents, getEventById, createEvent, removeAttendeesFromEvent, updateEventsById } from "../controllers/events.js";

const router = express.Router();

router.get("/events", getEvents);
router.get("/events/:id", getEventById);
router.post("/events", createEvent);
router.put("/events/:id", updateEventsById);
router.post("/events/:eventId/attendees/:attendeeId", addAttendeesToEvent);
router.delete ("/events/:eventId/attendees/:attendeeId", removeAttendeesFromEvent)
router.delete ("/events/:id", deleteEventById)

export default router
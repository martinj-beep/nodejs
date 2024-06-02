import express from "express";
import { createAttendee, deleteAttendeeById, getAttendees, updateAttendeeById } from "../controllers/attendees.js";

const router = express.Router();

router.get("/attendees", getAttendees);
router.post("/attendees", createAttendee);
router.put("/attendees/:id", updateAttendeeById);
router.delete ("/attendees/:id", deleteAttendeeById)

export default router
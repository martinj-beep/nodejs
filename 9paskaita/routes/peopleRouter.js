import express from "express";
import { addPerson, addPhoneToPerson, getPeople, getPeopleWithPhone } from "../controllers/person.js";

const router = express.Router(); // susikuriam nauja routeri

router.get("/people", getPeople); // grazins zmones

router.get("/people/phone", getPeopleWithPhone) // grazins zmones ir ju tlf

router.post("/people", addPerson); // sukurs zmogu i db

router.put("/people/:personId/phone/:phoneId") // su sita prijungsim kokiam telefonui koks telefonas

export default router;
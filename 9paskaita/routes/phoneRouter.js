import express from "express";
import { addPhone } from "../controllers/phone.js";

const router = express.Router(); // susikuriam nauja routeri

router.post("/phone", addPhone) // sukuriam endpointa, kuriame bus prideta nauja info // post requestai vyks su addPhone funkcija, paimta is controlleriu

export default router;
// failas sukurtas kad butu sudeti visi routai bendrai

import express from "express";
import peopleRouter from "./peopleRouter.js"
import phoneRouter from "./phoneRouter.js"


const router = express.Router(); // susikuriam nauja routeri

router.use(phoneRouter);
router.use(peopleRouter); // padarys kad routeriai butu naudojami

export default router; // ji reikes importuoti i pagrindini server.js faila
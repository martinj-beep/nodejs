import express from "express";
import { getUsers, getUserById } from "./controllers.js";

const router = express.Router();

// GET - duos visus userius
// GET - duos viena useri pagal jo id
// POST - prideda nauja useri
// DELETE - istrina useri pagal id

router.get("/user", getUsers)
// router.get("/user/:id/book/:bookId", getUserById) // dinamiskas endpointas, kuriame ":" dalis iveda klientas, ir su ta informacija grazins reikiama objekta is back-endo
router.get("/user/:id", getUserById)

export default router;
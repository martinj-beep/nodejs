import express from "express";
import { addPhone, deletePhoneById, getPhoneById, getPhones, updatePhoneById } from "./controllers.js"

const router = express.Router();

router.get("/phones", getPhones);

router.get("/phones/:id", getPhoneById);

router.post("/phones", addPhone);

router.put("/phones/:id", updatePhoneById);

router.delete("/phones/:id", deletePhoneById);

router.all("*", (req, res) => {
    res.status(404).json({ error: "Route not found" }) // fallback route, kuomet is client side kazkas nepavyksta, del to ismesim 404 errora. Turi buti paskutinis, nes visuomet bus tikrinami ar kazka atitiks nuo virsaus i apacia, todel tas routas, kuris tiks visiems, turi buti paskutinis
})

export default router;
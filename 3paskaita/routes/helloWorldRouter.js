import express from "express";
import { labasHandler } from "../controllers/helloWorldControllers.js";

const router = express.Router();

router.get("/labas", labasHandler) // pridejome importuota funkcija is controllers.js

export default router; // default nes nieko kito neexportuosime is failo
import express from "express";
import router from "./routes/index.js";

const PORT = 3000;

const app = express();

app.use(express.json()) // sita eilute aplikacijai paaiskins kaip reikia dirbti su json formato failais. SVARBU RASYTI PIRMIAU USEJSON NEI USEROUTER, NES KOMPANS NEZINOS KA DARYTI SU JSON FAILU
app.use(router) // appsas naudos importuota faila is router failo

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
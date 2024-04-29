// npm i -g name     - atsiuncia npm package globaliai (nes -g). instaliuojant globaliai node modules aplankalas atsiranda kompiuteryje
// npm i -D name    - atsiuncia kaip dev dependency. isirasys i node modules. siunciami tik devams reikalingi dalykai, ne tokie butini, kaip express
// npm i name    - atsisiuncia kaip dependency. isirasys i node modules. SIunciami kritiskai reikalingi dalykai, kaip nodemon
// ctrl + c sustabdys terminalo veikla

import express from "express"; // importuojant frameworka, jo directiono nurodyti nereikia, tik jo pavadinima kabutese

const app = express(); // susikureme aplikacija

app.get("/labas", (req, res) => { // callbackas suveiks, kuomet kreipsis tas adresas i backenda. I req ieis visa front endo info, i res visa informacija, kuria noresim siusti i front enda
    res.json({ // response bus siunciamas json formatu, beveik visa laika taip ir bus
        "labas" : "Labas" // atgal i front enda bus siunciamas objektas labas
    })
})  // po tasko nurodysim kurio http metodo lauksim. Skliaustuose norudysim kurio adreso lauksim requestu, VISI PRASIDEDA ADRESAI /

app.listen(3000, () => console.log("App listening on PORT 3000")) // klausysis uzklausu, nurodant adresa, is kur klausytis uzklausu (portas, standartinis yra 3000). Callbackas neprivalomas, taciau vizualiai matoma kuomet aplikacija pasileidzia
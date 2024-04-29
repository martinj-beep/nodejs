import express from "express" // importuojam npm module
import cors from "cors"

const app = express(); // susikuriam appsa express

app.use(express.json()); // jeigu ateina json informacija, naudok express.json
app.use(cors());

let cars = [
    {
        "make": "bmw",
        "year": 2000
    },
    {
        "make": "volvo",
        "year": 2015
    },
    {
        "make": "audi",
        "year": 1995
    }
]

app.get("/", (req, res) => {
    const query = req.query;
    res.json({
        test: "labas"
    }) // automatiskai konvertuos i json formata
}) // nurodys is kur ims informacija. Nurodysim ka darys kuomet priims informacija is serverio (("/")). req yra tai ka ims, res tai ka sius atgal

app.post("/", (req, res) => {
    const body = req.body;
    cars.push(body)
    res.json({
        success: true
    });
});

app.put("/", (req, res) => {
    const body = req.body;

    cars[0].make = body.make;
    cars[0].year = body.year;

    res.json(cars[0])
});

app.delete("/", (req, res) => {
    cars.splice(0, 1);

    res.json({
        success: true
    })
})

app.listen(3000, () => console.log("App listening on port 3000")) // applikacija klausysis 3000'antojo porto, ir kuomet ji veiks, islogins teksta
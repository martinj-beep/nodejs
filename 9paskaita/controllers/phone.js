import Phone from "../models/Phone.js"

export async function addPhone(req, res) { // telefono sukurimo funkcija
    const { brand, year } = req.body;

    const newPhone = new Phone({
        brand,
        year
    })

    await newPhone.save(); // issaugojam sita funkcija i duomenu baze, kurioje bus galima prideti telefa

    res.json(newPhone);
}
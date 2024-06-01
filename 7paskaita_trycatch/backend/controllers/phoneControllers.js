import Phone from "../models/Phone.js"

export async function getPhones(req, res) {
    
    try {
        const phones = await Phone.find({});
        res.json(phones);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }

}

export async function getPhoneById(req, res) {
    const { id } = req.params;

    try {
        const phone = await Phone.findById(id);

        res.json(phone)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export async function addPhone(req, res) {
    const { brand, model, price, year } = req.body; // ko tikesimes is front endo

    if (!brand || !model || !price || !year) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const newPhone = new Phone({
        brand, // naudojamas trumpinys, kuomet ir key ir value reiksmes tokios pacios, jas galima rasyti kaip viena
        model,
        price,
        year
    })

    try {
        await newPhone.save();

        res.status(201).json(newPhone)
    } catch (error) {
        res.status(500).json({ error: error.message }) // 500 bus bendras serverio erroras
    }


}

export async function updatePhoneById(req, res) {
    const { id } = req.params;
    const { brand, price, model, year } = req.body;

    try {
        const phone = await Phone.findById(id);
        if (!phone) {
            res.status(404).json({ message: `Phone by id: ${id} not found`})
            return;
        }

        phone.price = price;
        phone.model = model;
        phone.brand = brand;
        phone.year = year;

        await phone.save()
        res.status(200).json(phone)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export async function deletePhoneById(req, res) {
    const { id } = req.params;

    try {
        const response = await Phone.findByIdAndDelete(id);

        if (!response) {
            res.status(404).json({ message: "phone not found"});
            return;
        }
        console.log(response);

        res.json({ message: "success"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
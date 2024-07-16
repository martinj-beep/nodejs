import User from "../models/User.js";

export async function createUser(req, res) {
    const { name, email, dob, monthlyIncome } = req.body;

    const newUser  = new User({
        name,
        email,
        dob,
        monthlyIncome,
    });

    throw new Error("kazkas blogo")

    await newUser.save();

    res.json(newUser);
    
}
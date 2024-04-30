const users = [
    {
        name: "Vardas 1",
        age: 85,
        id: 1
    },
    {
        name: "Vardas 2",
        age: 50,
        id: 2
    }
]

export function getUsers(req, res) {
    res.json(users)
}

export function getUserById(req, res) {
    const params = req.params;
    const id = params.id;
    console.log(params);

    const user = users.find((u) => u.id === id)
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ sucess: false });
    }
}

export function addUser(req,res) {
    const body = req.body:

    users.push ()
}
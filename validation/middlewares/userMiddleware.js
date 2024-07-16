export function validateUser(req, res, next) {
    const { name } = req.body;

    if (name.length < 5) {
        return res.status(400).json({ err: "name too short" })
    }

    next() // sustabdys middleware viena, ir pranes kad pereitu prie kito
}
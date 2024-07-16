export function errMiddleware(err, req, res, next) {// erroras turi buti pirmas. kuriant errora, pirmas turetu buti error optionas
if (err) {
    res.status(500).json({ err: "kazkas blogai" });
}
}
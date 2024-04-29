import express from "express";
import userRouter from "./userRouter.js"
import helloRouter from "./helloWorldRouter.js"

const router = express.Router(); // sukuria tuscia routeri. Prie jo bus pridedami importuoti routeraiai

router.use(userRouter); // prie jo prijungs jau egzistuojanti routeri
router.use(helloRouter);

export default router;
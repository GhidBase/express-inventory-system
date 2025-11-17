import { Router } from "express";
const router = Router();
import dbController from "../controllers/dbController.js";

router.get("/", (req, res) => {
    console.log("test");
    res.send("hi");
});

export default router;

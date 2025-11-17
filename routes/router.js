import { Router } from "express";
const router = Router();
import dbController from "../controllers/dbController.js";

router.get("/", (req, res) => {
    dbController.initializeDatabase();
    console.log("Loaded the homepage");
    res.send("hi");
});

export default router;

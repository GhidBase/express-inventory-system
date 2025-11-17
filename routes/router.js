import { Router } from "express";
const router = Router();
import dbController from "../controllers/dbController.js";

router.get("/", (req, res) => {
    dbController.initializeDatabase();
    console.log("Loaded the homepage");
    res.send("hi");
});

router.get("/setup", (req, res) => {
    dbController.initializeTypesAndItems();
    console.log("ran setup - check Neon database");
    res.redirect("/");
});

export default router;

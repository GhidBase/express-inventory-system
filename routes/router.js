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

router.get("/types", async (req, res) => {
    const types = await dbController.getTypes();
    const typeMap = new Map();
    types.forEach((type) => typeMap.set(type.id, type.name));

    res.redirect("/");
});

router.get("/items", async (req, res) => {
    const [types, items] = await Promise.all([
        dbController.getTypes(),
        dbController.getItems(),
    ]);

    const typeMap = new Map();
    types.forEach((type) => typeMap.set(type.id, type.name));

    // process the information into the final object of types: [items]
    items.forEach((item) => {
        console.log(
            "Item: " + item.name + " | Type: " + typeMap.get(item.typeid)
        );
    });

    res.redirect("/");
});

export default router;

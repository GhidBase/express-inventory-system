import db from "../db/queries.js";

async function getInventory(req, res) {
    await db.getInventory();
}

async function initializeDatabase(req, res) {
    await db.initializeDatabase();
    console.log("database intialized");
}

async function initializeTypesAndItems(req, res) {
    await db.initializeTypesAndItems();
    console.log("Initialized types and items");
}

export default { getInventory, initializeDatabase, initializeTypesAndItems };

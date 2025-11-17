import db from "../db/queries.js";

async function getInventory() {
    await db.getInventory();
}

async function initializeDatabase() {
    await db.initializeDatabase();
    console.log("database intialized");
}

export default { getInventory, initializeDatabase };

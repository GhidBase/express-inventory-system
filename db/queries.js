import pool from "./pool.js";

async function getInventory() {
    console.log("hi");
}

async function initializeDatabase() {
    await pool.query(
        `CREATE TABLE IF NOT EXISTS types (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name TEXT
        );
        
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name TEXT,
            typeId INTEGER REFERENCES types(id)
        );
        
        CREATE TABLE IF NOT EXISTS inventory (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            quantity INTEGER,
            itemId INTEGER REFERENCES items(id)
        );
        `
    );
}

export default { getInventory, initializeDatabase };

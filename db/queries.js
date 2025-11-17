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

async function initializeTypesAndItems() {
    await pool.query(
        `
        DELETE FROM types;

        INSERT INTO types (name)
        VALUES ('nail'), ('needle'), ('tool'), ('charm');

        INSERT INTO items (name, typeId)
        VALUES ('Old Nail', 1), ('Sharpened Nail', 1), ('Channeled Nail', 1),
        ('Coiled Nail', 1), ('Pure Nail', 1), ('Needle', 2), ('Sharpened Needle', 2),
        ('Shining Needle', 2), ('Hivesteel Needle', 2), ('Pale Steel Needle', 2),
        ('Multi-Binder', 3), ('Flea Brew', 3), ('Plasmium Phial', 3),
        ('Straight Pin', 3), ('Polip Pouch', 3), ('Unbreakable Strength', 4),
        ('Quick Slash', 4), ('Mark of Pride', 4), ('Quick Focus', 4), ('Grubsong', 4);
        `
    );
}

async function getTypes() {
    const { rows } = await pool.query(`
        SELECT * FROM types;
        `);
    return rows;
}

async function getItems() {
    const { rows } = await pool.query(`
        SELECT * FROM items;
        `);
    return rows;
}

export default {
    getInventory,
    initializeDatabase,
    initializeTypesAndItems,
    getTypes,
    getItems,
};

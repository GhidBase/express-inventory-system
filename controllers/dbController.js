import { get } from "node:http";
import db from "../db/queries.js";

async function getInventory(req, res) {
    await db.getInventory();
}

async function initializeDatabase(req, res) {
    await db.initializeDatabase();
    console.log(
        "database intialized - (ignore if database was already initialized)"
    );
}

async function initializeTypesAndItems(req, res) {
    await db.initializeTypesAndItems();
    console.log("Initialized types and items");
}

async function getTypes(req, res) {
    return await db.getTypes();
}

async function getItems(req, res) {
    return await db.getItems();
}

export default {
    getInventory,
    initializeDatabase,
    initializeTypesAndItems,
    getTypes,
    getItems,
};

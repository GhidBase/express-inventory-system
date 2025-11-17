import db from "../db/queries.js";

async function getInventory() {
    db.getInventory();
}

export default { getInventory };

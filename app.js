// Environment variables
import dotenv from "dotenv";
dotenv.config();

// Express
import express from "express";
import router from "./routes/router.js";
const app = express();

// For view engine - EJS
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// To allow form inputs
// Without this, form submissions would have
// an empty req.body
// "extended: true" allows nested objects in the data
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("App started");
});

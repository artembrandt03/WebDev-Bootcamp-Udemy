//Secrets Mini-Project made with Node.js and Express.js

//Instructions:
//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express(); // Create an Express application
const port = 3000; // Define the port to listen on

function passwordCheck(req, res, next) { // Middleware to check password
    // Access the password from the request body
    const password = req.body.password; // Get password from form
    if (password === "ILoveProgramming") {  
        req.accessGranted = true;
    } else {
        req.accessGranted = false;
    }
    next();
}

// Built-in body parsing (no need for body-parser)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Use passwordCheck middleware before handling POST
app.post("/check", passwordCheck, (req, res) => {
    if (req.accessGranted) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
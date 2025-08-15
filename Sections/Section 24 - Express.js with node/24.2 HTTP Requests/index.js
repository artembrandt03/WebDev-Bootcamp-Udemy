import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Contact Page</h1><br><h2>My phone number is 123-456-7890</h2>");
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
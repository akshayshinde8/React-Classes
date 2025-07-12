const express = require("express");
const app = express();

let port = 3000;

app.get("/home", (req, res) => {
    res.json("This is Home Page");
})

app.get("/contact", (req, res) => {
    res.json("contact us at contact@contact.com")
})

app.get("/about", (req, res) => {
    res.json("Welcome to the about page")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

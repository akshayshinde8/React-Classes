//home aboutus contactus
const express = require("express");
const app = express();

let PORT = 3000;

app.get("/home", (req, res) => {
    res.send("Welcome To Home Page")
})

app.get("/aboutus", (req, res) => {
    res.json({ message: "Welcome To About Us Page" })
})

app.get("/contactus", (req, res) => {
    let contactDetails = {
        name: "Akshay",
        address: "Pune,Maharashtra",
        mobile: "9191919191",
        email: "ak.gmail.com"
    }
    res.send(contactDetails)
})

app.use((req, res) => {
    res.json({ error: "404 not found" })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
    console.log(`Server is running on http://localhost:${PORT}`)
});


const express = require("express");
const app = express();
const PORT = 3000;

app.get("/users/get", (req, res) => {
    res.json({ "id": 1, "name": "John Doe", "email": "john@example.com" })
})

app.get("/users/list", (req, res) => {
    let obj = [
        { "id": 1, "name": "John Doe", "email": "john@example.com" },
        { "id": 2, "name": "Jane Doe", "email": "jane@example.com" },
        { "id": 3, "name": "Bob Smith", "email": "bob@example.com" }
    ]
    res.send(obj)
})

app.use((req, res) => {
    res.json({ error: "404 Not Found" })
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
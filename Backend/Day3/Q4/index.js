const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
const PORT = 3000;

app.get("/users", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.json({ message: "All Users", res: data });
});

app.get("/users/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let users = data.users;

    const userId = parseInt(req.params.id);
    let index = users.findIndex((user) => user.id == userId);

    if (index == -1) {
        res.json({ Message: "User not found" });
    } else {
        res.json({ message: "Here is Your User", res: users[index] });
    }
});

app.post("/users", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let users = data.users;

    let id = users[users.length - 1].id + 1;
    console.log(id);
    let newUser = req.body;
    console.log(newUser);

    users.push({ id, ...newUser });

    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.json({ Meassage: "User Added" })
});

app.put("/users/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const users = data.users;

    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    let index = users.findIndex((user) => user.id == userId);

    if (index == -1) {
        res.json({ Message: "User not found" });
    } else {
        users[index] = { ...users[index], ...updatedUser }
        fs.writeFileSync("./db.json", JSON.stringify(data));
        res.json({ message: "User Updated", res: users[index] });
    }
});

app.delete("/users/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const users = data.users;

    const userId = parseInt(req.params.id);

    let index = users.findIndex((user) => user.id == userId);

    if (index == -1) {
        res.json({ Message: "User not found" });
    } else {
        let filteredUsers = users.filter(user => user.id !== userId);
        data.users = filteredUsers;
        fs.writeFileSync("./db.json", JSON.stringify(data))
        res.json({ message: "User Deleted", res: users[index] });
    }

    res.json({ message: "All Users", res: data });
});

app.use((req, res) => {
    res.json({ error: "404 Not Found" })
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
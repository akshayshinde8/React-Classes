const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

app.use(express.json());

app.get("/dishes", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.json({ message: "Data is here", data: data })
})

app.get("/dishes/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let dishes = data.dishes;

    let dishId = req.params.id;
    let index = dishes.findIndex(dish => dish.id == dishId);
    
    if (index == -1) {
        res.json({ message: "Dish not found" });
    } else {
        res.json({ message: "Here is Yous Dish", res: dishes[index] })
    }
})

app.post("/dishes", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const dishes = data.dishes;

    const id = dishes.length + 1;
    // const id2 = dishes[dishes.length -1].id + 1
    let newTask = req.body;
    console.log(newTask);

    dishes.push({ id, ...newTask })

    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.json({ message: "Task Added" })
})

app.put("/dishes/:id", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let dishes = data.dishes;

    let dishId = parseInt(req.params.id);
    let updatedTask = req.body;
    console.log(updatedTask);

    let index = dishes.findIndex((dish) => dish.id == dishId);
    console.log(index);

    if (index == -1) {
        res.status(404).json({ message: "Dish not found" });
    } else {
        dishes[index] = { ...dishes[index], ...updatedTask }
        fs.writeFileSync("./db.json", JSON.stringify(data));
        res.json({ message: "Task Updated", UpdatedDish: dishes[index] })
    }
})

app.delete("/dishes/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const dishes = data.dishes;

    let dishId = Number(req.params.id);

    let index = dishes.findIndex((dish) => dish.id == dishId);
    console.log(index);

    if (index == -1) {
        console.log("Worng ID");
        res.json({ message: "Wrong ID" })
    } else {
        let filteredData = dishes.filter((dish) => dish.id !== dishId);
        data.dishes = filteredData;
        fs.writeFileSync("./db.json", JSON.stringify(data))
        res.json({ message: "Task Deleted" })
    }
    //todo: req.params, res: data 
})

app.use((req, res) => {
    res.json({ error: "404 Not Found" })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
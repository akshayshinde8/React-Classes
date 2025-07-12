const fs = require("fs");
const os = require("os");
const express = require("express");
const readData = require("./read");
const app = express();
const dns = require("dns");
const { error } = require("console");
const PORT = 3000;

app.get("/test", (req, res) => {
    res.send("Test route is working");
})

app.get("/readFile", (req, res) => {
    res.send(readData())
})

app.get("/systemdetails", (req, res) => {
    const data = {
        systemPlatform: os.platform(),
        totalMemory: `${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`,
        freeMrmory: `${(os.freemem() / 1024 ** 3).toFixed(2)} GB`,
        cupModel: os.cpus()
    }
    res.send(data)
})

app.get("/getip", (req, res) => {
    dns.lookup("masaischool.com", (err, address) => {
        if (err) {
            return res.json({ error: "Failed to get IP address" })
        } else {
            res.json({
                hostname: "masaischool.com",
                ipaddress: address
            })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
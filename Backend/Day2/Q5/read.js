const fs = require("fs");

function readData() {
    return fs.readFileSync("Data.txt", "utf-8")
}

module.exports = readData;
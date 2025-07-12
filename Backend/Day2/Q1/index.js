// let { boxen } = require("boxen");
import boxen from "boxen";

let msg = "I am using my first external module!";
let title = "Hurray!!!";

console.log(boxen(msg, { padding: 1, borderStyle: "classic", title: title, titleAlignment: "center", backgroundColor: "blue" }));
console.log(boxen(msg, { padding: 1, borderStyle: "singleDouble", title: title, titleAlignment: "center", backgroundColor: "green" }));
console.log(boxen(msg, { padding: 1, borderStyle: "round", title: title, titleAlignment: "center", backgroundColor: "cyan" }));

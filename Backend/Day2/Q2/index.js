const chalk = require("chalk");

let msg1 = "Hello, World!";
let msg2 = "Learning Chalk is fun!";

console.log(chalk.blue(msg1));
console.log(chalk.yellow(msg2));

let msg3 = "Warning! Proceed with caution.";
let msg4 = "Error! Something went wrong.";
console.log(chalk.black.bgYellow(msg3));
console.log(chalk.white.bgRed(msg4));

console.log(chalk.green("Success: ") + chalk.white("Operation completed!"));
console.log(chalk.cyan("Loading... ") + chalk.magenta("Please wait"));

let error = chalk.red.bold;
let warning = chalk.yellow.bold;
let success = chalk.green.bold;

console.log(error("Error: Unable to connect to the server!"));
console.log(warning("Warning: Low disk space!"));
console.log(success("Success: Data saved successfully!"));
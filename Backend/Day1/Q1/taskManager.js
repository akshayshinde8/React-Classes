const app = require("readline");

const cmd = app.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];

console.log("Welcome to Terminal Task Manager!");
console.log("Available Commands:");
console.log("- add-task");
console.log("- list-tasks");
console.log("- complete-task");
console.log("- exit\n");

function promptCommand() {
  cmd.question("Enter command: ", function (command){
    switch (command.trim()) {
      case "add-task":
        addTask();
        break;
      case "list-tasks":
        listTasks();
        break;
      case "complete-task":
        completeTask();
        break;
      case "exit":
        cmd.close();
        break;
      default:
        console.log("❌ Invalid command. Try again.");
        promptCommand();
    }
  });
}

function addTask() {
  cmd.question("Enter task title: ", function (title) {
    if (!title.trim()) {
      console.log("❗ Title cannot be empty.");
      return promptCommand();
    }

    cmd.question("Enter due date (format, DD-MM-YYYY): ", function (dueDate) {
      if (!dueDate.trim()) {
        console.log("❗ Due date cannot be empty.");
        return promptCommand();
      }

      tasks.push({
        title,
        dueDate,
        status: "pending",
      });

      console.log(`✅ Task "${title}" added!\n`);
      promptCommand();
    });
  });
}

function listTasks() {
  if (tasks.length === 0) {
    console.log("No tasks found.\n");
  } else {
    console.log("\All Tasks:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. Title: ${task.title}, Due: ${task.dueDate}, Status: ${task.status}`
      );
    });
    console.log();
  }
  promptCommand();
}

function completeTask() {
  cmd.question("✔️ Enter task title to mark as completed: ", function (title) {
    const task = tasks.find((t) => t.title === title);
    if (task) {
      task.status = "completed";
      console.log(`Task "${title}" marked as completed!\n`);
    } else {
      console.log(`❌ Task "${title}" not found.\n`);
    }
    promptCommand();
  });
}

promptCommand();
cmd.on("close", function () {
  console.log("\nExiting Task Manager. Goodbye!");
  process.exit(0);
});

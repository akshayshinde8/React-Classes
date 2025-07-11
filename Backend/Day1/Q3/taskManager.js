const fs = require("fs");
const app = require("readline");

const cmd = app.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const TASKS_FILE = "tasks.json";
let tasks = [];
let userPreference = "all";

function loadTasks() {
  try {
    const data = fs.readFileSync(TASKS_FILE, "utf-8");
    tasks = JSON.parse(data);
  } catch (e) {
    tasks = [];
  }
}

function saveTasks() {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Validate DD-MM-YYYY format
function isValidDateFormat(date) {
  return /^\d{2}-\d{2}-\d{4}$/.test(date);
}

console.log("📌 Welcome to Terminal Task Manager!");
console.log("Available Commands:");
console.log("- add-task");
console.log("- list-tasks");
console.log("- complete-task");
console.log("- set-preference");
console.log("- exit\n");

loadTasks();
promptCommand();

function promptCommand() {
  cmd.question("Enter command: ", function (command) {
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
      case "set-preference":
        setPreference();
        break;
      case "exit":
        cmd.close();
        break;
      default:
        console.log("❌ Invalid command. Try again.\n");
        promptCommand();
    }
  });
}

function addTask() {
  cmd.question("Enter task title: ", function (title) {
    if (!title.trim()) {
      console.log("❗ Title cannot be empty.\n");
      return promptCommand();
    }

    cmd.question("Enter due date (DD-MM-YYYY): ", function (dueDate) {
      if (!isValidDateFormat(dueDate)) {
        console.log("❗ Invalid date format. Use DD-MM-YYYY.\n");
        return promptCommand();
      }

      tasks.push({ title, dueDate, status: "pending" });
      saveTasks();
      console.log(`Task "${title}" added!\n`);
      promptCommand();
    });
  });
}

function listTasks() {
  const filtered = tasks.filter((task) => {
    return (
      userPreference === "all" ||
      (userPreference === "completed" && task.status === "completed") ||
      (userPreference === "pending" && task.status === "pending")
    );
  });

  if (filtered.length === 0) {
    console.log("No tasks to display for this preference.\n");
  } else {
    console.log("\n Task List:");
    filtered.forEach((task, index) => {
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
      saveTasks();
      console.log(` Task "${title}" marked as completed!\n`);
    } else {
      console.log(`❌ Task "${title}" not found.\n`);
    }
    promptCommand();
  });
}

function setPreference() {
  cmd.question(" Enter preference (all/completed/pending): ", function (pref) {
    const validPrefs = ["all", "completed", "pending"];
    if (validPrefs.includes(pref.trim())) {
      userPreference = pref.trim();
      console.log(` Preference set to "${userPreference}".\n`);
    } else {
      console.log("❌ Invalid preference. Choose: all, completed, or pending.\n");
    }
    promptCommand();
  });
}

cmd.on("close", function () {
  console.log("\n Exiting Task Manager. Goodbye!");
  process.exit(0);
});

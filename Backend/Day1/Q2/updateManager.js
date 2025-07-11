const app = require("readline");

const cmd = app.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];

console.log("Welcome to Terminal Task Manager!");
showHelp();

function showHelp() {
  console.log("\n Available Commands:");
  console.log("- add-task         ➤ Add a new task");
  console.log("- list-tasks       ➤ List all tasks");
  console.log("- complete-task    ➤ Mark a task as completed");
  console.log("- update-task      ➤ Update a task's title or due date");
  console.log("- delete-task      ➤ Delete a task by title");
  console.log("- search-tasks     ➤ Search tasks by title or due date");
  console.log("- help             ➤ Show available commands");
  console.log("- exit             ➤ Exit the application\n");
}

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
      case "update-task":
        updateTask();
        break;
      case "delete-task":
        deleteTask();
        break;
      case "search-tasks":
        searchTasks();
        break;
      case "help":
        showHelp();
        promptCommand();
        break;
      case "exit":
        cmd.close();
        break;
      default:
        console.log("❌ Invalid command. Type 'help' to see available commands.\n");
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

    cmd.question("Enter due date (DD-MM-YYYY): ", function (dueDate) {
      if (!dueDate.trim()) {
        console.log("❗ Due date cannot be empty.");
        return promptCommand();
      }

      tasks.push({ title, dueDate, status: "pending" });
      console.log(`Task "${title}" added!\n`);
      promptCommand();
    });
  });
}

function listTasks() {
  if (tasks.length === 0) {
    console.log("📭 No tasks found.\n");
  } else {
    console.log("\n🗂️ All Tasks:");
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

function updateTask() {
  cmd.question("✏️ Enter task title to update: ", function (oldTitle) {
    const task = tasks.find((t) => t.title === oldTitle);
    if (!task) {
      console.log(`❌ Task "${oldTitle}" not found.\n`);
      return promptCommand();
    }

    cmd.question("Enter new title (press Enter to skip): ", function (newTitle) {
      cmd.question("Enter new due date (press Enter to skip): ", function (newDueDate) {
        if (newTitle.trim()) task.title = newTitle.trim();
        if (newDueDate.trim()) task.dueDate = newDueDate.trim();
        console.log("Task updated successfully!\n");
        promptCommand();
      });
    });
  });
}

function deleteTask() {
  cmd.question("🗑️ Enter task title to delete: ", function (title) {
    const index = tasks.findIndex((t) => t.title === title);
    if (index === -1) {
      console.log(`❌ Task "${title}" not found.\n`);
    } else {
      tasks.splice(index, 1);
      console.log(`Task "${title}" deleted successfully!\n`);
    }
    promptCommand();
  });
}

function searchTasks() {
  cmd.question("Search by keyword or date: ", function (query) {
    const results = tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.dueDate.includes(query)
    );

    if (results.length === 0) {
      console.log("❌ No matching tasks found.\n");
    } else {
      console.log("\n Matching Tasks:");
      results.forEach((task, index) => {
        console.log(
          `${index + 1}. Title: ${task.title}, Due: ${task.dueDate}, Status: ${task.status}`
        );
      });
      console.log();
    }
    promptCommand();
  });
}

cmd.on("close", function () {
  console.log("\nExiting Task Manager. Goodbye!");
  process.exit(0);
});

promptCommand();

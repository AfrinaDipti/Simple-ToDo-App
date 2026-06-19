const db = require("../config/db");
const readline = require("readline-sync");

async function addTask(userId) {

    const title =
        readline.question("Enter task title: ");

    if (!title.trim()) {
        console.log("\nTask title cannot be empty.");
        return;
    }

    const description =
        readline.question("Enter task description: ");

    const dueDate =
    readline.question("Enter due date (YYYY-MM-DD): ");

const dateRegex =
    /^\d{4}-\d{2}-\d{2}$/;

if (!dateRegex.test(dueDate)) {
    console.log("\nInvalid date format.");
    return;
}

    const priority =
        readline.question("Enter priority (Low/Medium/High): ");

    if (
        !["Low", "Medium", "High"].includes(priority)
    ) {
        console.log(
            "\nPriority must be Low, Medium, or High."
        );
        return;
    }

    await db.query(
        `INSERT INTO tasks
        (userId,title,description,dueDate,priority,status)
        VALUES(?,?,?,?,?,'Pending')`,
        [
            userId,
            title,
            description,
            dueDate,
            priority
        ]
    );

    console.log("\nTask added successfully!");
}

async function viewTasks(userId) {

    const [tasks] = await db.query(
        "SELECT * FROM tasks WHERE userId = ?",
        [userId]
    );

    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

    console.log("\nYour Tasks:\n");

    tasks.forEach(task => {

        console.log(`ID: ${task.id}`);
        console.log(`Title: ${task.title}`);
        console.log(
    `Due Date: ${task.dueDate.toLocaleDateString("en-CA")}`
);
        console.log(`Priority: ${task.priority}`);
        console.log(`Status: ${task.status}`);
        console.log("-------------------------");

    });
}

async function editTask(userId) {

    const taskId = readline.questionInt(
        "Enter task ID to edit: "
    );

    const [tasks] = await db.query(
        "SELECT * FROM tasks WHERE id=? AND userId=?",
        [taskId, userId]
    );

    if (tasks.length === 0) {
        console.log("\nTask not found.");
        return;
    }

    const task = tasks[0];

    console.log(`Current Title: ${task.title}`);
    const title =
        readline.question("Enter new title: ");

    console.log(
        `Current Description: ${task.description}`
    );
    const description =
        readline.question(
            "Enter new description: "
        );

    console.log(
        `Current Due Date: ${
            task.dueDate.toISOString().split("T")[0]
        }`
    );

    const dueDate =
        readline.question(
            "Enter new due date (YYYY-MM-DD): "
        );

    const dateRegex =
        /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(dueDate)) {
        console.log("\nInvalid date format.");
        return;
    }

    console.log(
        `Current Priority: ${task.priority}`
    );

    const priority =
        readline.question(
            "Enter new priority (Low/Medium/High): "
        );

    if (
        !["Low", "Medium", "High"].includes(priority)
    ) {
        console.log("Priority must be Low, Medium, or High.");
        return;
    }

    console.log(
        `Current Status: ${task.status}`
    );

    const status =
        readline.question(
            "Enter new status (Pending/Completed): "
        );

    if (
        !["Pending", "Completed"].includes(status)
    ) {
        console.log("Status must be Pending or Completed.");
        return;
    }

    await db.query(
        `UPDATE tasks
         SET title=?,
             description=?,
             dueDate=?,
             priority=?,
             status=?
         WHERE id=?`,
        [
            title,
            description,
            dueDate,
            priority,
            status,
            taskId
        ]
    );

    console.log("\nTask updated successfully!");
}

async function deleteTask(userId) {

    const taskId =
        readline.questionInt(
            "Enter task ID to delete: "
        );

    const [tasks] = await db.query(
        "SELECT * FROM tasks WHERE id=? AND userId=?",
        [taskId, userId]
    );

    if (tasks.length === 0) {
        console.log("\nTask not found.");
        return;
    }

    const confirm =
        readline.question(
            "\nAre you sure you want to delete this task? yes/no: "
        );

    if (confirm.toLowerCase() !== "yes") {
        console.log("\nDelete cancelled.");
        return;
    }

    await db.query(
        "DELETE FROM tasks WHERE id=?",
        [taskId]
    );

    console.log("\nTask deleted successfully!");
}

async function searchTasks(userId) {

    const keyword =
        readline.question(
            "Enter search keyword: "
        );

    const [tasks] = await db.query(
        `SELECT * FROM tasks
         WHERE userId=?
         AND (
            title LIKE ?
            OR description LIKE ?
         )`,
        [
            userId,
            `%${keyword}%`,
            `%${keyword}%`
        ]
    );

    if (tasks.length === 0) {
        console.log(
            "\nNo matching tasks found."
        );
        return;
    }

    console.log("\nSearch Result:\n");

    tasks.forEach(task => {

        console.log(`ID: ${task.id}`);
        console.log(`Title: ${task.title}`);
        console.log(
            `Due Date: ${
                task.dueDate.toISOString().split("T")[0]
            }`
        );
        console.log(`Priority: ${task.priority}`);
        console.log(`Status: ${task.status}`);
        console.log("-------------------------");

    });
}

module.exports = {
    addTask,
    viewTasks,
    editTask,
    deleteTask,
    searchTasks
};
const readline = require("readline-sync");

const {
    registerUser,
    loginUser
} = require("./services/userService");

const {
    addTask,
    viewTasks,
    editTask,
    deleteTask,
    searchTasks
} = require("./services/taskService");

async function todoMenu(user) {

    while (true) {
        console.log("\n-------------------------");
        console.log("Todo Menu");
        console.log("-------------------------\n");
        console.log("1. Add Task");
        console.log("2. View Tasks");
        console.log("3. Edit Task");
        console.log("4. Delete Task");
        console.log("5. Search Tasks");
        console.log("6. Logout");

        const choice =
            readline.question("\nEnter your choice: ");

        switch (choice) {

            case "1":
                await addTask(user.id);
                break;

            case "2":
                await viewTasks(user.id);
                break;  

            case "3": 
            await editTask(user.id);
            break;

            case "4":
                await deleteTask(user.id);
                break;

            case "5":
                await searchTasks(user.id);
                break;

            case "6":
                console.log("\nLogged out successfully!");
                return;

            default:
                console.log("\nInvalid choice");
        }
    }
}

async function mainMenu() {

    while (true) {
        console.log("\n-------------------------");
        console.log("Welcome to Todo App");
        console.log("-------------------------\n");
        console.log("1. Register");
        console.log("2. Login");
        console.log("3. Exit");

        const choice =
            readline.question("\nEnter your choice: ");

        switch (choice) {

            case "1":
                await registerUser();
                break;

            case "2":

                const user =
                    await loginUser();

                if (user) {

                    console.log(
                        `\nWelcome ${user.name}`
                    );

                    await todoMenu(user);
                }

                break;

            case "3":

                console.log("\nGoodbye!");
                process.exit();

            default:

                console.log("\nInvalid choice");
        }
    }
}

mainMenu();
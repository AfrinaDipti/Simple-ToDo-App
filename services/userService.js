const db = require("../config/db");
const bcrypt = require("bcrypt");
const readline = require("readline-sync");
const {
    isValidEmail,
    isValidPassword
} = require("../utils/validation");

async function registerUser() {

    const name = readline.question("Enter your name: ");

    if (!name.trim()) {
        console.log("\nName cannot be empty");
        return;
    }

    const email = readline.question("Enter your email: ");

    if (!isValidEmail(email)) {
        console.log("\nInvalid email format");
        return;
    }

    const password = readline.question("Enter password: ", {
        hideEchoBack: true
    });

    if (!isValidPassword(password)) {
        console.log("\nPassword must be at least 4 characters");
        return;
    }

    const [existing] =
        await db.query(
            "SELECT * FROM users WHERE email=?",
            [email]
        );

    if (existing.length > 0) {
        console.log("\nEmail already exists");
        return;
    }

    const hashed =
        await bcrypt.hash(password, 10);

    await db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [name, email, hashed]
    );

    console.log("\nRegistration successful!");
}

module.exports = {
    registerUser,
    loginUser
};

async function loginUser() {

    const email =
        readline.question("Enter your email: ");

    const password =
        readline.question("Enter password: ", {
            hideEchoBack: true
        });

    const [users] =
        await db.query(
            "SELECT * FROM users WHERE email=?",
            [email]
        );

    if (users.length === 0) {
        console.log("\nInvalid email or password.");
        return null;
    }

    const user = users[0];

    const matched =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!matched) {
        console.log("\nWrong credential");
        return null;
    }

    console.log("\nLogin successful!");

    return user;
}
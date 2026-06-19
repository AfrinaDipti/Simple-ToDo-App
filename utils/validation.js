const validator = require("validator");

function isValidEmail(email) {
    return validator.isEmail(email);
}

function isValidPassword(password) {
    return password.length >= 4;
}

function isValidPriority(priority) {
    return ["Low", "Medium", "High"].includes(priority);
}

module.exports = {
    isValidEmail,
    isValidPassword,
    isValidPriority
};
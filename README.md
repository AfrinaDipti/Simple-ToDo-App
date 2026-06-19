# Simple Console Based Todo App

## Overview

A console-based Todo Application built with Node.js and MySQL.

The application allows users to register, login, manage tasks, search tasks, edit tasks, delete tasks, and logout securely.

---

## Features

✅ User Registration

✅ User Login

✅ Password Hashing using bcrypt

✅ Add Task

✅ View Tasks

✅ Edit Task

✅ Delete Task

✅ Search Tasks

✅ Logout

---

## Technologies Used

* Node.js
* MySQL
* bcrypt
* dotenv
* mysql2
* readline-sync

---

## Database Schema

### Users Table

| Column   | Type    |
| -------- | ------- |
| id       | INT     |
| name     | VARCHAR |
| email    | VARCHAR |
| password | VARCHAR |

### Tasks Table

| Column      | Type      |
| ----------- | --------- |
| id          | INT       |
| userId      | INT       |
| title       | VARCHAR   |
| description | TEXT      |
| dueDate     | DATE      |
| priority    | ENUM      |
| status      | ENUM      |
| createdAt   | TIMESTAMP |
| updatedAt   | TIMESTAMP |

---

## Installation

```bash
npm install
```

Create .env file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todoapp
```

Run:

```bash
node app.js
```

---

## Video Demonstration

https://drive.google.com/file/d/1BK0nevAXjeosVDD5LH4Ekq9_-GVs6DGM/view?usp=sharing

---

## Author

Afrina Sultana

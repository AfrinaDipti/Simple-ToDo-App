# 📝 Simple Console-Based Todo App

A simple CRUD-based Todo Application built using **Node.js** and **MySQL**. This application allows users to register, log in securely, and manage their personal tasks through a console interface.

---

## 🎯 Assignment Information

**Batch No:** 18

**Topic:** Simple CRUD Project

---

## 🚀 Features

### 👤 User Management

* User Registration
* User Login Authentication
* Password Hashing using bcrypt
* Email Validation
* Duplicate Email Prevention

### ✅ Task Management

* Add New Task
* View All Tasks
* Edit Existing Task
* Delete Task
* Search Tasks by Title or Description
* Update Task Status (Pending / Completed)
* Logout

---

## 🛠️ Technologies Used

| Technology    | Purpose                |
| ------------- | ---------------------- |
| Node.js       | Application Runtime    |
| MySQL         | Database Management    |
| mysql2        | MySQL Connection       |
| bcrypt        | Password Hashing       |
| dotenv        | Environment Variables  |
| validator     | Email Validation       |
| readline-sync | Console Input Handling |

---

## 📂 Project Structure

```text
todo-app
│
├── config
│   └── db.js
│
├── services
│   ├── userService.js
│   └── taskService.js
│
├── utils
│   └── validation.js
│
├── .env.example
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## 🗄️ Database Design

### Users Table

| Column   | Type         |
| -------- | ------------ |
| id       | INT          |
| name     | VARCHAR(100) |
| email    | VARCHAR(150) |
| password | VARCHAR(255) |

### Tasks Table

| Column      | Type                     |
| ----------- | ------------------------ |
| id          | INT                      |
| userId      | INT                      |
| title       | VARCHAR(255)             |
| description | TEXT                     |
| dueDate     | DATE                     |
| priority    | ENUM(Low, Medium, High)  |
| status      | ENUM(Pending, Completed) |
| createdAt   | TIMESTAMP                |
| updatedAt   | TIMESTAMP                |

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=todoapp
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd todo-app
```

### Install Dependencies

```bash
npm install
```

### Configure Database

Create MySQL Database:

```sql
CREATE DATABASE todoapp;
```

Run the required SQL scripts to create:

* users table
* tasks table

### Run Application

```bash
node app.js
```

---

## 📋 Application Workflow

### Main Menu

```text
Welcome to Todo App

1. Register
2. Login
3. Exit
```

### Todo Menu

```text
Todo Menu

1. Add Task
2. View Tasks
3. Edit Task
4. Delete Task
5. Search Tasks
6. Logout
```

---

## ✅ Validation Implemented

### Registration

* Name cannot be empty
* Invalid email format validation
* Duplicate email prevention
* Password minimum length validation

### Login

* Invalid email handling
* Wrong password handling

### Task Management

* Empty title validation
* Invalid date format validation
* Invalid priority validation
* Invalid status validation
* Task not found validation
* Delete confirmation validation

---

## 🎥 Video Demonstration

🔗 **Video Link:**
https://drive.google.com/file/d/1ioKo2mPCDwihQOkswCnJFO4Hbm8iyGBl/view?usp=sharing

---

## 👩‍💻 Author

**Afrina Sultana**

---

## ⭐ Project Highlights

✔ Secure Authentication

✔ Password Encryption

✔ MySQL Database Integration

✔ Complete CRUD Operations

✔ Search Functionality

✔ Console-Based User Interface

✔ Input Validation

✔ Clean Project Structure

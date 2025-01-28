Task Manager Application
Overview
This is a full-stack task management application with a React frontend, Node.js backend, and a MySQL database. The application allows users to:

Register and login.
Create, view, edit, and delete tasks (CRUD operations).
Securely manage authentication using JWT.
Ensure all data is stored and fetched from a MySQL database.
Technologies Used
Frontend
React.js
Axios
React Router DOM
Backend
Node.js
Express.js
MySQL
Bcrypt.js (for password hashing)
JSON Web Tokens (JWT)
Database
MySQL
Features
Authentication:

Secure user registration and login using JWT.
Access to the task manager page is restricted to authenticated users.
Task Management:

Add, edit, delete, and view tasks.
Tasks are stored in a MySQL database.
Frontend:

Clean and minimal UI using inline styling.
Navigation between login and task management pages.
Backend:

RESTful API for authentication and task management.
Integrated with MySQL.
Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone <repository_url>
cd task-manager
2. Backend Setup
Navigate to the Backend Folder
bash
Copy
Edit
cd backend
Install Dependencies
bash
Copy
Edit
npm install
Set Up Environment Variables
Create a .env file in the backend directory.
Add the following variables:
env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
JWT_SECRET=your_jwt_secret
Start the Backend
bash
Copy
Edit
node index.js
3. Database Setup
Open your MySQL client.
Run the following SQL commands to create the database and tables:
sql
Copy
Edit
CREATE DATABASE task_manager;

USE task_manager;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
4. Frontend Setup
Navigate to the Frontend Folder
bash
Copy
Edit
cd frontend
Install Dependencies
bash
Copy
Edit
npm install
Start the Frontend
bash
Copy
Edit
npm start
Usage
1. Register a User
Open Postman.
Send a POST request to:
bash
Copy
Edit
http://localhost:5000/auth/register
Body:
json
Copy
Edit
{
    "email": "test@example.com",
    "password": "password123"
}
2. Login
Go to the frontend (http://localhost:3000).
Use the same credentials to log in.
3. Manage Tasks
After logging in, navigate to the Task Manager page.
Add, edit, or delete tasks.
API Endpoints
Authentication
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login user
Tasks
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Add a new task
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
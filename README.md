Task Manager Application
Overview
The Task Manager Application is a full-stack web application that allows users to manage their tasks securely. It consists of a React frontend, a Node.js backend, and a MySQL database. This app enables users to:

Register and log in securely.
Create, view, edit, and delete tasks (CRUD operations).
Ensure that all data is securely stored and fetched from a MySQL database.
Use JWT for authentication and authorization.
Technologies Used
Frontend
React.js: For building the user interface.
Axios: For making HTTP requests to the backend.
React Router DOM: For routing between pages (login and task management).
Backend
Node.js: For the backend runtime.
Express.js: For building the RESTful API.
MySQL: For storing user and task data.
Bcrypt.js: For password hashing and security.
JSON Web Tokens (JWT): For secure user authentication and token-based sessions.
Features
Authentication:
JWT-based Authentication: Secure user registration and login.
Access to the task management page is restricted to authenticated users only.
Task Management:
CRUD Operations: Users can add, edit, delete, and view tasks.
All tasks are stored in a MySQL database.
Frontend:
Clean and minimal user interface using inline styling.
Easy navigation between the login and task management pages.
Backend:
RESTful API to handle authentication and task management operations.
Integrated with MySQL for data storage.
Setup Instructions
1. Clone the Repository
To get started, clone the repository and navigate to the project folder:

bash
Copy
git clone <repository_url>
cd task-manager
2. Backend Setup
Navigate to the Backend Folder:
bash
Copy
cd backend
Install Dependencies:
bash
Copy
npm install
Set Up Environment Variables:
Create a .env file in the backend directory.
Add the following environment variables:
env
Copy
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
JWT_SECRET=your_jwt_secret
Start the Backend:
bash
Copy
node index.js
3. Database Setup
Open your MySQL client and run the following SQL commands to create the database and tables:
sql
Copy
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
Navigate to the Frontend Folder:
bash
Copy
cd frontend
Install Dependencies:
bash
Copy
npm install
Start the Frontend:
bash
Copy
npm start
The frontend will now be accessible at http://localhost:3000.

Usage
1. Register a User
Open Postman or any API testing tool.
Send a POST request to the following URL:
bash
Copy
http://localhost:5000/auth/register
In the request body, provide the user details:
json
Copy
{
    "email": "test@example.com",
    "password": "password123"
}
2. Login
Go to the frontend at http://localhost:3000.
Use the registered email and password to log in.
3. Manage Tasks
After logging in, navigate to the Task Manager page.
You can now add, edit, or delete tasks.
API Endpoints
Authentication
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login user
Tasks
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Add a new task
PUT	/tasks/:id	Update a specific task
DELETE	/tasks/:id	Delete a specific task
Contributing
Feel free to fork the repository and submit issues or pull requests. Any contributions are welcome!

License
This project is open-source and available under the MIT License.

This README provides a complete and clear explanation of your Task Manager Application, covering setup instructions, usage, and the API endpoints. It will help any developers or users get started with your project quickly.

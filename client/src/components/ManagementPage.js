import React, { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

const ManagementPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTask.trim()) {
      alert("Task name cannot be empty.");
      return;
    }
    try {
      const response = await createTask({ name: newTask });
      setTasks([...tasks, response.data]);
      setNewTask("");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const handleUpdateTask = async (id, updatedName) => {
    try {
      await updateTask(id, { name: updatedName });
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, name: updatedName } : task))
      );
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Management</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: "10px", width: "70%", marginRight: "10px" }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <input
              type="text"
              value={task.name}
              onChange={(e) => handleUpdateTask(task.id, e.target.value)}
              style={{ padding: "8px", marginRight: "10px", flex: 1 }}
            />
            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                padding: "8px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagementPage;

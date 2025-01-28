import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ManagementPage from "./components/ManagementPage";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/management"
          element={isAuthenticated ? <ManagementPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

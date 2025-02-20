import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProjectDashboard from "./pages/ProjectDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";
import BouwhubDashboard from "./pages/BouwhubDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/project"
          element={<ProtectedRoute element={<ProjectDashboard />} allowedRoles={["project"]} />}
        />
        <Route
          path="/dashboard/supplier"
          element={<ProtectedRoute element={<SupplierDashboard />} allowedRoles={["supplier"]} />}
        />
        <Route
          path="/dashboard/bouwhub"
          element={<ProtectedRoute element={<BouwhubDashboard />} allowedRoles={["bouwhub"]} />}
        />
        <Route
          path="/dashboard/admin"
          element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={["admin"]} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

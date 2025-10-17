import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Pages/Admin/AdminLayout";
import Dashboard from "../Pages/Admin/Dashboard";
import History from "../Pages/Admin/History";
import AdminInvestHistory from "../Pages/Admin/InvestHistory";
import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="history" element={<History />} />
        <Route path="invest-history" element={<AdminInvestHistory />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;


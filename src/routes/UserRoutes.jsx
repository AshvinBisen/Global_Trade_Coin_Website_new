import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../Pages/User/UserLayout";
import Dashboard from "../Pages/User/Dashboard";
import History from "../Pages/User/History";
import Stats from "../Pages/User/Stats";
import InvestHistory from "../Pages/User/InvestHistory"
import ProtectedRoute from "./ProtectedRoute";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <UserLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="history" element={<History />} />
        <Route path="invest-history" element={<InvestHistory />} />
        <Route path="stats" element={<Stats />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function adminRoute() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default adminRoute;

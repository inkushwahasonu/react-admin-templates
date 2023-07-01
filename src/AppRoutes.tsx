import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/home/dashboard/Dashboard";
import Login from "./pages/accounts/login/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default AppRoutes;

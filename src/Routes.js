import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/main";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import ForgotPassword from "./pages/Auth/Forgotpassword";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
export default routes;

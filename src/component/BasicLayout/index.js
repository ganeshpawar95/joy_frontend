import React from "react";
import HeaderComponents from "../HeaderComponents";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
import FooterComponents from "../FooterCompoments";

export default function BasicLayout() {
  return (
    <React.Fragment>
      <HeaderComponents />
      <Outlet />
      <FooterComponents />
    </React.Fragment>
  );
}

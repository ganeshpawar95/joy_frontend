import { lazy } from "react";
const PrivateRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../pages/auth/Login")),
    exact: true,
  },
  {
    path: "/registration",
    component: lazy(() => import("../pages/auth/Registration")),
    exact: true,
  },
];

export default PrivateRoutes;

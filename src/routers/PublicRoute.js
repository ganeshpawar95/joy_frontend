import { lazy } from "react";
const PublicRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../pages/auth/Login")),
    exact: true,
    childRouters: [],
  },
  {
    path: "/registration",
    component: lazy(() => import("../pages/auth/Registration")),
    exact: true,
    childRouters: [],
  },
  {
    path: "/",
    component: lazy(() => import("../pages/home/main")),
    exact: true,
    childRouters: [],
  },

  {
    path: "/product",
    component: lazy(() => import("../pages/products/main")),
    exact: true,
    childRouters: [],
  },

  {
    path: "/product/details",
    component: lazy(() => import("../pages/products/product_details")),
    exact: true,
    childRouters: [],
  },

  {
    path: "/checkout",
    component: lazy(() => import("../pages/checkout/Checkout")),
    exact: true,
    childRouters: [],
  },

  //   {
  //     path: "/registration-success",
  //     component: lazy(() => import("../pages/auth/RegistrationSuccess")),
  //     exact: true,
  //   },
  //   {
  //     path: "/otp",
  //     component: lazy(() => import("../pages/auth/Otp")),
  //     exact: true,
  //   },
  //   {
  //     path: "/forgot-password",
  //     component: lazy(() => import("../pages/auth/ForgotPassword")),
  //     exact: true,
  //   },
  //   {
  //     path: "/reset-link-send",
  //     component: lazy(() => import("../pages/auth/RsetLinkSend")),
  //     exact: true,
  //   },
  //   {
  //     path: "/password-reset",
  //     component: lazy(() => import("../pages/auth/ResetPassword")),
  //     exact: true,
  //   },
  //   {
  //     path: "/image-upload",
  //     component: lazy(() => import("../pages/auth/UserImageUpload")),
  //     exact: true,
  //   },

  //   {
  //     path: "/under-construction",
  //     component: lazy(() => import("../pages/Error/underConstruction")),
  //     exact: true,
  //   },
  //   {
  //     path: "/access-denied",
  //     component: lazy(() => import("../pages/Error/AccessDenied")),
  //     exact: true,
  //   },

  //   {
  //     path: "*",
  //     component: lazy(() => import("../pages/Error/404")),
  //     exact: true,
  //   },
];
export default PublicRoutes;

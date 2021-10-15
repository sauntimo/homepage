import loadable from "@loadable/component";
import { RouteConfig } from "react-router-config";
import { Layout } from "../Layout";

export const routes: RouteConfig[] = [
  {
    component: Layout,
    routes: [
      {
        path: "/",
        exact: true,
        component: loadable(() => import("../pages/home")),
      },
      {
        path: "/portfolio",
        exact: true,
        component: loadable(() => import("../pages/portfolio")),
      },
      {
        path: "/about",
        exact: true,
        component: loadable(() => import("../pages/about")),
      },
      {
        path: "/contact",
        exact: true,
        component: loadable(() => import("../pages/contact")),
      },
    ],
  },
];

export default routes;

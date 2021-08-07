import Dashboard from "./views/pages/dashboard/Dashboard";

const ssxRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "My Wallet",
    icon: "nc-icon nc-circle-09",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Enter a trade",
    icon: "nc-icon nc-notes",
    component: Dashboard,
    layout: "/admin",
  },
];

export default ssxRoutes;

import Dashboard from "./views/pages/dashboard/Dashboard";
import HeadlinePage from "./views/pages/others/Headlines";

const ssxRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/headlines",
    name: "Market headlines",
    icon: "nc-icon nc-circle-09",
    component: HeadlinePage,
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

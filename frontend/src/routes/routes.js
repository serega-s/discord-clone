import { lazy } from "react"

const routes = [
  {
    path: "",
    component: lazy(() => import("../pages/Home/Home")),
    exact: true,
  },
  {
    path: "createserver",
    component: lazy(() => import("../pages/Server/CreateServer")),
    exact: true,
  },
  {
    path: "explore",
    component: lazy(() => import("../pages/Server/ExploreServers")),
    exact: true,
  },
]

export default routes

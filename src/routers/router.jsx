import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import ScanPage from "../pages/scan/ScanPage";
import ListPage from "../pages/list/ListPage";
import AboutPage from "../pages/about/AboutPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ScanPage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;

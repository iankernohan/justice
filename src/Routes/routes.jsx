import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/HomePage/Home";
import Services from "../Components/ServicesPage/Services";
import Team from "../Components/TeamPage/Team";
import Contact from "../Components/ContactPage/Contact";
import PageNotFound from "../Components/UI/PageNotFound";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:unknown",
        element: <PageNotFound />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;

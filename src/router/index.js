import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import ProjectsPage from "../pages/projects-page";
import GalleryPage from "../pages/gallery-page";
import DonatePage from "../pages/donate-page";
import ProjectDetails from "../components/projects-page/project-details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,

      },
      {
        path: "about",
        element: <AboutPage />,
        
      },
      {
        path: "projects",
        element: <ProjectsPage />,
        children: [
          {
            index: true,
            element: <ProjectsPage />,
          },
          {
            path: ":id",
            element: <ProjectDetails />,
          }
        ],
      },
      {
        path: "gallery",
        element: <GalleryPage />,
        
      },
      {
        path: "contact",
        element: <ContactPage />,
        
      },
      {
        path: "donate",
        element: <DonatePage />,
        
      },


    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

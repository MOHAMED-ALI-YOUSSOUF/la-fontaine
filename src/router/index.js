import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import GalleryPage from "../pages/gallery-page";
import DonatePage from "../pages/donate-page";


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

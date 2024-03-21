import React, { useEffect } from "react";
import Topbar from "../components/common/topbar";
import Menubar from "../components/common/menubar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/common/footer";
import ScrollToTopButton from "../components/common/scroll-to-top-button";
// import ScrollToTopButton from "../components/common/scroll-to-top-button";

const UserLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.document.documentElement.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Topbar />
      <Menubar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />

      {/* <ScrollToTopButton/>  */}
    </>
  );
};

export default UserLayout;

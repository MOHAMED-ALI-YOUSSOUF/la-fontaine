import React from "react";
import Slider from "../components/home-page/slider";
import Spacer from "../components/common/spacer";
import History from "../components/home-page/history";
import Testimonials from "../components/home-page/testimonials";
import Teams from "../components/home-page/teams/teams";
import TeamProfile from "../components/home-page/teams/team-profile";
import Galeries from "../components/home-page/galeries";
import WeekMenu from "../components/home-page/week-menu/weekMenu";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Spacer />
      <History />
      <Spacer />
      <WeekMenu />
      <Spacer />
      <Testimonials />
      <Spacer />
      <Teams />
      <TeamProfile />
      <Spacer />
      <Galeries />
    </>
  );
};

export default HomePage;

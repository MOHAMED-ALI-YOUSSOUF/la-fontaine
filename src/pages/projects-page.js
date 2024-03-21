import React from "react";
import Spacer from "../components/common/spacer";

import PageHeader from "../components/common/page-header";
import ProjectHeader from "../components/projects-page/project-header";
import Projects from "../components/projects-page/projects";

const ProjectsPage = () => {
  return (
    <>
      <PageHeader title="Projects" />
      <Spacer height={50} />
      <ProjectHeader />
      <Spacer />
      <Projects />
      <Spacer />
    </>
  );
};

export default ProjectsPage;

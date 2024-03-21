import React from "react";
import Donate from "../components/donate-page.js/donate";
import PageHeader from "../components/common/page-header";
import Spacer from "../components/common/spacer";

const DonatePage = () => {
  return (
    <div>
      <PageHeader title="Donate" />
      <Donate />
      <Spacer /> 
    </div>
  );
};

export default DonatePage;

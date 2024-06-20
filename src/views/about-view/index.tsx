import React from "react";
import CompanyHistory from "./about-section/CompanyHistory";
import CompanyCulture from "./about-section/CompanyCulture";
import TeamPage from "./about-section/Team";

function AboutView() {
  return (
    <div>
      <CompanyHistory />
      <TeamPage />
      <CompanyCulture />
    </div>
  );
}

export default AboutView;

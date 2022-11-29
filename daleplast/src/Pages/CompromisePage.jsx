import React from "react";
import CompromiseContent from "../Components/CompromiseContent/CompromiseContent";
import CompromiseHero from "../Components/CompromiseHero/CompromiseHero";
import "../scss/CompromiseStyles.scss";

const CompromisePage = () => {
  return (
    <div className="Compromise">
      <CompromiseHero />
      <CompromiseContent />
    </div>
  );
};

export default CompromisePage;

import React from "react";
import Header from "./components/Header";
import "./App.css";
import Introduction from "./components/Introduction";
import { Container, MainArticle } from "./assets/styles";
import PolicyArchitecture from "./components/PolicyArchitecture";
import ImpactAnalysis from "./components/ImpactAnalysis";
import IndustryImpact from "./components/IndustryImpact";
// import FutureScenarios from "./components/FutureScenarios";
import Sources from "./components/Sources";

const App = () => {
  return (
    <Container>
      <Header />

      <MainArticle>
        <Introduction />
        {/* Section 2: Policy Architecture with Video */}
        <PolicyArchitecture />
        {/* Section 3: Policy Architecture with Video */}
        <ImpactAnalysis />
        {/* Section 4: Industry Impacts */}
        <IndustryImpact />
        {/* Section 5: Future Scenarios */}
        {/* <FutureScenarios /> */}
        <Sources />
      </MainArticle>
    </Container>
  );
};

export default App;

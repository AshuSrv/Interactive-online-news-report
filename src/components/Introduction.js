import React from "react";

import { videos } from "../assets/data";
import "../App.css";

import {
  IntroText,
  Byline,
  Section,
  MediaSection,
  VideoContainer,
  Caption,
  AnalysisGrid,
  AnalysisItem,
  ExpertQuote,
} from "../assets/styles";

const Introduction = () => {
  return (
    <div>
      {/* Section 1: Introduction with Video */}
      <Section>
        <h1>The 2025 Trump Tariffs: Global Economic Earthquake</h1>
        <Byline>By Ashutosh Shrivastava </Byline>
        <IntroText>
          In April 2025, President Donald Trump announced a series of tariffs
          aimed at addressing trade imbalances and protecting domestic
          industries. Effective April 5, a universal 10% tariff was imposed on
          all imports into the United States, with higher "reciprocal" tariffs
          ranging from 11% to 50% applied to specific countries based on
          existing trade deficits. Notably, Chinese goods faced an additional
          44% tariff, bringing the total to 54%. These measures were justified
          by the administration as necessary to counteract unfair trade
          practices by trading partners. ​
        </IntroText>

        <MediaSection>
          <VideoContainer>
            <iframe
              title={videos[0].title}
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${videos[0].embedId}`}
              allowFullScreen
            />
            <Caption>Source: {videos[0].source}</Caption>
          </VideoContainer>
        </MediaSection>

        <IntroText>
          The announcement led to immediate and significant global economic
          repercussions. China responded by imposing a 34% tariff on all U.S.
          imports, mirroring the U.S. action and escalating tensions between the
          two economic giants. Additionally, China implemented export controls
          on critical rare earth elements essential for high-tech industries and
          national defense, and suspended imports from certain U.S. poultry
          firms due to health concerns. The Chinese government criticized the
          U.S. actions as unilateral and in violation of World Trade
          Organization (WTO) rules, accusing the U.S. of destabilizing global
          economic conditions:
          <AnalysisGrid>
            <AnalysisItem>
              📉 More than $2.8T Market Value Wiped in 72 Hours
            </AnalysisItem>
            <AnalysisItem>
              ⚖️ 54% Combined Tariff Rate on Chinese Goods
            </AnalysisItem>
            <AnalysisItem>
              🌍 Analysts Warn of a 60% Chance of Global Recession
            </AnalysisItem>
          </AnalysisGrid>
          <ExpertQuote>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://attentiontotheunseen.com/2025/01/31/economists-agree-trumps-tariffs-will-be-very-bad-for-america-and-for-the-world/"
            >
              "Virtually all economists think that the impact of the tariffs
              will be very bad for America and for the world."
            </a>
            <cite>
              - Joseph Stiglitz, Nobel laureate and professor of economics at
              Columbia University
            </cite>
          </ExpertQuote>
          ​In light of President Donald Trump's recent tariff policies, a
          three-tier tariff structure has been implemented, targeting
          approximately $3.8 trillion in annual imports. This structure combines
          a universal 10% baseline tariff with additional country-specific
          surcharges. Economic analyses suggest that these measures could have
          the following impacts:
          <ul>
            <li>
              <strong>Reduction in Global GDP Growth:</strong> The{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.ainvest.com/news/imf-chief-economist-warns-of-potential-0-5-global-gdp-loss-by-2026-due-to-tariff-escalations-2410100084b56ddafee8f53f/"
              >
                International Monetary Fund (IMF)
              </a>{" "}
              estimates that increased tariffs and trade tensions could reduce
              global economic growth by 0.5% by 2026.
            </li>
            <li>
              <strong>Increase in U.S. Consumer Prices:</strong>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.spglobal.com/ratings/en/research/articles/250206-economic-research-how-might-trump-s-tariffs-if-fully-implemented-affect-u-s-growth-inflation-and-rates-13408802"
              >
                S&P Global
              </a>{" "}
              Ratings projects that the full implementation of these tariffs
              could lead to a one-time increase of approximately 0.66% in U.S.
              consumer prices
            </li>
            <li>
              <strong>
                Disruption of Critical Semiconductor Supply Chains:
              </strong>{" "}
              While specific percentages are not provided, the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.livemint.com/economy/us-tariffs-global-impact-oecd-economic-growth-forecast-us-tariffs-inflation-impact-global-trade-uncertainty-oecd-11742209161370.html"
              >
                OCED
              </a>{" "}
              warns that increased tariffs could significantly disrupt global
              supply chains, including those for semiconductors, thereby
              affecting industries reliant on these components.
            </li>
          </ul>
        </IntroText>
      </Section>
    </div>
  );
};

export default Introduction;

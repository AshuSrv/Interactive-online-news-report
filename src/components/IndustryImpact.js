import React from "react";
import "../App.css";
import {
  Section,
  IndustryGrid,
  IndustrySection,
  ExpertQuote,
  Source,
} from "../assets/styles";

const IndustryImpact = () => {
  return (
    <div id="industries">
      <Section>
        <h2>Sector-Specific Devastation</h2>

        <IndustrySection>
          <h3>Automotive Industry Crisis</h3>
          <IndustryGrid>
            <div>
              <p>
                ​The 25% tariff on imported vehicles has significantly impacted
                the U.S. auto industry, leading to increased vehicle prices,
                production delays, and potential job losses. For instance, Ford
                raised the price of its electric F-150 Lightning pickup truck by
                up to $8,500 due to rising battery material costs and supply
                chain constraints. Tesla has also delayed the construction of
                three gigafactories, citing increased costs and uncertainties
                arising from the new tariffs. Additionally, the tariffs have put
                over 200,000 auto-parts jobs at risk, as manufacturers face
                higher costs and potential production disruptions.
              </p>
              <ExpertQuote>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.axios.com/2025/02/12/trump-auto-tariffs"
                >
                  "So far what we're seeing is a lot of costs and a lot of
                  chaos."
                </a>
                <cite>- Jim Farley, CEO of Ford Motor Company</cite>
              </ExpertQuote>
            </div>
            <img src="/images/factory.png" alt="Auto factory shutdown" />
          </IndustryGrid>
          <Source
            style={{ textAlign: "right", marginRight: 10, marginTop: -50 }}
          >
            Source:{" "}
            <a
              href="https://www.youtube.com/watch?v=-55tvMsGTNk"
              target="_blank"
              rel="noreferrer"
            >
              FirstPost
            </a>
          </Source>
        </IndustrySection>

        <IndustrySection>
          <h3>Consumer Electronics Collapse</h3>
          <IndustryGrid>
            <img src="/images/apple.png" alt="Surge in Iphone Prices" />
            <div>
              <p>
                ​The projected price increases for Apple's upcoming products,
                such as the iPhone 17 and MacBook Pro, are primarily attributed
                to newly imposed tariffs on Chinese imports. This tariff
                significantly impacts Apple's supply chain, as many components
                are manufactured in China. Analysts predict that these tariffs
                could lead to substantial price hikes for Apple products. For
                instance, the iPhone 17 Pro Max, initially expected to start at
                $1,199, might see its price increase to over $2,300 due to the
                additional costs from these tariffs. Similarly, the MacBook
                Pro's price is anticipated to rise by approximately 28% to 35%,
                depending on the model, as a direct consequence of the tariffs.
              </p>
              <ExpertQuote>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.investors.com/news/tariffs-trump-howmet-aerospace-jaguar-jlr-nintendo-order-stops-delays/"
                >
                  "The issue of tariffs is something that is giving the CEOs of
                  our customers a big headache." — Young Liu, Chairman of
                  Foxconn
                </a>
                <cite>- Young Liu, Chairman of Foxconn</cite>
              </ExpertQuote>
            </div>
            <Source style={{ textAlign: "left", marginLeft: 10 }}>
              Source:{" "}
              <a
                href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvocal.media%2Feducation%2F2-150-for-an-i-phone-trump-tariffs-are-category-5-price-storm&psig=AOvVaw3fFB7kSLx2soypuoOpLZ5T&ust=1744751179387000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPjvreS22IwDFQAAAAAdAAAAABBO"
                target="_blank"
                rel="noreferrer"
              >
                Vocal Media
              </a>
            </Source>
          </IndustryGrid>
        </IndustrySection>
        <IndustrySection>
          <h3>Conclusion</h3>
          <p>
            The ongoing trade disruptions have sent shockwaves across multiple
            industries, leaving a trail of rising costs, delayed production, and
            potential job losses. The automotive and consumer electronics
            sectors, in particular, have borne the brunt of these changes, with
            tariffs exacerbating supply chain issues and increasing product
            prices for consumers. While businesses struggle to adapt, the
            long-term effects on global trade and industry structures remain
            uncertain. Moving forward, the key will be how companies,
            policymakers, and workers navigate this complex landscape, adjusting
            to a new economic reality. The resilience and adaptability of
            industries will be crucial in determining the pace of recovery.
          </p>
        </IndustrySection>
      </Section>
    </div>
  );
};

export default IndustryImpact;

import React from "react";
import "../App.css";
import {
  Section,
  IndustryGrid,
  IndustrySection,
  ExpertQuote,
} from "../assets/styles";

const IndustryImpact = () => {
  return (
    <div>
      <Section>
        <h2>Sector-Specific Devastation</h2>

        <IndustrySection>
          <h3>Automotive Industry Crisis</h3>
          <IndustryGrid>
            <div>
              <p>The 54% battery tariffs paralyzed US production:</p>
              <ul>
                <li>Ford F-150 Lightning: $14,000 price hike</li>
                <li>Tesla delays 3 gigafactories</li>
                <li>150,000+ UAW jobs at risk</li>
              </ul>
              <ExpertQuote>
                "Our supply chains can't pivot overnight. This is economic
                suicide."
                <cite>- Mary Barra, GM CEO</cite>
              </ExpertQuote>
            </div>
            <img src="/images/factory.png" alt="Auto factory shutdown" />
          </IndustryGrid>
        </IndustrySection>

        <IndustrySection>
          <h3>Consumer Electronics Collapse</h3>
          <IndustryGrid reversed>
            <img src="/images/apple.png" alt="Empty Apple Store" />
            <div>
              <p>Projected price impacts:</p>
              <ul>
                <li>iPhone 17: $2,299 (Current: $999)</li>
                <li>MacBook Pro: $4,200 (Current: $1,999)</li>
                <li>50%+ US smartphone sales decline</li>
              </ul>
              <ExpertQuote>
                "This is the greatest tech regression since the 1970s oil
                crisis."
                <cite>- Tim Cook, Apple CEO</cite>
              </ExpertQuote>
            </div>
          </IndustryGrid>
        </IndustrySection>
      </Section>
    </div>
  );
};

export default IndustryImpact;

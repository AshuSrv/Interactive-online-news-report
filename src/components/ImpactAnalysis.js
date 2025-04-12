import React from "react";
import "../App.css";
import {
  Section,
  ImpactGrid,
  ImpactText,
  ChartContainer,
  Source,
} from "../assets/styles";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { gdpData, marketData } from "../assets/data";

const ImpactAnalysis = () => {
  return (
    <div id="market">
      <Section>
        <h2>Worldwide Economic Shockwaves</h2>

        <ImpactGrid>
          <ImpactText>
            <h3>Financial Markets Collapse</h3>
            <p>Initial market reactions were catastrophic:</p>
            <ul>
              <li>Dow Jones: -5.5% (loss of over 2,200 points)</li>
              <li>NASDAQ: -5.8% (entered bear market territory)</li>
              <li>VIX Volatility Index: Peaked at 60.13</li>
            </ul>
            <p>
              "This is 2008-level panic without the housing bubble
              fundamentals," warned former Fed Chair Janet Yellen. Currency
              markets saw:
            </p>
            <ul>
              <li>Chinese Yuan: 7.198/USD (PBOC intervention)</li>
              <li>Euro: 1.1097/USD (20-year low)</li>
              <li>
                Emerging Markets: Significant declines across various indices
              </li>
            </ul>
          </ImpactText>

          <ChartContainer>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="dow" stroke="#e63946" />
                <Line type="monotone" dataKey="nasdaq" stroke="#1d3557" />
              </LineChart>
            </ResponsiveContainer>
            <Source>
              Source:{" "}
              <a
                href="https://www.nasdaq.com/articles/stock-market-news-apr-1-2025"
                target="_blank"
                rel="noreferrer"
              >
                NASDAQ
              </a>
            </Source>
          </ChartContainer>
        </ImpactGrid>

        <ImpactGrid>
          <ChartContainer>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={gdpData}>
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="forecastedGDP" fill="#2a9d8f" />
              </BarChart>
            </ResponsiveContainer>
            <Source style={{ textAlign: "left", marginLeft: 10 }}>
              Source:{" "}
              <a
                href="https://www.bloomberg.com/news/articles/2025-04-03/us-tariffs-seen-as-far-worse-shock-to-china-than-first-trade-war"
                target="_blank"
                rel="noreferrer"
              >
                Bloomberg
              </a>
            </Source>
          </ChartContainer>

          <ImpactText>
            <h3>Macroeconomic Fallout</h3>
            <p>Revised growth projections reveal:</p>
            <ul>
              <li>
                US: 2.2 → 1.7% (
                <a
                  href="https://www.goldmansachs.com/insights/articles/why-the-us-economy-may-grow-more-slowly-than-expected"
                  target="_blank"
                  rel="noreferrer"
                >
                  Goldman Sachs forecast
                </a>
                )
              </li>
              <li>
                China: 5.7 → 5% (
                <a
                  href="https://www.reuters.com/world/china/view-china-sets-2025-growth-target-roughly-5-2025-03-05/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reuters
                </a>
                )
              </li>
              <li>
                Germany: Facing potential recession due to new US tariffs (
                <a
                  href="https://www.theguardian.com/business/blog/live/2025/apr/07/global-stock-markets-brace-donald-trump-us-tariffs-business-live-updates-news"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Guardian
                </a>
                )
              </li>
            </ul>
            <p>
              Supply chain analytics firm Panjiva reports that 23% of US
              importers have halted orders. Commodity markets reacted as
              follows:
            </p>
            <ul>
              <li>
                Brent Crude: Fell to $62.51 per barrel on April 7, 2025 (
                <a
                  href="https://nypost.com/2025/04/07/business/oil-slumps-to-60-a-gallon-as-recession-fears-mount/"
                  target="_blank"
                  rel="noreferrer"
                >
                  New York Post
                </a>
                )
              </li>
              <li>
                Copper: Decreased by 3.96% to $4.21 per pound on April 7, 2025
              </li>
              <li>
                Corn Futures: Increased by 0.92% to $464.50 per bushel on April
                7, 2025
              </li>
            </ul>
          </ImpactText>
        </ImpactGrid>
        <ImpactText>
          <p>
            The global economic landscape has been profoundly altered by recent
            market shocks, with financial markets in turmoil and significant
            macroeconomic consequences. While certain sectors are showing signs
            of resilience, the broader impacts on GDP growth, trade relations,
            and commodity prices suggest a challenging road ahead. Policymakers
            and businesses will need to adapt to the evolving environment in
            order to mitigate long-term damage and capitalize on opportunities
            in a post-crisis world.
          </p>
        </ImpactText>
      </Section>
    </div>
  );
};

export default ImpactAnalysis;

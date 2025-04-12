import React from "react";
import {
  Caption,
  ChartContainer,
  KeyPoints,
  MediaSection,
  PolicyGrid,
  Section,
  Source,
  VideoContainer,
} from "../assets/styles";
import { tradeData, videos } from "../assets/data";
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  Cell,
  Legend,
  XAxis,
  Bar,
} from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const PolicyArchitecture = () => {
  return (
    <div id="analysis">
      <Section>
        <h2>Tariff Structure & Legal Basis</h2>
        <PolicyGrid>
          {/* Left Column */}
          <div>
            <h3>Three-Tiered Implementation</h3>
            <p>The policy employs sophisticated economic targeting:</p>
            <ul>
              <li>
                <strong>Universal Baseline (10%):</strong> The policy imposes a
                10% tariff on all imports, excluding pharmaceuticals and rare
                earth minerals.This measure affects approximately $3.8 trillion
                in annual goods trade.​
              </li>
              <li>
                <strong>Reciprocal Surcharges (11-50%):</strong> Surcharges are
                determined based on trade balances from 2024. China faces a
                maximum surcharge of 34% in addition to the baseline tariff,
                resulting in a combined tariff rate of 54% on Chinese imports.​
              </li>
              <li>
                <strong>Strategic Penalties (25%):</strong> The policy imposes
                25% tariffs on semiconductors, electric vehicles (EVs), and
                renewable energy components. These measures impact approximately
                $470 billion in high-tech imports.​
              </li>
            </ul>
            <MediaSection>
              <VideoContainer>
                <iframe
                  title={videos[1].title}
                  width="100%"
                  height="450"
                  src={`https://www.youtube.com/embed/${videos[1].embedId}`}
                  allowFullScreen
                />
                <Caption>Source: {videos[1].source}</Caption>
              </VideoContainer>
            </MediaSection>
            <h3>Legal Framework</h3>
            <p>
              The policy leverages the 1977{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://sgp.fas.org/crs/natsec/R45618.pdf"
              >
                International Emergency Economic Powers Act (IEEPA)
              </a>
              , marking its first use for broad trade measures rather than
              direct national security threats.
            </p>
            <div>
              <p>
                <strong>Key provisions:</strong>
              </p>

              <p>
                <span className="subheading">
                  Presidential authority during "unusual and extraordinary
                  threats":
                </span>
                IEEPA grants the President authority to declare a national
                emergency in response to unusual and extraordinary threats from
                outside the United States, enabling regulation of international
                economic transactions.
              </p>

              <p>
                <span className="subheading">
                  Bypasses Congressional approval requirements:
                </span>
                While the President can act without immediate Congressional
                approval during such emergencies, Congress retains the power to
                terminate the national emergency through a joint resolution.
              </p>

              <p>
                <span className="subheading">
                  30-day Congressional notification mandate:
                </span>
                The President must inform Congress within 30 days of exercising
                emergency powers under IEEPA.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={tradeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis
                    label={{
                      value: "Tariff Rate (%)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    formatter={(value, name, { payload }) => {
                      const countryData = tradeData.find(
                        (data) => data.country === payload.country
                      );
                      return `
                          ${value}
                          Trade Deficit: $${countryData?.deficit} Billion`;
                    }}
                  />
                  <Legend />
                  <Bar dataKey="tariff" name="Tariff Rate (%)">
                    {tradeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <Source>
                Data sourced from:
                <ul style={{ listStyle: "none" }}>
                  <li>
                    U.S. Trade Deficit Data:{" "}
                    <a
                      href="https://worldpopulationreview.com/country-rankings/us-trade-deficit-by-country"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Population Review (2024)
                    </a>
                  </li>
                  <li>
                    U.S. Tariff Rates:{" "}
                    <a
                      href="https://www.whitehouse.gov/wp-content/uploads/2025/04/Annex-I.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      White House Annex I (April 2025)
                    </a>
                  </li>
                </ul>
              </Source>
            </ChartContainer>

            <KeyPoints>
              <h4>Critical Tariff Impacts Analysis</h4>
              <ul>
                <li>
                  <strong>China's Disproportionate Burden (58%)</strong> The
                  cumulative tariff rate of 54% on Chinese imports, affecting
                  approximately $450 billion in annual trade. These tariffs
                  predominantly target sectors such as electronics, toys, steel,
                  machinery, and footwear. ​ These measures are part of the U.S.
                  administration's strategy to address trade imbalances and are
                  expected to have significant implications for the specified
                  sectors.​
                </li>

                <li>
                  <strong>EU's Agricultural Countermeasures</strong> In
                  retaliation to U.S. tariffs on steel and aluminum, the
                  European Union has proposed countermeasures targeting up to
                  $28 billion in U.S. imports. These retaliatory tariffs would
                  affect various American products, including meat, wine,
                  clothing, and household items. Notably, bourbon whiskey is
                  among the products that could face significant tariffs, with
                  proposals suggesting a 50% surcharge.
                </li>

                <li>
                  <strong>ASEAN's Strategic Dilemma (22% Surcharge)</strong> The
                  tariffs ranging from 10% to 49% depending on the nation.
                  Vietnam faces a 46% tariff, potentially affecting $37.5
                  billion in exports, about 2% of its GDP. These tariffs are
                  expected to disrupt trade, particularly in sectors like
                  electronics, apparel, and footwear, leading to increased
                  consumer prices in the U.S. Southeast Asian economies, already
                  vulnerable due to trade surpluses with the U.S., may
                  experience slowed growth, with potential reductions of up to 2
                  percentage points by 2026-2027.
                </li>
              </ul>
            </KeyPoints>
          </div>
        </PolicyGrid>
      </Section>
    </div>
  );
};

export default PolicyArchitecture;

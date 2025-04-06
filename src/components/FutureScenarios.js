import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { FiExternalLink } from "react-icons/fi";
import { scenarioData } from "../assets/data";
import "../App.css";
import {
  Section,
  ChartContainer,
  Source,
  SourceLink,
  ScenarioContainer,
  ScenarioCard,
} from "../assets/styles";

const FutureScenarios = () => {
  return (
    <div>
      <Section>
        <h2>2026-2030 Projections</h2>

        <ScenarioContainer>
          <ScenarioCard>
            <h3>Optimistic Scenario</h3>
            <ul>
              <li>Partial tariff rollback by 2026</li>
              <li>2.4% global GDP growth by 2028</li>
              <li>Limited supply chain reshoring</li>
            </ul>
            <SourceLink href="#">
              IMF Scenario 4A <FiExternalLink />
            </SourceLink>
          </ScenarioCard>

          <ScenarioCard>
            <h3>Pessimistic Scenario</h3>
            <ul>
              <li>Full US-China decoupling</li>
              <li>-3.2% global GDP by 2027</li>
              <li>$14T economic output loss</li>
            </ul>
            <SourceLink href="#">
              World Bank Report <FiExternalLink />
            </SourceLink>
          </ScenarioCard>
        </ScenarioContainer>

        <ChartContainer>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={scenarioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="optimistic"
                stroke="#2a9d8f"
                name="Optimistic"
              />
              <Line
                type="monotone"
                dataKey="pessimistic"
                stroke="#e63946"
                name="Pessimistic"
              />
            </LineChart>
          </ResponsiveContainer>
          <Source>IMF Long-Term Projections</Source>
        </ChartContainer>
      </Section>
    </div>
  );
};

export default FutureScenarios;

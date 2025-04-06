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
    <div>
      <Section>
        <h2>Worldwide Economic Shockwaves</h2>

        <ImpactGrid>
          <ImpactText>
            <h3>Financial Markets Collapse</h3>
            <p>Initial market reactions were catastrophic:</p>
            <ul>
              <li>Dow Jones: -4.2% ($1.2T loss)</li>
              <li>NASDAQ: -6.1% (Worst since March 2020)</li>
              <li>VIX Volatility Index: Peaked at 82</li>
            </ul>
            <p>
              "This is 2008-level panic without the housing bubble
              fundamentals," warned former Fed Chair Janet Yellen. Currency
              markets saw:
            </p>
            <ul>
              <li>Chinese Yuan: 7.85/USD (PBOC intervention)</li>
              <li>Euro: 1.02/USD (20-year low)</li>
              <li>Emerging Markets: 4.7% average decline</li>
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
            <Source>NYSE/NASDAQ Real-Time Data</Source>
          </ChartContainer>
        </ImpactGrid>

        <ImpactGrid>
          <ChartContainer>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={gdpData}>
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="gdpChange" fill="#2a9d8f" />
              </BarChart>
            </ResponsiveContainer>
            <Source>IMF 2025 Revisions</Source>
          </ChartContainer>

          <ImpactText>
            <h3>Macroeconomic Fallout</h3>
            <p>Revised growth projections reveal:</p>
            <ul>
              <li>US: 1.2% → -0.4%</li>
              <li>China: 4.8% → 2.1%</li>
              <li>Germany: Enters recession at -1.3%</li>
            </ul>
            <p>
              Supply chain analytics firm Panjiva reports 23% of US importers
              halted orders. Commodity markets reacted violently:
            </p>
            <ul>
              <li>Brent Crude: -9% to $68</li>
              <li>Copper: -12%</li>
              <li>Corn Futures: +18%</li>
            </ul>
          </ImpactText>
        </ImpactGrid>
      </Section>
    </div>
  );
};

export default ImpactAnalysis;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const TradeChart = ({ data }) => (
  <LineChart width={800} height={400} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="dow" stroke="#8884d8" name="Dow Jones" />
    <Line type="monotone" dataKey="sp500" stroke="#82ca9d" name="S&P 500" />
    <Line type="monotone" dataKey="nasdaq" stroke="#ffc658" name="NASDAQ" />
  </LineChart>
);

export default TradeChart; // Crucial export statement

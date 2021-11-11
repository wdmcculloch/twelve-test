import React from "react";
import {
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  linearGradient,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  defs,
  stop
} from "recharts";
import styles from "./AreaChartMain.module.css";

const AreaChartMain = ({ graphData }) => {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width={"100%"}>
        <AreaChart
          data={graphData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="year">
            <Label value="YEARS" position="insideBottom" offset={5} dy={25} />
          </XAxis>
          <YAxis interval="preserveStartEnd" angle={-10}>
            <Label value="MtCO2e" angle={-90} dx={-23} dy={-50} />
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend height={"3vh"} />
          <Area dataKey="value" type="monotone" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartMain;

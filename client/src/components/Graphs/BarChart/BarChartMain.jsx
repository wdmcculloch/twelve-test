import React from "react";
import {
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
} from "recharts";
import styles from "./BarChartMain.module.css";

const BarChartMain = ({ graphData }) => {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width={"100%"}>
        <BarChart
          data={graphData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >

          <XAxis dataKey="year">
            <Label value="YEARS" position="insideBottom" offset={5} dy={25} />
          </XAxis>
          <YAxis interval="preserveStartEnd" angle={-10}>
            <Label value="MtCO2e" angle={-90} dx={-23} dy={-50} />
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend height={"3vh"} />
         <Bar dataKey="value" fill="#82ca9d"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartMain;

import React from "react";
import {
  ResponsiveContainer,
  Legend,
  ScatterChart,
  Scatter,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Label,
} from "recharts";
import styles from "../AllGraph.module.css";

const ScatterChartMain = ({ graphData }) => {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width={"100%"}>
        <ScatterChart
          data={graphData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <XAxis dataKey="year" name="year">
            <Label value="YEARS" position="insideBottom" offset={5} dy={25} />
          </XAxis>
          <YAxis interval="preserveStartEnd" angle={-10} dataKey="value" >
            <Label value="MtCO2e" angle={-90} dx={-23} dy={-50} />
          </YAxis>
          <ZAxis dataKey="value" range={[64, 244]} name="weight"/>
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip/>
          <Legend height={"3vh"} />
         <Scatter name="emissions" data={graphData} fill="#82ca9d"/>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartMain;

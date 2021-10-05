import React from "react";
import {
  ResponsiveContainer,
  Legend,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
} from "recharts";
import styles from "./LineChartMain.module.css";

const LineChartMain = ({ graphData }) => {
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width={'100%'} >
        <LineChart
          data={graphData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" >
            <Label value="YEARS" position='insideBottom' offset={5} dy={25}/>
          </XAxis>
          <YAxis interval='preserveStartEnd' angle={-10}>
            <Label value="MtCO2e" angle={-90} dx={-23} dy={-50}/>
          </YAxis>
          <Tooltip label="hi"/>
          <Legend  height={'3vh'}/>
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartMain;

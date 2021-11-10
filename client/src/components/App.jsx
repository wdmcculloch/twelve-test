import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import MenuMain from "./Menu/MenuMain.jsx";
import LineChartMain from "./Graphs/LineChartMain.jsx";

const generateRange = (start, end) => {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const App = () => {
  const [gas, setGas] = useState("All GHG");
  const [sector, setSector] = useState("Total including LUCF");
  const [start, setStart] = useState(1990);
  const [end, setEnd] = useState(2018);
  const [range, setRange] = useState(generateRange(start, end));
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3000/data", {
      params: {
        gas: gas,
        sector: sector,
        start: start,
        end: end,
        range: range,
      },
    })
    .then((res) => {
      setGraphData(res.data);
    })
    .catch((err) => console.error(err));
  }, [gas, sector, start, end]);

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let id = e.target.id;

    if (id === "start") {
      setStart(value);
    } else if (id === "end") {
      setEnd(value);
    } else if (id === "gas") {
      setGas(value);
    } else if (id === "sector") {
      setSector(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3000/data", {
        params: {
          gas: gas,
          sector: sector,
          start: start,
          end: end,
          range: range,
        },
      })
      .then((res) => {
        setGraphData(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div id="title-container">
        <h1>US Historic Emissions</h1>
      </div>
      <MenuMain
        gas={gas}
        sector={sector}
        start={start}
        end={end}
        range={range}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {graphData.length === 0 ? <p>{`No data for ${gas} emission data from the ${sector} sector`}</p> : <LineChartMain graphData={graphData} />}

    </div>
  );
};

export default App;

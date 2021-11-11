import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import serverConfig from "../../../config/serverConfig.js";
import MenuMain from "./Menu/MenuMain/MenuMain.jsx";
import LineChartMain from "./Graphs/LineChartMain/LineChartMain.jsx";
console.log(serverConfig)
const generateRange = (start, end) => {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const initialGraphData = [
  {
      "year": "1990",
      "value": 5543.47
  },
  {
      "year": "1991",
      "value": 5501.92
  },
  {
      "year": "1992",
      "value": 5583.8
  },
  {
      "year": "1993",
      "value": 5691.26
  },
  {
      "year": "1994",
      "value": 5782.2
  },
  {
      "year": "1995",
      "value": 5843.9
  },
  {
      "year": "1996",
      "value": 6010.62
  },
  {
      "year": "1997",
      "value": 6258.47
  },
  {
      "year": "1998",
      "value": 6293.8
  },
  {
      "year": "1999",
      "value": 6291.25
  },
  {
      "year": "2000",
      "value": 6446.2
  },
  {
      "year": "2001",
      "value": 6406.04
  },
  {
      "year": "2002",
      "value": 6246.95
  },
  {
      "year": "2003",
      "value": 6306.12
  },
  {
      "year": "2004",
      "value": 6387.22
  },
  {
      "year": "2005",
      "value": 6401.12
  },
  {
      "year": "2006",
      "value": 6306.81
  },
  {
      "year": "2007",
      "value": 6397.67
  },
  {
      "year": "2008",
      "value": 6220.21
  },
  {
      "year": "2009",
      "value": 5793.66
  },
  {
      "year": "2010",
      "value": 6041.59
  },
  {
      "year": "2011",
      "value": 5796.78
  },
  {
      "year": "2012",
      "value": 5550.87
  },
  {
      "year": "2013",
      "value": 5690.79
  },
  {
      "year": "2014",
      "value": 5711.15
  },
  {
      "year": "2015",
      "value": 5586.69
  },
  {
      "year": "2016",
      "value": 5676.92
  },
  {
      "year": "2017",
      "value": 5613.64
  },
  {
      "year": "2018",
      "value": 5794.35
  }
]

const App = () => {
  const [gas, setGas] = useState("All GHG");
  const [sector, setSector] = useState("Total including LUCF");
  const [start, setStart] = useState(1990);
  const [end, setEnd] = useState(2018);
  const [range, setRange] = useState(generateRange(start, end));
  const [graphData, setGraphData] = useState(initialGraphData);

  useEffect(() => {
    axios
      .get(`${serverConfig.url}/data`, {
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
      />
      {graphData.length === 0 ? (
        <p>{`No data for ${gas} emission data from the ${sector} sector`}</p>
      ) : (
        <LineChartMain graphData={graphData} />
      )}
    </div>
  );
};

export default App;

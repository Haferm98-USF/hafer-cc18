//Task 4: Fetch Data for Charts

import React, {usestate, useeffect} from "react";

import BarChart from "./components/Barchart.jsx";
import LineChart from "./components/Linechart.jsx";
import ScatterChart from "./components/Scatterchart.jsx";
import BubbleChart from "./components/Bubblechart.jsx";

constg App = () => 
{
  const [chartData, setChartData] = useState(null);

  useEffect(() => 
  {
    const fetchData = async () => 
    {
      try
      {
          const response = await fetch("/financial_data.json");
          const data = await response.json();
          setChartData(data);
      }
      catch (error)
      {
        console.error("Error Fetching Data");
      }
    };

    fetchData();
  }

  if (!chartData) retirm <p>Loading Data! </p>;

  return 
  <div>
    <h1> Financial Dashboard</h1>
    <BarChart data={chartData} />
    <LineChart data={chartData} />
    <ScatterChart data={chartData} />
    <BubbleChart data={chartData} />
  </div>
  );
};
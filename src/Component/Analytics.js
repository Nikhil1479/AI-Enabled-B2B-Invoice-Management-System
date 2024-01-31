import React, { useState } from "react";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Analytics = () => {
  const [distributionChannel, setDistributionChannel] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [barChartOptions, setBarChartOptions] = useState(null);
  const [pieChartOptions, setPieChartOptions] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://3.209.124.86:8080/milestone3/data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const generateBarChartData = (data) => {
    const filteredData = data.filter(
      (item) => item.distributionChannel === distributionChannel
    );

    const totals = {};
    filteredData.forEach((item) => {
      if (totals[item.distributionChannel]) {
        totals[item.distributionChannel] += item.orderAmount;
      } else {
        totals[item.distributionChannel] = item.orderAmount;
      }
    });

    const barChartData = Object.entries(totals).map(([name, y]) => ({
      name,
      y,
    }));

    const options = {
      chart: {
        type: "column",
        width: 600,

      },
      title: {
        text: "Bar Chart",
      },
      xAxis: {
        type: "category",
        title: {
          text: "Distribution Channel",
        },
      },
      yAxis: {
        title: {
          text: "Total Order Amount",
        },
      },
      series: [
        {
          name: "Total Order Amount",
          data: barChartData,
        },
      ],
    };

    setBarChartOptions(options);
  };

  const generatePieChartData = (data) => {
    const filteredData = data.filter(
      (item) => item.distributionChannel === distributionChannel
    );

    const pieChartData = filteredData.map((item) => ({
      name: item.customerNumber,
      y: 1,
    }));

    const options = {
      chart: {
        type: "pie",
        width: 600,
      },
      title: {
        text: "Pie Chart",
        color: "white"
      },
      series: [
        {
          name: "Customer Number",
          data: pieChartData,
        },
      ],
    };

    setPieChartOptions(options);
  };

  const handleViewClick = async () => {
    const data = await fetchData();
    generateBarChartData(data);
    generatePieChartData(data);
  };

  return (
    <div>
      <h2>Analytics View</h2>

      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 50%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>
              <TextField
                InputProps={{
                  style: { color: "white" }
                }}
                style={{ color: "white" }}
                label="Distribution Channel"
                value={distributionChannel}
                onChange={(e) => setDistributionChannel(e.target.value)}
              />
            </div>

            <div>
              <TextField
                InputProps={{
                  style: { color: "white" }
                }}
                label="Customer Number"
                value={customerNumber}
                onChange={(e) => setCustomerNumber(e.target.value)}
              />

            </div>

          </div>
          <Button variant="contained" color="primary" onClick={handleViewClick} style={{ display: "block", marginTop: '30px', backgroundColor: "#fc7500" }}>
            View
          </Button>
        </div>

        <div>

        </div>

        <div style={{ flex: "0 0 50%", textAlign: "right" }}>
          {barChartOptions && (
            <div>
              <h3>Bar Chart</h3>
              <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
            </div>
          )}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: "50%" }}>

          {pieChartOptions && (
            <div style={{ textAlign: "right" }}>
              <h3>Pie Chart</h3>
              <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
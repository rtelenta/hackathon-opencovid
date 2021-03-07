import { Heading } from "@chakra-ui/react";
import Card from "components/Card";
import React from "react";
import * as charts from "@reactchartjs/react-chart.js";

const data = (canvas: any) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 150, 0, 0);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  gradient.addColorStop(1, "rgba(72, 187, 120, 0.3)");

  return {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Vacunados",
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: gradient,
        pointRadius: 3,
        borderColor: "rgb(72, 187, 120)",
        pointBorderColor: "rgb(72, 187, 120)",
        pointBackgroundColor: "rgb(72, 187, 120)",
        pointHoverBackgroundColor: "rgb(72, 187, 120)",
        pointHoverBorderColor: "rgb(72, 187, 120)",
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        borderWidth: 1.2,
      },
    ],
  };
};

const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

const Recovered: React.FC = () => {
  const { Line }: any = charts;

  return (
    <Card shadowLarge>
      <Heading as="h2" fontWeight="bold" fontSize="xs" mb="5">
        Personas recuperadas a hoy
      </Heading>

      <Line data={data} options={options} />
    </Card>
  );
};

export default Recovered;

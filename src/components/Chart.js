import React from "react";
import { Bar } from "react-chartjs-2";

export function Chart(props) {
  const data = {
    labels: ["Confirmed", "Recovered", "Death"],
    datasets: [
      {
        label: "",
        borderWidth: 1,
        // hoverBackgroundColor: 'rgba(0,0,0,0.4)',
        hoverBorderColor: "rgba(0,0,0,1)",
        data: [props.confirmed, props.recovered, props.death],
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(255,255,0,0.6)",
        ],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: `Latest Report of ${props.country.toUpperCase()}`,
            fontSize: 25,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}

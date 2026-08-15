import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ skills }) => {
  const labels = skills.map((s) => s.label);
  const values = skills.map((s) => s.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Skill Level",
        data: values,
        backgroundColor: labels.map((_, i) => (i % 2 === 0 ? "#7620ff" : "#f2b300")),
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { max: 100 },
    },
  };

  return (
    <section style={{ padding: "0px 0px 30px" }}>
      <h3 className="mb-5 text-center font40 extraBold">My Professional Skills</h3>
      <Bar data={data} options={options} />
    </section>
  );
};

export default Chart;

// components/LineChart.tsx
"use client";

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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

export default function BarChart({ labels, values,colorSet }: { labels: string[]; values: number[]; colorSet: string[]}) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Usage (%)",
        data: values,
        backgroundColor: colorSet,
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

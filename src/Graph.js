
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip } from 'chart.js';
import './style.css'; // Import the CSS file for styling

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip);

const Graph = ({ points, isLine }) => {
  const closedPoints = [...points, points[0]]; // Close the shape by adding the first point at the end

  const data = {
    labels: closedPoints.map((_, i) => `Point ${i + 1}`),
    datasets: [
      {
        label: isLine ? 'Line Graph' : 'Polygon Area',
        data: closedPoints.map(([x, y]) => ({ x, y })),
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        fill: !isLine, // Fill for area only
        tension: 0.1,
        showLine: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const { dataIndex } = context;
            const point = closedPoints[dataIndex];
            return `(${point[0]}, ${point[1]})`; // Display (x, y) format
          },
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;



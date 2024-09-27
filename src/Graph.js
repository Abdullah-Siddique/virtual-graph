

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip } from 'chart.js';
import './style.css'; // Import the CSS file for styling

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip);

const Graph = ({ points }) => {
  // Create all possible lines connecting every point to every other point
  const datasets = [];

  if (points.length >= 3) { // Ensure we have at least 3 points to form a polygon
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        datasets.push({
          label: `Line ${i + 1}-${j + 1}`,
          data: [
            { x: points[i][0], y: points[i][1] },
            { x: points[j][0], y: points[j][1] },
          ],
          borderColor: 'rgba(0,0,0,1)', // Black line for connections
          borderWidth: 1.5, // Thinner lines for clarity
          pointRadius: 5, // Points are more visible
          pointBackgroundColor: 'red', // Red color for points
          fill: false, // No fill
          tension: 0, // Straight lines
          showLine: true, // Ensure lines are drawn
        });
      }
    }
  } else {
    // Display a single dataset when fewer than 3 points are given
    datasets.push({
      label: 'Single Point or Line',
      data: points.map(point => ({ x: point[0], y: point[1] })),
      borderColor: 'rgba(255,0,0,1)', // Red line if less than 3 points
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: 'blue',
      fill: false,
    });
  }

  const data = {
    labels: points.map((_, i) => `Point ${i + 1}`),
    datasets: datasets,
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: Math.min(...points.map(([x]) => x)) - 1, // Dynamic scaling for x-axis
        max: Math.max(...points.map(([x]) => x)) + 1,
      },
      y: {
        beginAtZero: true,
        min: Math.min(...points.map(([_, y]) => y)) - 1, // Dynamic scaling for y-axis
        max: Math.max(...points.map(([_, y]) => y)) + 1,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const point = datasets[context.datasetIndex].data[context.dataIndex];
            return `(${point.x}, ${point.y})`; // Display the point in (x, y) format
          },
        },
      },
    },
    responsive: true, // Make the graph responsive to screen size
    maintainAspectRatio: false, // Adjust graph dimensions dynamically
  };

  return (
    <div className="graph-container">
      {points.length >= 2 ? (
        <Line data={data} options={options} />
      ) : (
        <p>Please add at least two points to display the graph.</p>
      )}
    </div>
  );
};

export default Graph;

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const AppUsersGraph = () => {
  // Example data for the last 7, 30 days, and 12 months
  const data7Days = [120, 430, 240, 650, 360, 370, 880];
  const data30Days = [
    120, 430, 240, 650, 360, 370, 880, 160, 170, 180, 120, 430, 240, 650, 360,
    370, 880, 260, 270, 280, 290, 120, 430, 240, 650, 360, 370, 880, 370, 380,
    390,
  ];

  // Example data for the last 12 months
  const data12Months = [
    1200, 1300, 2400, 2200, 1100, 1500, 3300, 4500, 2800, 1600, 2700, 2000,
  ];

  // Date labels for the last 7, 30 days, and 12 months
  const last7DaysLabels = ["1", "2", "3", "4", "5", "6", "7"];
  const last30DaysLabels = Array.from({ length: 30 }, (_, i) =>
    (i + 1).toString()
  );
  const last12MonthsLabels = [
    "01 Jan",
    "02 Feb",
    "03 Mar",
    "04 Apr",
    "05 May",
    "06 Jun",
    "07 Jul",
    "08 Aug",
    "09 Sep",
    "10 Oct",
    "11 Nov",
    "12 Dec",
  ];

  // State to track the selected range (7, 30, or 12)
  const [selectedRange, setSelectedRange] = useState(12); // Default to 12 months

  // Chart data based on the selected range
  const chartData =
    selectedRange === 7
      ? {
          labels: last7DaysLabels,
          datasets: [
            {
              label: "Users  ",
              data: data7Days,
              borderColor: "#880505a2",
              backgroundColor: "#880505a2",
              fill: false,
              tension: 0.1,
              borderWidth: 4,
            },
          ],
        }
      : selectedRange === 30
      ? {
          labels: last30DaysLabels,
          datasets: [
            {
              label: "Users  ",
              data: data30Days,
              borderColor: "#880505a2",
              backgroundColor: "#880505a2",
              fill: false,
              tension: 0.1,
              borderWidth: 4,
            },
          ],
        }
      : {
          labels: last12MonthsLabels,
          datasets: [
            {
              label: "Users  ",
              data: data12Months,
              borderColor: "#880505a2",
              backgroundColor: "#880505a2",
              fill: false,
              tension: 0.1,
              borderWidth: 4,
            },
          ],
        };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    animation: {
      duration: 1000, // Smooth transition on data change
    },
  };

  // Handle dropdown change to switch between 7 days, 30 days, and 12 months
  const handleRangeChange = (event) => {
    setSelectedRange(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div className="flex p-4 justify-between">
        <div>
          <p className="font-bold">App Users</p>
          <p>Your app’s traffic over time</p>
        </div>
        <div>
          <select
            id="time-range"
            onChange={handleRangeChange}
            className="outline-none border rounded-lg p-2"
            value={selectedRange}
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="12">Last 12 Months</option>
          </select>
        </div>
      </div>

      {/* Line chart */}
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AppUsersGraph;

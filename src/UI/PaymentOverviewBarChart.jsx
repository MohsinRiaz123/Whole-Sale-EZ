import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const PaymentOverviewBarChart = () => {
  // Payment data for the last 7 days, 1 month, and 12 months
  const paymentData7Days = [2000, 4500, 2200, 3600, 5000, 4800, 2100];
  const paymentData1Month = [
    2200, 3600, 4800, 4900, 2000, 4500, 2200, 3600, 5000, 4800, 2100, 6100,
    6200, 6300, 7500, 6500, 2100, 6700, 7800, 6900, 7000, 7900, 5200, 4300,
    7400, 6600, 7700, 3600, 5000, 4800,
  ];
  const paymentData12Months = [
    4200, 5500, 3700, 5500, 6700, 8800, 4900, 7900, 5100, 8300, 6200, 5400,
  ];

  // Date labels for the last 7 days, 1 month, and 12 months
  const last7DaysLabels = ["1", "2", "3", "4", "5", "6", "7"];
  const last1MonthLabels = Array.from({ length: 30 }, (_, i) =>
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

  // State to track the selected range (7 days, 1 month, or 12 months)
  const [selectedRange, setSelectedRange] = useState(12); // Default to 12 months

  // Format the payment data with a dollar sign for tooltips
  const formatPaymentData = (data) => data.map((value) => `$${value.toLocaleString()}`);

  // Chart data based on the selected range
  const paymentChartData =
    selectedRange === 7
      ? {
          labels: last7DaysLabels,
          datasets: [
            {
              label: "Payments (Last 7 Days)",
              data: paymentData7Days,
              backgroundColor: "#880505a2",
              barThickness: 10,
              borderRadius: 8,
            },
          ],
        }
      : selectedRange === 30
      ? {
          labels: last1MonthLabels,
          datasets: [
            {
              label: "Payments (Last 1 Month)",
              data: paymentData1Month,
              backgroundColor: "#880505a2",
              barThickness: 10,
              borderRadius: 8,
            },
          ],
        }
      : {
          labels: last12MonthsLabels,
          datasets: [
            {
              label: "Payments (Last 12 Months)",
              data: paymentData12Months,
              backgroundColor: "#880505a2",
              barThickness: 10,
              borderRadius: 8,
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
        callbacks: {
          // Modify the tooltip to show the dollar sign before the value
          label: function (context) {
            // Format value with dollar sign and commas
            return `Amount: $ ${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Optionally hide gridlines
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          // Format the y-axis ticks to display values in USD
          callback: function (value) {
            return `$${value.toLocaleString()}`; // Add dollar sign and format the number
          },
        },
      },
    },
    elements: {
      bar: {
        barThickness: 10, // Thinner bars
      },
    },
    animation: {
      duration: 1000, // Smooth transition on data change
    },
  };

  // Handle dropdown change to switch between 7 days, 1 month, and 12 months
  const handleRangeChange = (event) => {
    setSelectedRange(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div className="flex p-4 justify-between">
        <div>
          <p className="font-bold text-lg">Payment Overview</p>
        </div>
        <div>
          <select
            id="time-range"
            onChange={handleRangeChange}
            className="outline-none border rounded-lg p-2"
            value={selectedRange}
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 1 Month</option>
            <option value="12">Last 12 Months</option>
          </select>
        </div>
      </div>

      {/* Bar chart for payment overview */}
      <Bar data={paymentChartData} options={options} />
    </div>
  );
};

export default PaymentOverviewBarChart;

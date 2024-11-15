import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { AiOutlineRight } from "react-icons/ai";
import SalesGauge from "./SalesGauge";
import { GoArrowUpLeft } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
const { RangePicker } = DatePicker;

const Report = () => {
  const orders = {
    total: 4526,
    inProgress: 345,
    complete: 4049,
    cancelled: 132,
  };

  const [report, setReport] = useState(false);
  const [dates, setDates] = useState([null, null]); // State to hold start and end dates

  const currentSales = 954535; // Example sales amount
  const maxSales = 1200000; // Example maximum sales target

  const handleDateChange = (dates) => {
    setDates(dates);
  };

  const handleGenerateReport = () => {
    const [start, end] = dates; // Destructure to get start and end dates
    console.log("Start Date:", start ? start.format("YYYY-MM-DD") : null);
    console.log("End Date:", end ? end.format("YYYY-MM-DD") : null);
    // Add your logic to generate the report using start and end dates
    setReport(true);
  };

  return (
    <div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Reports</h2>
        <div className="flex text-sm gap-1 mb-3 text-gray-500 items-center">
          <p className="cursor-pointer">Supplier details</p>
          <AiOutlineRight />
          <p className="cursor-pointer">Reports</p>
        </div>
      </div>
      <h4 className="mt-10 font-bold">Select duration to generate report</h4>
      <div className=" sm:flex  mt-4 items-center justify-between ">
        <div className="flex gap-4 sm:gap-10 items-center w-full sm:w-1/2  pb-20">
          <div>
            <Space direction="vertical" size={12} className="sm:flex sm:flex-row sm:space-x-4">
              <RangePicker onChange={handleDateChange} />
            </Space>
          </div>
          <button
            className="bg-[#A63939] text-xs sm:text-sm text-white sm:px-4 sm:py-2 rounded-full"
            onClick={handleGenerateReport}
          >
            Generate report
          </button>
        </div>
        <div className=" py-3 flex items-center justify-center w-full sm:w-1/2">
          {report && (
            <div className="">
              <SalesGauge sales={currentSales} maxSales={maxSales} />
            </div>
          )}
        </div>
      </div>
      {report && (
        <div className="flex flex-wrap gap-6 mt-10 items-center justify-around">
          <div className="flex flex-col items-center justify-center border border-blue-300 bg-blue-100 p-5 rounded-xl">
            <p className="text-xl font-semibold">{orders.total}</p>
            <p>Total Orders</p>
            <div className="flex gap-1 text-sm">
              <p className="flex items-center text-green-600">
                <GoArrowUpLeft /> 16%
              </p>
              <p>increase from last week</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border border-[#7415154d] bg-[#A639394D] p-5 rounded-xl">
            <p className="text-xl font-semibold">{orders.complete}</p>
            <p>Orders Completed</p>
            <div className="flex gap-1 text-sm">
              <p className="flex items-center text-green-600">
                <GoArrowUpLeft /> 3%
              </p>
              <p>increase from last week</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border border-blue-300 bg-blue-100 p-5 rounded-xl">
            <p className="text-xl font-semibold">{orders.inProgress}</p>
            <p>Orders in progress</p>
            <div className="flex gap-1 text-sm">
              <p className="flex items-center   text-red-600">
                <GoArrowDownLeft /> 24%
              </p>
              <p>decrease from last week</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border border-[#7415154d] bg-[#A639394D] p-5 rounded-xl">
            <p className="text-xl font-semibold">{orders.cancelled}</p>
            <p>Orders Cancelled</p>
            <div className="flex gap-1 text-sm">
              <p className="flex items-center text-green-600">
                <GoArrowUpLeft /> 3%
              </p>
              <p>increase from last week</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;

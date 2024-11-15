import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { PiBellSimple } from "react-icons/pi";
import MenuBar from "../Components/MenuBar";
import supplier from "../assets/Images/supplier.png";
import fedEx from "../assets/Images/fedEx.png";
import dhl from "../assets/Images/dhl.png";
import ups from "../assets/Images/ups.png";
import usps from "../assets/Images/usps.png";
import filter from "../assets/Images/filter.png";

const ShippingMethord = () => {
  const [isMenu, setMenu] = useState(false);
  const [filterStatus, setFilterStatus] = useState(""); // Holds the selected filter value
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Controls dropdown visibility

  const methods = [
    {
      img: fedEx,
      name: "FedEx",
      id: "768945321645",
      key: "5V768f",
      accountNo: "7689653478",
      status: "Active",
    },
    {
      img: usps,
      name: "USPS",
      id: "234577869889",
      key: "3634FDD",
      accountNo: "8973478576",
      status: "Active",
    },
    {
      img: ups,
      name: "UPS",
      id: "58576458645",
      key: "4534YS",
      accountNo: "6897356487",
      status: "Inactive",
    },
    {
      img: dhl,
      name: "DHL",
      id: "36364546345",
      key: "SG5565",
      accountNo: "8976542588",
      status: "Active",
    },
  ];

  // Filter methods based on the selected status
  const filteredMethods = methods.filter((method) => {
    if (!filterStatus) return true; // If no filter selected, show all
    return method.status.toLowerCase() === filterStatus.toLowerCase();
  });

  return (
    <div>
      <div className="relative border-b">
        <div className="sm:flex justify-between items-center p-4 w-[95%] mx-auto">
          <div className="font-Mulish font-semibold text-xl">
            <button
              onClick={() => setMenu((prev) => !prev)}
              className="lg:hidden"
            >
              {isMenu ? <RxCross2 /> : <IoMenu />}
            </button>{" "}
            Shipping Methods
          </div>
          {isMenu && (
            <div className="absolute top-10 left-0 w-full bg-white lg:hidden">
              <MenuBar setMenu={setMenu} />
            </div>
          )}
          <div className="flex gap-2 sm:gap-4 lg:gap-9">
            <div className="border flex gap-1 p-1 rounded-md px-3 justify-center items-center">
              <div>
                <GoSearch />
              </div>
              <div className="">
                <input
                  type="text"
                  className="outline-none"
                  placeholder="search"
                />
              </div>
            </div>
            <div className="border flex items-center rounded-md p-1">
              <PiBellSimple className="text-2xl" />
            </div>
            <div>
              <img src={supplier} alt="supplier" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto mt-16 space-y-4">
        <div className="flex items-center justify-between relative">
          <p className="text-lg font-bold">Shipping methods</p>
          <div
            onClick={() => setIsFilterOpen((prev) => !prev)} // Toggle the filter dropdown visibility
            className="flex items-center border p-2 px-3 gap-2 rounded-full font-Mulish cursor-pointer"
          >
            <div>
              <img src={filter} alt="filter icon" />
            </div>
            <div className="text-xs lg:text-md">Filter</div>
          </div>

          {/* Dropdown filter menu */}
          {isFilterOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-lg w-24 p-2 z-10">
                      <div
                        onClick={() => {
                          setFilterStatus(""), setIsFilterOpen((prev) => !prev);
                        }}
                        className="cursor-pointer p-2 hover:bg-[#A639394D]"
                      >
                        All
                      </div>
                      <div
                        onClick={() => {
                          setFilterStatus("Active"),
                            setIsFilterOpen((prev) => !prev);
                        }}
                        className="cursor-pointer p-2 hover:bg-[#A639394D]"
                      >
                        Active
                      </div>
                      <div
                        onClick={() => {
                          setFilterStatus("Inactive"),
                            setIsFilterOpen((prev) => !prev);
                        }}
                        className="cursor-pointer p-2 hover:bg-[#A639394D]"
                      >
                        Inactive
                      </div>
                    </div>
                  )}
        </div>

        <div className="border rounded-lg p-3">
          <div className="grid grid-cols-5 text-gray-400 border-b py-2">
            <p>Shipping method name</p>
            <p>Login ID</p>
            <p>Secret Key</p>
            <p>Account no</p>
            <p>Status</p>
          </div>
          <div>
            {filteredMethods.map((val, i) => (
              <div
                key={i}
                className="grid grid-cols-5 items-center border-b py-4 gap-2 text-sm"
              >
                <div className="flex gap-2 items-center">
                  <img src={val.img} alt="Logo" className="hidden sm:block" />
                  <p className="break-words">{val.name}</p>
                </div>
                <p className="break-words">{val.id}</p>
                <p className="break-words">{val.key}</p>
                <p className="break-words">{val.accountNo}</p>
                <p
                  className={`font-bold ${
                    val.status === "Active" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {val.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethord;

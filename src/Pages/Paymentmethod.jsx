import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { PiBellSimple } from "react-icons/pi";
import MenuBar from "../Components/MenuBar";
import supplier from "../assets/Images/supplier.png";
import stripe from "../assets/Images/stripe.png";
import paypal from "../assets/Images/paypal.png";
import googlePay from "../assets/Images/googlePay.png";
import authorize from "../assets/Images/authorize.png";
import applepay from "../assets/Images/applepay.png";
import filter from "../assets/Images/filter.png";

const Paymentmethod = () => {
  const [isMenu, setMenu] = useState(false);
  const [filterStatus, setFilterStatus] = useState(""); // Holds the selected filter value
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Controls dropdown visibility

  const methods = [
    {
      img: stripe,
      name: "Stripe",
      fee: "0.5",
      accountNo: "345878676****",
      accountOwn: "Abdul Ismail",
      status: "Active",
    },
    {
      img: paypal,
      name: "PayPal",
      fee: "0.3",
      accountNo: "345878676****",
      accountOwn: "Abdul Ismail",
      status: "Active",
    },
    {
      img: authorize,
      name: "Authorize.net",
      fee: "0.2",
      accountNo: "345878676****",
      accountOwn: "Abdul Ismail",
      status: "Inactive",
    },
    {
      img: googlePay,
      name: "Google pay",
      fee: "0.6",
      accountNo: "345878676****",
      accountOwn: "Abdul Ismail",
      status: "Active",
    },
    {
      img: applepay,
      name: "Apple Pay",
      fee: "0.3",
      accountNo: "345878676****",
      accountOwn: "Abdul Ismail",
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
            Payment Methods
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
          <p className="text-lg font-bold">Payment methods</p>
          
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
            <p>Payment method</p>
            <p>Account Owner</p>
            <p>Account Number</p>
            <p>Fee</p>
            <p>Status</p>
          </div>
          <div>
            {filteredMethods.map((val, i) => (
              <div
                key={i}
                className="grid grid-cols-5 items-center border-b gap-2 py-4 text-sm"
              >
                <div className="flex gap-2 items-center">
                  <img src={val.img} alt="Logo" className="hidden sm:block" />
                  <p className="break-words">{val.name}</p>
                </div>
                <p className="break-words">{val.accountOwn}</p>
                <p className="break-words">{val.accountNo}</p>
                <p>{val.fee}</p>
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

export default Paymentmethod;

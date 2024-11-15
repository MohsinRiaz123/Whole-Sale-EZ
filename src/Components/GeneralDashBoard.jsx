import { GoSearch } from "react-icons/go";
import { PiBellSimple } from "react-icons/pi";
import MenuBar from "./MenuBar";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import supplier from "../assets/Images/supplier.png";
import { BsGraphUp } from "react-icons/bs";
import { GoArrowUpLeft, GoArrowDownRight } from "react-icons/go";
import { BsBarChartLine } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { PiWarehouseLight } from "react-icons/pi";
import "leaflet/dist/leaflet.css";
import UserMap from "./UserMap";
import AppUsersGraph from "../UI/AppUsersgraph";
import PaymentOverviewBarChart from "../UI/PaymentOverviewBarChart";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const GeneralDashBoard = () => {
  const [isMenu, setMenu] = useState(false);
  const [topRegions, setTopRegions] = useState([
    {
      name: "New York, USA",
      latitude: 40.7128,
      longitude: -74.006,
      userCount: 1200,
    },
    {
      name: "London, UK",
      latitude: 51.5074,
      longitude: -0.1278,
      userCount: 950,
    },
    {
      name: "Tokyo, Japan",
      latitude: 35.6895,
      longitude: 139.6917,
      userCount: 800,
    },
  ]);

  const topAllRegions = [
    {
      city: "Florida",
      users: "300",
      revenu: "$5,690",
    },
    {
      city: "New York",
      users: "700",
      revenu: "$7,690",
    },
    {
      city: "Texas",
      users: "400",
      revenu: "$6,690",
    },
    {
      city: "Houston",
      users: "500",
      revenu: "$3,690",
    },
    {
      city: "London",
      users: "300",
      revenu: "$2,690",
    },
    {
      city: "Pennsylvania",
      users: "300",
      revenu: "$5,690",
    },
    {
      city: "New Jersey",
      users: "200",
      revenu: "$7,690",
    },
    {
      city: "North Dakota",
      users: "900",
      revenu: "$6,690",
    },
    {
      city: "South Dakota",
      users: "800",
      revenu: "$3,690",
    },
    {
      city: "Michigan",
      users: "600",
      revenu: "$2,690",
    },
  ];

  useEffect(() => {
    // Fetch the top regions data (e.g., from an API)
    const fetchTopRegions = async () => {
      const response = await fetch("/api/topRegions"); // Replace with your API endpoint
      const data = await response.json();
      setTopRegions(data);
    };

    fetchTopRegions();
  }, []);

  const statisticsData = [
    {
      count: "250.48K",
      label: "Suppliers",
      icon: <BsGraphUp />,
      change: "+16%",
      description: "increase from last week",
      changeColor: "text-green-500",
      bgColor: "bg-[#74B3FB29]",
      borderColor: "border-[#1D62D766]",
    },
    {
      count: "48.28K",
      label: "Vendors",
      icon: <BsBarChartLine />,
      change: "-24%",
      description: "decrease from last week",
      changeColor: "text-red-500",
      bgColor: "bg-[#A6393929]",
      borderColor: "border-[#A6393966]",
    },
    {
      count: "22.16K",
      label: "Warehouses",
      icon: <PiWarehouseLight />,
      change: "+03%",
      description: "increase from last week",
      changeColor: "text-green-500",
      bgColor: "bg-[#71CFF829]",
      borderColor: "border-[#1F96AD66]",
    },
    {
      count: "$48.28K",
      label: "Wallet Balance",
      icon: <BsWallet2 />,
      change: "-24%",
      description: "increase from last week",
      changeColor: "text-red-500",
      bgColor: "bg-[#A6393929]",
      borderColor: "border-[#A6393966]",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // Calculate total pages
  const totalPages = Math.ceil(topAllRegions.length / itemsPerPage);
  // Get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = topAllRegions.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-[95%] mx-auto">
      {/* header */}
      <div className="relative border-b">
        <div className="sm:flex justify-between p-4 w-[95%] mx-auto">
          <div className="font-Mulish font-semibold text-xl">
            <button
              onClick={() => setMenu((prev) => !prev)}
              className="lg:hidden"
            >
              {isMenu ? <RxCross2 /> : <IoMenu />}
            </button>{" "}
            General Dashboard
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
      {/* total statistics */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 py-5 2xl:gap-3 ">
        {/* Card Component */}
        {statisticsData.map((item, index) => (
          <div
            key={index}
            className={`border ${item.bgColor} ${item.borderColor} rounded-lg mx-auto p-4 2xl:p-8 `}
          >
            <div className="text-center font-semibold text-lg md:text-xl">
              {item.count}
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div>{item.icon}</div>
              <div>{item.label}</div>
            </div>
            <div className="flex gap-2 justify-center text-sm">
              <span className={`flex items-center ${item.changeColor}`}>
                {item.change.startsWith("+") ? (
                  <GoArrowUpLeft />
                ) : (
                  <GoArrowDownRight />
                )}{" "}
                {item.change}
              </span>
              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* map for most user */}
      <div className="md:flex w-full">
        <div className="md:w-[65%] p-4 space-y-10">
          <div className="p-4 border rounded-xl">
            <AppUsersGraph />
          </div>
          <div className="p-4 border rounded-xl">
            <PaymentOverviewBarChart />
          </div>
        </div>
        <div className="p-4 md:w-[35%]">
          <div className="border rounded-xl p-2">
            <p className="font-bold py-6">Total Users by Region</p>
            <UserMap topRegions={topRegions} />
            <div className="font-bold py-6 pl-4">Top Regions</div>
            <div>
              <div className="grid grid-cols-3 pl-4 border-b text-gray-500">
                <div>city</div>
                <div>Users</div>
                <div>Revenue</div>
              </div>
              {currentProducts.map((region, i) => (
                <div key={i} className="grid grid-cols-3 p-4">
                  <div className="text-xs md:text-base">{region.city}</div>
                  <div className="pl-4 text-xs md:text-base">
                    {region.users}
                  </div>
                  <div className="pl-4 text-xs md:text-base">
                    {region.revenu}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between my-4">
              <div className="text-xs sm:text-base">
                <button
                  onClick={() => handlePageChange("previous")}
                  disabled={currentPage === 1}
                  className={`flex gap-2 items-center mx-2 px-1 py-2 rounded ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : " text-black"
                  }`}
                >
                  <GrFormPreviousLink /> Previous
                </button>
              </div>
              {/* <div>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
          </div> */}
              <div className="text-xs sm:text-base">
                <button
                  onClick={() => handlePageChange("next")}
                  disabled={currentPage === totalPages}
                  className={` flex items-center gap-2 mx-2 px-8 py-2 rounded ${
                    currentPage === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : " text-black"
                  }`}
                >
                  Next <GrFormNextLink />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDashBoard;

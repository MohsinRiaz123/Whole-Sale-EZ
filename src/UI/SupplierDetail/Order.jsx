import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import filter from "../../assets/Images/filter.png";
import profile_photo from "../../assets/Images/profile_photo.png";
import OrderDetailForm from "../../Components/Model/OrderDetailForm";

const Vendor = () => {
  const [showModal, setShowModal] = useState(false);

  const vendorData = [
    {
      orderID: "#908765",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
    {
      orderID: "#906789",
      vendorName: "Theresa Webb",
      warehouseName: "John's warehouse",
      date: "Sep 15 2023",
      time: "12:00 PM",
      amount: "$300",
      quantity: "233",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Calculate total pages
  const totalPages = Math.ceil(vendorData.length / itemsPerPage);
  // Get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = vendorData.slice(
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
    <div>
      <div className="mt-5 font-semibold text-xl">Orders List</div>
      <div className="border my-5 rounded-md shadow-md">
        <div className="sm:flex justify-between px-6 space-y-3">
          <div className="flex items-center p-1 border bg-gray-100 rounded-3xl gap-2 mt-4 px-5">
            <div>
              <GoSearch />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-gray-100"
            />
          </div>
          <div className="flex gap-3">
            {/* <div className="flex items-center border p-2 gap-2 rounded-3xl bg-[#A63939] cursor-pointer text-white font-Mulish">
              <div>
                <LuPlusCircle />
              </div>
              <div className="font-Mulish text-xs lg:text-base">
                Add New Warehouse
              </div>
            </div> */}
            {/* <NewSupplierForm
                showModal={showModal}
                setShowModal={setShowModal}
              /> */}
            <div className="flex items-center border p-2 px-3 gap-2 rounded-3xl font-Mulish">
              <div>
                <img src={filter} alt="" />
              </div>
              <div className="font-Mulish">Filter</div>
            </div>
          </div>
        </div>
        <div className="">
          {/* Header Row */}
          <div className="w-full pt-6 text-xs lg:text-base px-2 sm:px-5 text-gray-400 font-semibold grid grid-cols-7 gap-3">
            <div className="">Order ID</div>
            <div className="">Vendor Name</div>
            <div className="">Warehouse Name</div>
            <div className="text-end sm:text-start">Date</div>
            <div className="">Time</div>
            <div className="">Amount</div>
            <div className="">Quantity</div>
          </div>

          {/* Data Rows */}
          {currentProducts.map((data, i) => (
            <div
              className="px-2 sm:px-5 text-xs lg:text-base py-4 text-gray-700 border-b grid grid-cols-7 gap-6"
              key={i}
            >
              <div
                className="cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                {data.orderID}
              </div>
              <div className=" sm:flex  sm:items-center sm:gap-2">
                <img src={profile_photo} alt="" className="hidden sm:block" />
                {data.vendorName}
              </div>
              {/* whitespace-normal break-words */}
              <div className="break-words">{data.warehouseName}</div>
              <div className="text-end sm:text-start">{data.date}</div>
              <div className="">{data.time}</div>
              <div className="">{data.amount}</div>
              <div className="">{data.quantity}</div>
            </div>
          ))}
        </div>
        <OrderDetailForm showModal={showModal} setShowModal={setShowModal} />
        <div className="flex items-center justify-between my-4">
          <div className="">
            <button
              onClick={() => handlePageChange("previous")}
              disabled={currentPage === 1}
              className={`flex gap-2 items-center mx-2 px-4 py-2 rounded ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : " text-black"
              }`}
            >
              <GrFormPreviousLink /> Previous
            </button>
          </div>
          <div>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
          </div>
          <div>
            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              className={` flex items-center gap-2 mx-2 px-4 py-2 rounded ${
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
  );
};

export default Vendor;

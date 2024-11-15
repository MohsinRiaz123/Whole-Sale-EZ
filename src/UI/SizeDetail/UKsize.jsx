import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { LuPlusCircle } from "react-icons/lu";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import filter from "../../assets/Images/filter.png";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import NewSupplierForm from "../../Components/Model/NewSupplierForm";

const UKsize = () => {
  const [showModal, setShowModal] = useState(false);

  const sizeArray = [
    {
      size: "6",
      status: "Active",
    },
    {
      size: "6.5",
      status: "Active",
    },
    {
      size: "7",
      status: "Active",
    },
    {
      size: "7.5",
      status: "Inactive",
    },
    {
      size: "8",
      status: "Active",
    },
    {
      size: "8.5",
      status: "Active",
    },
    {
      size: "9",
      status: "Inactive",
    },
    {
      size: "9.5",
      status: "Inactive",
    },
    {
      size: "10",
      status: "Active",
    },
    {
      size: "10.5",
      status: "Active",
    },
    {
      size: "11",
      status: "Active",
    },
    {
      size: "11.5",
      status: "Active",
    },
    {
      size: "12",
      status: "Inactive",
    },
    {
      size: "12.5",
      status: "Active",
    },
    {
      size: "13",
      status: "Active",
    },
    {
      size: "13.5",
      status: "Inactive",
    },
    {
      size: "14",
      status: "Active",
    },
  ];

  // pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Calculate total pages
  const totalPages = Math.ceil(sizeArray.length / itemsPerPage);
  // Get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sizeArray.slice(
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
      <div className="text-xl font-semibold pb-4">UK Sizes</div>
      <div className="border rounded-md">
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
            <div className="flex items-center border p-2 gap-1 rounded-3xl bg-[#A63939] cursor-pointer text-white font-Mulish">
              <div>
                <LuPlusCircle />
              </div>
              <div
                className="font-Mulish text-xs lg:text-base"
                onClick={() => setShowModal(true)}
              >
                Add New Size
              </div>
            </div>
            <NewSupplierForm
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <div className="flex items-center border p-2 px-3 gap-2 rounded-3xl font-Mulish">
              <div>
                <img src={filter} alt="" />
              </div>
              <div className="font-Mulish">Filter</div>
            </div>
          </div>
        </div>
        <div>
          {/* Header Row */}
          <div className="w-ful pt-6 text-xs lg:text-base px-5 text-gray-400 font-semibold grid grid-cols-3 gap-9">
            <div className="">Size</div>
            <div className="">Status</div>
            <div className="">Action</div>
          </div>
          {/* data row */}
          {currentProducts.map((item, i) => (
            <div
              className="cursor-pointer px-5 text-xs lg:text-base py-4 text-gray-700 border-b grid grid-cols-3 gap-9"
              key={i}
            >
              <div className="">{item.size}</div>
              <div className={`${item.status === "Active"?"text-green-600":"text-red-600"}`}>
                {item.status}
                {/* <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.status}
                      onChange={() => {}}
                      className="toggle-checkbox hidden"
                      id={`toggle-${item.size}`}
                    />
                    <label
                      htmlFor={`toggle-${item.size}`}
                      className={`toggle-label ${
                        item.status ? "bg-green-500" : "bg-gray-300"
                      } flex items-center h-6 w-12 rounded-full pr-7 px-0.5 sm:px-0.5 cursor-pointer`}
                    >
                      <span
                        className={`toggle-circle ${
                          item.status ? "translate-x-6" : "translate-x-0"
                        } h-5 w-5 bg-white rounded-full transition-transform`}
                      />
                    </label>
                  </label>
                </div> */}
              </div>
              <div className="flex gap-3 flex-col items-center sm:flex-row">
                <RiEditLine className="w-5 h-5" />
                <RiDeleteBin6Line className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        {/* pagenation */}
      <div className="flex items-center bottom-0 justify-between my-4">
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

export default UKsize;

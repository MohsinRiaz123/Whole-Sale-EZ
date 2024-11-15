import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { LuPlusCircle } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import filter from "../../assets/Images/filter.png";
import NewVendorForm from "../../Components/Model/NewVendorForm";

const Vendor = () => {
  const [showModal, setShowModal] = useState(false);
  const vendorData = [
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Inactive",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Inactive",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Inactive",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
    },
    {
      vendorName: "Theresa Webb",
      email: "theresa.webb@example.com",
      address: "4140 Parker Rd. Allentown, California",
      status: "Active",
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
      <div className="mt-5 font-semibold text-xl">Vendors List</div>
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
            <div className="flex items-center border p-2 gap-2 rounded-3xl bg-[#A63939] cursor-pointer text-white font-Mulish">
              <div>
                <LuPlusCircle />
              </div>
              <div
                className="font-Mulish text-xs lg:text-base"
                onClick={() => setShowModal(true)}
              >
                Add New Vendor
              </div>
            </div>
            <NewVendorForm
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
        <div className="">
          {/* Header Row */}
          <div className="w-ful pt-6 text-xs lg:text-base px-5 text-gray-400 font-semibold grid grid-cols-5 gap-9">
            <div className="">User Name</div>
            <div className="">Email Address</div>
            <div className="">Address</div>
            <div className="text-center">Status</div>
            <div className="">Action</div>
          </div>

          {/* Data Rows */}
          {currentProducts.map((data, i) => (
            <div
              className="cursor-pointer px-5 text-xs lg:text-base py-4 text-gray-700 border-b grid grid-cols-5 gap-9"
              key={i}
            >
              <div className="">{data.vendorName}</div>
              <div className="whitespace-normal break-words">{data.email}</div>
              <div className="whitespace-normal break-words">
                {data.address}
              </div>
              <div className={`text-center ${data.status === "Active"?"text-green-600":"text-red-600"}`}>
                {data.status}
             
              </div>
              <div className="flex gap-3 flex-col items-start sm:flex-row">
                <RiEditLine className="w-5 h-5" />
                <RiDeleteBin6Line className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
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

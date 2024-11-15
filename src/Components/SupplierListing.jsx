import { GoSearch } from "react-icons/go";
import { PiBellSimple } from "react-icons/pi";
import supplier from "../assets/Images/supplier.png";
import { GoArrowUpLeft } from "react-icons/go";
import personIcon from "../assets/Images/Vector.png";
import { LuPlusCircle } from "react-icons/lu";
import filter from "../assets/Images/filter.png";
import NewSupplierForm from "./Model/NewSupplierForm";
import { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import profile_photo from "../assets/Images/profile_photo.png";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import MenuBar from "./MenuBar";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const SupplierListing = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState(null);
  const navigate = useNavigate();

  const handleSupplierDetail = () => {
    navigate("/Dashboard/supplierDetail");
  };

  const supplierData = [
    {
      serialNo: "001",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "002",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "003",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "004",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "005",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "006",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "007",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "008",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "009",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "010",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "011",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "012",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "013",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "014",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
    {
      serialNo: "015",
      userName: "Thereso Webb",
      phoneNo: "(201) 555-0124",
      email: "thereso.webb@example.com",
      vendor: "34",
      wareHouse: "34",
      img: profile_photo,
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Calculate total pages
  const totalPages = Math.ceil(supplierData.length / itemsPerPage);
  // Get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = supplierData.slice(
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

  const handleEditButton = (supplier) => {
    setCurrentSupplier(supplier);
    setShowModal(true);
  };

  return (
    <div>
      {/* navbar  */}
      <div className="relative border-b">
        <div className="sm:flex justify-between p-4 w-[95%] mx-auto">
          <div className="font-Mulish font-semibold text-xl">
            <button
              onClick={() => setMenu((prev) => !prev)}
              className="lg:hidden"
            >
              {isMenu ? <RxCross2 /> : <IoMenu />}
            </button>{" "}
            Suppliers Listing
          </div>
          {isMenu && (
            <div className="absolute top-10 left-0 w-full bg-white lg:hidden">
              <MenuBar setMenu={setMenu} />
            </div>
          )}
          <div className="flex gap-9">
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
      {/* main content */}
      <div className="w-[95%] mx-auto">
        {/* total suppliers */}
        <div className="border w-fit border-[#A63939] mt-5 p-7 rounded-lg bg-[#A639394D] space-y-2">
          <div className="text-2xl font-semibold font-Mulish">334,039</div>
          <div className="flex gap-1">
            <div>
              <img src={personIcon} alt="" />
            </div>
            <div className="font-Mulish">Total Suppliers</div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-0 text-[#15994E]">
              <div>
                <GoArrowUpLeft />
              </div>
              <div>3%</div>
            </div>
            <div className="font-Mulish">increase from last week</div>
          </div>
        </div>
        {/* supplier heading */}
        <div className="flex gap-3 items-center my-7">
          <div className="">
            <img src={personIcon} alt="" className="" />
          </div>
          <div className="font-Mulish text-xl font-semibold pt-1">
            Suppliers List
          </div>
        </div>
        {/* total suppliers listing */}
        <div className="border p-2 rounded-md mb-1">
          <div className="sm:flex justify-between px-6 space-y-2">
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
              <div
                className="flex items-center border p-2 gap-2 rounded-3xl bg-[#A63939] cursor-pointer text-white font-Mulish"
                onClick={() => setShowModal(true)}
              >
                <div>
                  <LuPlusCircle />
                </div>
                <div className="font-Mulish text-xs lg:text-base">
                  Add New Supplier
                </div>
              </div>
              <NewSupplierForm
                showModal={showModal}
                setShowModal={setShowModal}
                supplier={currentSupplier}
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
            <div className="w-ful pt-6 text-xs lg:text-base px-2 text-gray-400 font-semibold grid grid-cols-7">
              <div className="px-7">Sr No.</div>
              <div className="">Supplier Name</div>
              <div className="">Mobile Number</div>
              <div className="">Email Address</div>
              <div className="flex justify-center">No. of Vendors</div>
              <div className="">No. of Warehouses</div>
              <div className="">Action</div>
            </div>

            {/* Data Rows */}
            {currentProducts.map((data, i) => (
              <div
                className="px-2 text-xs lg:text-base py-4 text-gray-700 border-b grid grid-cols-7"
                key={i}
              >
                <div className="px-7">{data.serialNo}</div>
                <div
                  className=" flex items-start gap-2 cursor-pointer "
                  onClick={handleSupplierDetail}
                >
                  <img src={data.img} alt="" className="hidden sm:block" />
                  {data.userName}
                </div>
                <div className="">{data.phoneNo}</div>
                <div className="whitespace-normal break-words">
                  {data.email}
                </div>
                <div className=" flex justify-center">{data.vendor}</div>
                <div className="text-center sm:text-start">
                  {data.wareHouse}
                </div>
                <div className="flex gap-3 flex-col items-start sm:flex-row">
                  <RiEditLine
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleEditButton(data)}
                  />
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
    </div>
  );
};

export default SupplierListing;

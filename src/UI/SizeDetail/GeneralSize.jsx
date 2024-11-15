import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { LuPlusCircle } from "react-icons/lu";
import filter from "../../assets/Images/filter.png";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import NewSupplierForm from "../../Components/Model/NewSupplierForm";

const GeneralSize = () => {
  const [showModal, setShowModal] = useState(false);

  const sizeArray = [
    {
      size: "Small",
      status: "Active",
    },
    {
      size: "Medium",
      status: "Active",
    },
    {
      size: "Large",
      status: "Inactive",
    },
    {
      size: "XL",
      status: "Active",
    },
    {
      size: "2XL",
      status: "Active",
    },
    {
      size: "3XL",
      status: "Inactive",
    },
    {
      size: "4XL",
      status: "Active",
    },
  ];
  return (
    <div className="w-[95%] mx-auto">
      {/* heading */}
      <div className="text-xl font-semibold pb-4">General Sizes</div>
      {/* main content */}
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
          {sizeArray.map((item, i) => (
            <div
              className="cursor-pointer px-5 text-xs lg:text-base py-4 text-gray-700 border-b grid grid-cols-3 gap-9"
              key={i}
            >
              <div className="">{item.size}</div>
              <div className={`${item.status === "Active"?"text-green-600":"text-red-600"}`}>
                {item.status}
              
              </div>
              <div className="flex gap-3 flex-row items-center sm:flex-row">
                <RiEditLine className="w-5 h-5" />
                <RiDeleteBin6Line className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralSize;
<h1>General Size</h1>;

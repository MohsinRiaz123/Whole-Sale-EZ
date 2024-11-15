import man from "../../assets/Images/man.png";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { AiOutlineRight } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import MenuBar from "../../Components/MenuBar";

const SupplierDetailLayout = () => {
  const [isMenu, setMenu] = useState(false);
  const person = {
    name: "Jacob Jones",
    number: "(302) 555-0107",
    email: "jacob.jones@example.com",
    location: "3891 Ranchview Dr. Richardson, California 62639, USA",
    company: "XYZ",
    EIN: "124587356",
    payment: {
      bank: "JPMC Bank",
      accNo: "2341 2526 1562 2671",
    },
  };

  const navigator = useNavigate();
  const [state, setState] = useState({
    isVendor: true,
    isWarehouse: false,
    isproduct: false,
    isOrder: false,
    isInvoice: false,
    isReport: false,
  });
  const toggleClick = (key) => {
    setState((prevState) => ({
      [key]: !prevState[key],
    }));
    if (key === "isVendor") {
      navigator("/Dashboard/supplierDetail");
    } else if (key === "isWarehouse") {
      navigator("warehouse");
    } else if (key === "isproduct") {
      navigator("product");
    } else if (key === "isOrder") {
      navigator("order");
    } else if (key === "isInvoice") {
      navigator("invoice");
    } else {
      navigator("report");
    }
  };

 

  return (
    <div className="relative">
      <div className="w-[95%] mx-auto">
        <div>
          <div className="my-5">
            <button
              onClick={() => setMenu((prev) => !prev)}
              className="lg:hidden"
            >
              {isMenu ? <RxCross2 /> : <IoMenu />}
            </button>{" "}
            <h2 className="text-xl font-semibold">Supplier Details</h2>
            <div className="flex text-sm font-Mulish gap-1 mb-3 text-gray-500 items-center">

              <Link to={"/supplierListing"}>Suppliers list</Link>
              <AiOutlineRight />
              <Link to={"/supplierDetail"}>Supplier Details</Link>
            </div>

            {isMenu && (
              <div className="absolute top-10 left-0 w-full bg-white lg:hidden">
                <MenuBar setMenu={setMenu} />
              </div>
            )}
          </div>
        </div>
        <div className="  border shadow-md p-3 space-y-3 rounded-lg">
          <div className="sm:flex items-center justify-between w-full ">
            <div className=" py-2">
              <div className="sm:flex gap-4">
                <img
                  src={man}
                  alt="Person"
                  className="rounded-full w-20 h-20"
                />
                <div>
                  <p className="text-xl font-bold"> {person.name}</p>
                  <div className="sm:flex gap-2 items-center">
                    <p className=" flex gap-2 items-center">
                      <FiPhoneCall /> {person.number}
                    </p>
                    <p className=" flex gap-2 items-center">
                      <CiMail /> {person.email}
                    </p>
                  </div>
                  <p className=" flex gap-2 items-center">
                    <CiLocationOn /> {person.location}
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center ">
              <button className=" bg-[#A639394D] rounded-full px-3 py-1 w-28">
                Delete User
              </button>
            </div>
          </div>
          <span className="block h-[1px] bg-gray-200 w-[90%] mx-auto"></span>
          <div className="sm:flex items-center justify-between w-full ">
            <div className="flex gap-10">
              <div>
                <p className="text-sm text-gray-400">Company Name</p>
                <p>{person.company}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">EIN No</p>
                <p>{person.EIN}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Payment Info</p>
              <p>{person.payment.bank}</p>
              <p>{person.payment.accNo}</p>
            </div>
          </div>
          {/* buttons */}

          <div className="flex gap-5 flex-wrap">
            <div
              className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
                state.isVendor ? "bg-[#A63939] text-white" : ""
              }`}
              onClick={() => toggleClick("isVendor")}
            >
              Vendors(15)
            </div>
            <div
              className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
                state.isWarehouse ? "bg-[#A63939] text-white" : ""
              }`}
              onClick={() => toggleClick("isWarehouse")}
            >
              Warehouses(36)
            </div>
            <div
              className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
                state.isproduct ? "bg-[#A63939] text-white" : ""
              }`}
              onClick={() => toggleClick("isproduct")}
            >
              Products(13)
            </div>
            <div
              className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
                state.isOrder ? "bg-[#A63939] text-white" : ""
              }`}
              onClick={() => toggleClick("isOrder")}
            >
              Orders(13)
            </div>
            <div
              className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
                state.isInvoice ? "bg-[#A63939] text-white" : ""
              }`}
              onClick={() => toggleClick("isInvoice")}
            >
              Invoices(13)
            </div>
            <div
              className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
                state.isReport ? "bg-[#A63939] text-white" : ""
              }`}
              onClick={() => toggleClick("isReport")}
            >
              Report
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SupplierDetailLayout;

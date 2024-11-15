import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import MenuBar from "./MenuBar";
import { GoSearch } from "react-icons/go";
import { PiBellSimple } from "react-icons/pi";
import supplier from "../assets/Images/supplier.png";
import filter from "../assets/Images/filter.png";
import { LuPlusCircle } from "react-icons/lu";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import NewColorForm from "./Model/NewColorForm";

const Color = () => {
  const [isMenu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // State to track the active/inactive status of each color
  const colors = [
    { colorName: "Blue", colorCode: "#099799", status: "Active" },
    { colorName: "Green", colorCode: "#578668", status: "Inactive" },
    { colorName: "Purple", colorCode: "#467866", status: "Active" },
    { colorName: "Yellow", colorCode: "#576898", status: "Inactive" },
    { colorName: "Orange", colorCode: "#645786", status: "Active" },
    // Add more colors as needed
  ];



  return (
    <div>
      {/* Navbar */}
      <div className="relative border-b">
        <div className="sm:flex justify-between p-4 w-[95%] mx-auto">
          <div className="font-Mulish font-semibold text-xl">
            <button
              onClick={() => setMenu((prev) => !prev)}
              className="lg:hidden"
            >
              {isMenu ? <RxCross2 /> : <IoMenu />}
            </button>{" "}
            Colors
          </div>
          {isMenu && (
            <div className="absolute top-10 left-0 w-full bg-white lg:hidden">
              <MenuBar setMenu={setMenu} />
            </div>
          )}
          <div className="flex gap-9">
            <div className="border flex gap-1 p-1 rounded-md px-3 justify-center items-center">
              <GoSearch />
              <input
                type="text"
                className="outline-none"
                placeholder="search"
              />
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

      {/* Color Listing */}
      <div className="flex p-4 w-[95%] mx-auto">
        <div className="font-semibold text-xl">Colors List</div>
      </div>
      <div className="flex p-4 w-[95%] mx-auto ">
        <div className="border rounded-lg w-full pb-3">
          <div className="sm:flex justify-between px-6 space-y-3">
            <div className="flex items-center p-1 border bg-gray-100 rounded-3xl gap-2 mt-4 px-5">
              <GoSearch />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-gray-100"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex items-center border p-2 gap-1 rounded-3xl bg-[#A63939] cursor-pointer text-white font-Mulish">
                <LuPlusCircle />
                <div
                  className="text-xs lg:text-base"
                  onClick={() => setShowModal(true)}
                >
                  Add New color
                </div>
              </div>
              <NewColorForm
                showModal={showModal}
                setShowModal={setShowModal}
                className="z-99"
              />
              <div className="flex items-center border p-2 px-3 gap-2 rounded-3xl font-Mulish">
                <img src={filter} alt="" />
                <div>Filter</div>
              </div>
            </div>
          </div>
          <div className="w-[95%] mx-auto">
            <div className="w-full pt-6 text-xs lg:text-base text-gray-400 font-semibold grid grid-cols-4 gap-9">
              <div>Color Name</div>
              <div>Color Code</div>
              <div>Status</div>
              <div>Action</div>
            </div>

            {/* Render Color List */}
            {colors.map((color, i) => (
              <div
                className="w-full pt-6 text-xs lg:text-base grid grid-cols-4 gap-9"
                key={i}
              >
                <div className="flex items-start sm:items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full border hidden sm:block"
                    style={{ backgroundColor: color.colorName }}
                  ></div>
                  {color.colorName}
                </div>
                <div className="flex items-center">{color.colorCode}</div>
                <div className={`${color.status ==="Active"?"text-green-600":"text-red-600"}`}>
                  {color.status}
                </div>
                {/* <div className="flex justify-start">
                  <div>
                    <label className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={color.status}
                        onChange={() => handleToggle(i)}
                        className="toggle-checkbox hidden"
                        id={`toggle-${color.colorName}`}
                      />
                      <label
                        htmlFor={`toggle-${color.colorName}`}
                        className={`toggle-label ${
                          color.status ? "bg-green-500" : "bg-gray-300"
                        } flex items-center h-6 w-12 rounded-full pr-7 px-0.5 sm:px-0.5 cursor-pointer`}
                      >
                        <span
                          className={`toggle-circle ${
                            color.status ? "translate-x-6" : "translate-x-0"
                          } h-5 w-5 bg-white rounded-full transition-transform`}
                        />
                      </label>
                    </label>
                  </div>
                </div> */}
                <div className="flex gap-3 flex-row items-center sm:flex-row">
                  <RiEditLine className="w-5 h-5" />
                  <RiDeleteBin6Line className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;

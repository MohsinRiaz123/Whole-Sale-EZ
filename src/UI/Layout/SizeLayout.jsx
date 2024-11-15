import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import MenuBar from "../../Components/MenuBar";
import { GoSearch } from "react-icons/go";
import { PiBellSimple } from "react-icons/pi";
import supplier from "../../assets/Images/supplier.png";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SizeLayout = () => {
  const navigator = useNavigate();
  const [isMenu, setMenu] = useState(false);

  const [state, setState] = useState({
    isGeneralSize: true,
    isUKSize: false,
    isUSSize: false,
  });

  const toggleClick = (key) => {
    setState((prevState) => ({
      [key]: !prevState[key],
    }));
    if (key === "isGeneralSize") {
      navigator("/Dashboard/general_Sizes");
    } else if (key === "isUKSize") {
      navigator("/Dashboard/general_Sizes/UK_Sizes");
    } else {
      navigator("/Dashboard/general_Sizes/US_Sizes");
    }
  };

  return (
    <div>
      {/* header */}
      <div className="relative border-b">
        <div className="sm:flex justify-between p-4 w-[95%] mx-auto">
          <div className="font-Mulish font-semibold text-xl flex items-center">
            <button
              onClick={() => setMenu((prev) => !prev)}
              className="lg:hidden"
            >
              {isMenu ? <RxCross2 /> : <IoMenu />}
            </button>{" "}
            Sizes
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
            <div className="flex items-center">
              <img src={supplier} alt="supplier" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      {/* buttons */}
      <div className="flex gap-5 flex-wrap w-[95%] mx-auto py-7">
        <div
          className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
            state.isGeneralSize ? "bg-[#A63939] text-white" : ""
          }`}
          onClick={() => toggleClick("isGeneralSize")}
        >
          General Size
        </div>
        <div
          className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
            state.isUKSize ? "bg-[#A63939] text-white" : ""
          }`}
          onClick={() => toggleClick("isUKSize")}
        >
          UK sizes
        </div>
        <div
          className={`border cursor-pointer border-[#A63939]  rounded-full px-4 py-2 justify-center items-center ${
            state.isUSSize ? "bg-[#A63939] text-white" : ""
          }`}
          onClick={() => toggleClick("isUSSize")}
        >
          US sizes
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SizeLayout;

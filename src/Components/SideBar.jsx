import { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { PiCreditCard } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
const SideBar = () => {
  const navigator = useNavigate();
  const [showSettingDropdown, setShowSettingDropdown] = useState(false);
  const [state, setState] = useState({
    isDashBoard: false,
    isSupplier: false,
    isProduct: false,
    isColor: false,
    isSize: false,
    isSettings: false,
    isShipping: false,
    isPayment: false,
  });

  const toggleClick = (key) => {
    setState((prevState) => ({
      [key]: !prevState[key],
    }));
    if (key === "isDashBoard") {
      navigator("/Dashboard");
    } else if (key === "isSupplier") {
      navigator("supplierListing");
    } else if (key === "isProduct") {
      navigator("");
    } else if (key === "isColor") {
      navigator("colors");
    } else if (key === "isSize") {
      navigator("general_Sizes");
    } else if (key === "isShipping") {
      navigator("shippingMethods");
    } else if (key === "isPayment") {
      navigator("paymentMethods");
    } else {
      console.log("object");
    }
  };

  // useEffect(() => {
  //   navigator("/");
  // }, []);

  return (
    <div className="sm:w-[30%] md:w-[25%] lg:w-[20%] border min-h-screen hidden lg:block">
      <div className="lg:text-2xl text-center text-2xl sm:text-xl md:p-5 md:text-xl p-5 font-semibold uppercase border-b">
        WholeSale EZ
      </div>
      <div className="w-[80%] mx-auto">
        <div>
          <div
            onClick={() => toggleClick("isDashBoard")}
            className={`flex my-3 p-3 rounded-lg items-center gap-4 cursor-pointer sm:p-1 ${
              state.isDashBoard ? "bg-[#A639394D]" : "bg-white"
            }`}
          >
            <div>
              <BiHomeAlt
                className={`${
                  state.isDashBoard ? "text-[#A63939]" : "text-black"
                }`}
              />
            </div>
            <div className="font-Mulish">General Dashboard</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm my-4">Users</div>
            <div
              onClick={() => toggleClick("isSupplier")}
              className={`flex justify-between rounded-lg p-2 cursor-pointer items-center ${
                state.isSupplier ? "bg-[#A639394D]" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div>
                  <AiOutlineUser
                    className={`${
                      state.isSupplier ? "text-[#A63939]" : "text-black"
                    }`}
                  />
                </div>
                <div className="font-Mulish">Suppliers</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-sm my-4">Catelog</div>
            <div className="flex flex-col gap-4">
              <div
                onClick={() => toggleClick("isColor")}
                className={`flex justify-between rounded-lg p-2 cursor-pointer items-center ${
                  state.isColor ? "bg-[#A639394D]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <AiOutlineUser
                      className={`${
                        state.isColor ? "text-[#A63939]" : "text-black"
                      }`}
                    />
                  </div>
                  <div className="font-Mulish">Colors</div>
                </div>
              </div>
              <div
                onClick={() => toggleClick("isSize")}
                className={`flex justify-between rounded-lg p-2 cursor-pointer items-center ${
                  state.isSize ? "bg-[#A639394D]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <AiOutlineUser
                      className={`${
                        state.isSize ? "text-[#A63939]" : "text-black"
                      }`}
                    />
                  </div>
                  <div className="font-Mulish">Sizes</div>
                </div>
              </div>
              <div
                onClick={() => {
                  toggleClick("isSettings");
                  setShowSettingDropdown((prev) => !prev);
                }}
                className={`flex justify-between rounded-lg p-2 cursor-pointer items-center ${
                  state.isSettings ? "bg-[#A639394D]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <CiSettings
                      className={`text-lg ${
                        state.isSettings ? "text-[#A63939]" : "text-black"
                      }`}
                    />
                  </div>
                  <div className="font-Mulish">Settings</div>
                </div>
                <div
                  className={`text-lg ${
                    state.isSettings ? "text-[#A63939]" : "text-black"
                  }`}
                >
                  {state.isSettings ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </div>
              </div>
              {showSettingDropdown && (
                <div className="w-[90%] mx-auto space-y-2">
                  <div
                    onClick={() => toggleClick("isShipping")}
                    className={`flex  gap-3 rounded-lg p-2 cursor-pointer items-center ${
                      state.isShipping ? "bg-[#A639394D]" : "bg-white"
                    }`}
                  >
                    <div>
                      <LiaShippingFastSolid
                        className={`text-lg ${
                          state.isShipping ? "text-[#A63939]" : "text-black"
                        }`}
                      />
                    </div>
                    Shipping Methods
                  </div>
                  <div
                    onClick={() => toggleClick("isPayment")}
                    className={`flex  gap-3 rounded-lg p-2 cursor-pointer items-center ${
                      state.isPayment ? "bg-[#A639394D]" : "bg-white"
                    }`}
                  >
                    <div>
                      <PiCreditCard
                        className={`text-lg ${
                          state.isPayment ? "text-[#A63939]" : "text-black"
                        }`}
                      />
                    </div>
                    Payment Methods
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

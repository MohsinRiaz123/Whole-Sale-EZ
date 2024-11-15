import { useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const NewColorForm = ({ showModal, setShowModal }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] relative">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Add New Color</h2>
          <div className="flex text-sm font-Mulish gap-1 mb-3 text-gray-500 items-center">
            Color list
            <AiOutlineRight />
            Add New Color
          </div>
        </div>
        <div className="border p-2 sm:p-4 rounded-lg">
          <form>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {/* Color name */}
              <div className="w-full   p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Color Name</label>
                <input type="text" className="outline-none" />
              </div>

              {/* Color code */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Color Code</label>
                <select className="outline-none bg-transparent">
                  <option disabled selected>
                    Select Color Code
                  </option>
                  <option value="#099799">#099799</option>
                  <option value="#15994E">#15994E</option>
                </select>
              </div>

              {/* Status */}
              <div className="w-full p-1 border border-gray-300 rounded flex flex-col">
                <label htmlFor="status" className="text-sm text-gray-500">
                  Status
                </label>
                <select
                  id="status"
                  className="outline-none bg-transparent"
                  aria-label="Status"
                >
                  <option disabled selected>
                    Select Status
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <div
                className=" border px-5 py-2 sm:px-4 sm:py-2 rounded-full mt-4 flex items-center justify-center cursor-pointer text-xs md:text-base"
                onClick={() => setShowModal(false)}
              >
                cancel
              </div>
              <button
                type="submit"
                className=" bg-[#A63939] text-white px-5 sm:px-4 py-2 rounded-3xl mt-4 text-xs md:text-base"
              >
                Save and add another
              </button>
              <button
                type="submit"
                className=" bg-[#A63939] text-white px-5 sm:px-4 py-2 rounded-3xl mt-4 text-xs md:text-base"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default NewColorForm;

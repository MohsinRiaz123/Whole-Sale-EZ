import { useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const OrderDetailForm = ({ showModal, setShowModal }) => {
  const orderData = [
    {
      productName: "Mobile Phone",
      amount: "$140",
      quantity: "10",
      status: "Delivered",
      image:
        "https://sparx.pk/cdn/shop/files/NeoxBlue.jpg?v=1710401240&width=2208",
    },
    {
      productName: "Charger",
      amount: "$14",
      quantity: "10",
      status: "Delivered",
      image:
        "https://nexos.pk/cdn/shop/files/A7408654_a5842e28-5368-410c-89b9-33086edc3ffa.png?v=1719841749",
    },
    {
      productName: "laptop",
      amount: "$1400",
      quantity: "5",
      status: "Pending",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2024/07/editing-laptop-2048px-233661.jpg?auto=webp&quality=75&width=1024",
    },
    {
      productName: "Water bottle",
      amount: "$140",
      quantity: "10",
      status: "Delivered",
      image:
        "https://monos.com/cdn/shop/products/Kiyo-UVC-Bottle-750ml-Graphite_900x.png?v=1678602679",
    },
  ];

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[50%] relative">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <div className="flex text-sm font-Mulish gap-1 mb-3 text-gray-500 items-center">
            Orders list
            <AiOutlineRight />
            Order Details
          </div>
        </div>
        <div className="border p-2 sm:p-4 rounded-lg text-xs lg:text-base">
          <div className="border-b flex gap-6 pb-4">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="text-gray-300 pb-3">Shipping Address</div>
              <div>3891 Ranchview Dr. Richardson, California 62639</div>
            </div>
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="text-gray-300 pb-3">Delivery method</div>
              <div>FedEx 3 days, $15</div>
            </div>
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="text-gray-300 pb-3">Discount</div>
              <div>10% personal promo code</div>
            </div>
          </div>
          <div className="flex justify-between py-3 border-b flex-wrap gap-3">
            <div>
              <div className="text-gray-300 pb-1 sm:pb-3">Order ID</div>
              <div>#908765</div>
            </div>
            <div>
              <div className="text-gray-300 pb-1 sm:pb-3">Date</div>
              <div>Sep 15, 2023</div>
            </div>
            <div>
              <div className="text-gray-300 pb-1 sm:pb-3">Time</div>
              <div>12:02:34 PM</div>
            </div>
            <div>
              <div className="text-gray-300 pb-1 sm:pb-3">Amount</div>
              <div>$300</div>
            </div>
            <div>
              <div className="text-gray-300 pb-1 sm:pb-3">Payment Method</div>
              <div>Credit Card</div>
              <div>2345 2367 3922 3678</div>
            </div>
          </div>
          {/* order heading */}
          <div className="font-semibold py-2">Order Details (4 items)</div>
          {/* order listing */}
          <div>
            <div className="text-gray-300 pb-3 grid grid-cols-4">
              <div>Product Name</div>
              <div>Amount</div>
              <div>Quantity</div>
              <div>Status</div>
            </div>

            {orderData.map((item, i) => (
              <div className="pb-3 grid grid-cols-4" key={i}>
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-10 h-10 rounded-full hidden lg:block"
                  />
                  {item.productName}
                </div>
                <div>{item.amount}</div>
                <div>{item.quantity}</div>
                <div>
                  <span
                    className={`px-2 py-1 rounded-lg ${
                      item.status === "Delivered"
                        ? "bg-green-200 text-green-800"
                        : item.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* close button */}
        <div className="flex justify-end">
          <div
            className="bg-[#A63939] text-white border px-6 py-3 rounded-full mt-4 flex items-center justify-center cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            Close
          </div>
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

export default OrderDetailForm;

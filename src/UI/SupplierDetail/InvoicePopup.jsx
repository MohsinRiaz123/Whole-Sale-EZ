// InvoicePopup.js
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const InvoicePopup = ({ invoice, onClose }) => {
  if (!invoice) return null; // Return null if no invoice is provided

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-5 w-[95%] sm:w-3/4 2xl:w-1/2 ">
        <div>
          <h2 className="text-lg font-semibold ">Invoice Details</h2>
          <div className="flex text-sm gap-1 mb-3 text-gray-500 items-center">
            <p onClick={onClose} className="cursor-pointer">
              Invoice list
            </p>
            <AiOutlineRight />
            <p className="cursor-pointer">Invoice Details</p>
          </div>
        </div>
        <div className="sm:my-10 border-b border-gray-200 w-fit pr-28">
          <label className="text-gray-400">Invoice no.</label>
          <p>{invoice.invoiceid}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-5 ">
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Company name</label>
            <p>{invoice.companyName}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Shipping Address</label>
            <p>{invoice.address}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Date</label>
            <p>{invoice.date}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Order Id </label>
            <p>{invoice.ID}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Bill to</label>
            <p>{invoice.billTo}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Payment Methord</label>
            <p>{invoice.payment.cardType}</p>
            <p>{invoice.payment.cardNo}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Shipping</label>
            <p>$ {invoice.shipping}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Taxes</label>
            <p>{invoice.tax}</p>
          </div>{" "}
          <div className="border-b border-gray-200 p-1">
            <label className="text-gray-400">Total Amount</label>
            <p>{invoice.Bill}</p>
          </div>
        </div>
        <div className="text-end">
          <button
            onClick={onClose}
            className="bg-[#A63939] text-white px-4 py-2 rounded-full mt-4 "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePopup;

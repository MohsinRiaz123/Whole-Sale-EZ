import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import filter from "../../assets/Images/filter.png";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import InvoicePopup from "./InvoicePopup";

const Invoice = () => {
  const initialInvoice = [
    {
      invoiceid: "#508015",
      ID: "#908765",
      companyName: "Jacob & Co.",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      shipping: 15,
      tax: 20,
      Bill: 300,
      billTo: "John Doe",
      payment: {
        cardType: "Credit Card",
        cardNo: "2345 2367 3922 3678",
      },
      date: "Sep 15, 2023",
      ageing: "Net 30",
      status: "Overdue",
    },
    {
      invoiceid: "#508016",
      ID: "#908766",
      companyName: "Tech Solutions",
      address: "4567 Technology Way, Silicon Valley, California 94043",
      shipping: 25,
      tax: 15,
      Bill: 450,
      billTo: "Jane Smith",
      payment: {
        cardType: "Debit Card",
        cardNo: "3456 7890 1234 5678",
      },
      date: "Sep 20, 2023",
      ageing: "Net 45",
      status: "Pending",
    },
    {
      invoiceid: "#508017",
      ID: "#908767",
      companyName: "Home Goods Co.",
      address: "789 Home St. Springfield, Illinois 62701",
      shipping: 10,
      tax: 18,
      Bill: 220,
      billTo: "Alice Johnson",
      payment: {
        cardType: "Credit Card",
        cardNo: "1234 5678 9876 5432",
      },
      date: "Sep 22, 2023",
      ageing: "Net 30",
      status: "Invoice Paid",
    },
    {
      invoiceid: "#508018",
      ID: "#908768",
      companyName: "Green Landscaping",
      address: "101 Greenway Blvd. Miami, Florida 33101",
      shipping: 30,
      tax: 12,
      Bill: 350,
      billTo: "Robert Brown",
      payment: {
        cardType: "PayPal",
        cardNo: "user@paypal.com",
      },
      date: "Sep 25, 2023",
      ageing: "Net 60",
      status: "Invoice Paid",
    },
    {
      invoiceid: "#508019",
      ID: "#908769",
      companyName: "Fashion Hub",
      address: "234 Fashion Ave. New York, New York 10001",
      shipping: 5,
      tax: 25,
      Bill: 400,
      billTo: "Emily Davis",
      payment: {
        cardType: "Credit Card",
        cardNo: "4567 8901 2345 6789",
      },
      date: "Sep 30, 2023",
      ageing: "Net 30",
      status: "Pending",
    },
    {
      invoiceid: "#508020",
      ID: "#908770",
      companyName: "Digital Media",
      address: "567 Media St. Los Angeles, California 90001",
      shipping: 20,
      tax: 20,
      Bill: 600,
      billTo: "Michael Wilson",
      payment: {
        cardType: "Credit Card",
        cardNo: "7890 1234 5678 9012",
      },
      date: "Oct 05, 2023",
      ageing: "Net 30",
      status: "Invoice Paid",
    },
    {
      invoiceid: "#508021",
      ID: "#908771",
      companyName: "Automotive Parts",
      address: "890 Auto Dr. Detroit, Michigan 48201",
      shipping: 15,
      tax: 10,
      Bill: 250,
      billTo: "Jessica Taylor",
      payment: {
        cardType: "Debit Card",
        cardNo: "2345 6789 1234 5678",
      },
      date: "Oct 10, 2023",
      ageing: "Net 30",
      status: "Pending",
    },
    {
      invoiceid: "#508022",
      ID: "#908772",
      companyName: "Healthy Foods",
      address: "123 Nutrition Rd. Portland, Oregon 97201",
      shipping: 10,
      tax: 15,
      Bill: 180,
      billTo: "Chris Martin",
      payment: {
        cardType: "Credit Card",
        cardNo: "5678 9012 3456 7890",
      },
      date: "Oct 12, 2023",
      ageing: "Net 30",
      status: "Invoice Paid",
    },
    {
      invoiceid: "#508023",
      ID: "#908773",
      companyName: "Event Planners",
      address: "345 Event Blvd. Seattle, Washington 98101",
      shipping: 25,
      tax: 20,
      Bill: 750,
      billTo: "Laura Wilson",
      payment: {
        cardType: "PayPal",
        cardNo: "user@paypal.com",
      },
      date: "Oct 15, 2023",
      ageing: "Net 30",
      status: "Invoice Paid",
    },
    {
      invoiceid: "#508024",
      ID: "#908774",
      companyName: "Smart Devices",
      address: "678 Gadget Rd. Austin, Texas 73301",
      shipping: 20,
      tax: 12,
      Bill: 550,
      billTo: "Daniel White",
      payment: {
        cardType: "Credit Card",
        cardNo: "3456 7890 1234 5678",
      },
      date: "Oct 20, 2023",
      ageing: "Net 45",
      status: "Pending",
    },
    {
      invoiceid: "#508025",
      ID: "#908775",
      companyName: "Software Solutions",
      address: "901 Software St. Boston, Massachusetts 02101",
      shipping: 15,
      tax: 18,
      Bill: 450,
      billTo: "Nancy Harris",
      payment: {
        cardType: "Credit Card",
        cardNo: "6789 0123 4567 8901",
      },
      date: "Oct 25, 2023",
      ageing: "Net 30",
      status: "Invoice Paid",
    },
    {
      invoiceid: "#508026",
      ID: "#908776",
      companyName: "Home Appliances",
      address: "234 Appliance Ave. Chicago, Illinois 60601",
      shipping: 10,
      tax: 20,
      Bill: 320,
      billTo: "Steven Clark",
      payment: {
        cardType: "Debit Card",
        cardNo: "1234 5678 9012 3456",
      },
      date: "Oct 30, 2023",
      ageing: "Net 30",
      status: "Invoice Paid",
    },
    {
      invoiceid: "#508027",
      ID: "#908777",
      companyName: "Interior Design",
      address: "567 Design St. San Francisco, California 94101",
      shipping: 30,
      tax: 15,
      Bill: 600,
      billTo: "Sarah Lewis",
      payment: {
        cardType: "Credit Card",
        cardNo: "2345 6789 0123 4567",
      },
      date: "Nov 02, 2023",
      ageing: "Net 60",
      status: "Pending",
    },
    {
      invoiceid: "#508028",
      ID: "#908778",
      companyName: "Online Retail",
      address: "890 Retail Rd. Denver, Colorado 80201",
      shipping: 15,
      tax: 10,
      Bill: 180,
      billTo: "Kevin Young",
      payment: {
        cardType: "Credit Card",
        cardNo: "6789 0123 4567 8901",
      },
      date: "Nov 05, 2023",
      ageing: "Net 30",
      status: "Overdue",
    },
    {
      invoiceid: "#508029",
      ID: "#908779",
      companyName: "Logistics Services",
      address: "123 Logistics Dr. Orlando, Florida 32801",
      shipping: 20,
      tax: 20,
      Bill: 400,
      billTo: "Megan Scott",
      payment: {
        cardType: "Debit Card",
        cardNo: "3456 7890 1234 5678",
      },
      date: "Nov 10, 2023",
      ageing: "Net 30",
      status: "Invoice Paid",
    },
  ];

  const [invoice, setInvoice] = useState(initialInvoice); // Holds the list of invoices
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [filterStatus, setFilterStatus] = useState(""); // Selected filter status
  const [searchQuery, setSearchQuery] = useState(""); // Search query for ID and company name
  const [isFilterOpen, setIsFilterOpen] = useState(false); // For filter dropdown visibility
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Search filter: filter by invoice ID or company name
  const filteredInvoices = invoice.filter((inv) => {
    const matchesSearch =
      inv.ID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.companyName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = !filterStatus || inv.status === filterStatus; // If no filter, show all status

    return matchesSearch && matchesStatus; // Both search and status filters
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  const indexOfLastInvoice = currentPage * itemsPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );

  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClick = (invoice) => {
    setSelectedInvoice(invoice); // Set selected invoice to show in popup
  };

  const closePopup = () => {
    setSelectedInvoice(null); // Close the popup
  };

  return (
    <div>
      {/* Main content */}
      <div className="relative w-full mx-auto">
        {/* Heading */}
        <div className="flex gap-3 items-center my-7">
          <div className="text-xl font-semibold pt-1">Invoices List</div>
        </div>

        <div className="border p-2 rounded-lg shadow-md space-y-10">
          {/* Search bar and filter dropdown */}
          <div className="sm:flex justify-between px-6 space-y-3 lg:space-y-0">
            <div className="flex items-center px-3 bg-gray-100 rounded-full gap-2">
              <div>
                <GoSearch />
              </div>
              <input
                type="text"
                placeholder="Search by ID or Company Name"
                className="outline-none bg-gray-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative">
              <div
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="flex items-center border p-2 px-3 gap-2 rounded-full cursor-pointer"
              >
                <img src={filter} alt="Filter" />
                <div className="text-xs">Filter</div>
              </div>

              {/* Filter Dropdown */}
              {isFilterOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg w-32 p-2 z-10">
                  <div
                    onClick={() => setFilterStatus("")}
                    className="cursor-pointer p-2 hover:bg-[#A639394D]"
                  >
                    All
                  </div>
                  <div
                    onClick={() => setFilterStatus("Invoice Paid")}
                    className="cursor-pointer p-2 hover:bg-[#A639394D]"
                  >
                    Invoice Paid
                  </div>
                  <div
                    onClick={() => setFilterStatus("Pending")}
                    className="cursor-pointer p-2 hover:bg-[#A639394D]"
                  >
                    Pending
                  </div>
                  <div
                    onClick={() => setFilterStatus("Overdue")}
                    className="cursor-pointer p-2 hover:bg-[#A639394D]"
                  >
                    Overdue
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Invoice listing */}
          <div className="grid grid-cols-6 text-gray-400 h-[40px] border-b text-xs lg:text-base">
            <p className="text-start">Order ID</p>
            <p className="text-center">Company Name</p>
            <p className="text-center">Billing Amount</p>
            <p className="text-center">Date</p>
            <p className="text-center">Ageing Date</p>
            <p className="text-center">Status</p>
          </div>

          <div className="space-y-3 text-xs lg:text-base">
            {currentInvoices.map((val, i) => (
              <div
                key={i}
                className="grid grid-cols-6 h-[50px] border-b items-center cursor-pointer"
                onClick={() => handleClick(val)}
              >
                <p className="text-start">{val.ID}</p>
                <p className="text-center">{val.companyName}</p>
                <p className="text-center">${val.Bill}</p>
                <p className="text-center">{val.date}</p>
                <p className="text-center">{val.ageing}</p>
                <p
                  className={`text-center ${
                    val.status === "Invoice Paid"
                      ? "text-green-500 bg-green-200"
                      : val.status === "Pending"
                      ? "text-yellow-500 bg-yellow-200"
                      : "text-red-500 bg-red-200"
                  }`}
                >
                  {val.status}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between my-4 text-xs sm:text-base">
            <div>
              <button
                onClick={() => handlePageChange("previous")}
                disabled={currentPage === 1}
                className={`flex gap-2 items-center mx-2 px-4 py-2 rounded ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black"
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
                className={`flex items-center gap-2 mx-2 px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-black"
                }`}
              >
                Next <GrFormNextLink />
              </button>
            </div>
          </div>

          {/* Invoice Popup */}
          {selectedInvoice && (
            <InvoicePopup invoice={selectedInvoice} onClose={closePopup} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;

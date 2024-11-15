import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { LuPlusCircle } from "react-icons/lu";
import filter from "../../assets/Images/filter.png";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Images/col1.png";
import img2 from "../../assets/Images/col2.png";
import img3 from "../../assets/Images/col3.png";
import img4 from "../../assets/Images/col4.png";
import img5 from "../../assets/Images/col5.png";
import img6 from "../../assets/Images/col6.png";
import AddProduct from "./AddProduct";

const Product = () => {
  const navigate = useNavigate();
  const initialProducts = [
    {
      img: img1,
      name: "jeans",
      category: "Clothing",
      cost: "10",
      price: "12",
      quantity: "120",
      status: "Active",
    },
    {
      img: img2,
      name: "Cotton jeans",
      category: "Clothing",
      cost: "8",
      price: "12",
      quantity: "100",
      status: "Active",
    },
    {
      img: img3,
      name: "Women Top",
      category: "Clothing",
      cost: "10",
      price: "20",
      quantity: "220",
      status: "Active",
    },
    {
      img: img4,
      name: "T shirt",
      category: "Clothing",
      cost: "12",
      price: "16",
      quantity: "150",
      status: "Inactive",
    },
    {
      img: img5,
      name: "Formal wear",
      category: "Clothing",
      cost: "20",
      price: "24",
      quantity: "50",
      status: "Inactive",
    },
    {
      img: img6,
      name: "Headphones",
      category: "Electronics",
      cost: "50",
      price: "56",
      quantity: "250",
      status: "Active",
    },
    {
      img: img4,
      name: "Sneakers",
      category: "Footwear",
      cost: "30",
      price: "40",
      quantity: "300",
      status: "Active",
    },
    {
      img: img5,
      name: "Backpack",
      category: "Accessories",
      cost: "15",
      price: "20",
      quantity: "150",
      status: "Active",
    },
    {
      img: img6,
      name: "Smartwatch",
      category: "Electronics",
      cost: "100",
      price: "120",
      quantity: "400",
      status: "Active",
    },
    {
      img: img1,
      name: "Wireless Mouse",
      category: "Electronics",
      cost: "25",
      price: "30",
      quantity: "200",
      status: "Active",
    },
    {
      img: img2,
      name: "Sunglasses",
      category: "Accessories",
      cost: "12",
      price: "15",
      quantity: "80",
      status: "Active",
    },
    {
      img: img3,
      name: "Leather Jacket",
      category: "Clothing",
      cost: "70",
      price: "90",
      quantity: "350",
      status: "Active",
    },
    {
      img: img1,
      name: "Wireless Mouse",
      category: "Electronics",
      cost: "25",
      price: "30",
      quantity: "200",
      status: "Active",
    },
    {
      img: img4,
      name: "Charger",
      category: "Electronics",
      cost: "10",
      price: "15",
      quantity: "100",
      status: "Active",
    },
    {
      img: img6,
      name: "Casual Shoes",
      category: "Footwear",
      cost: "40",
      price: "50",
      quantity: "200",
      status: "Active",
    },
  ];

  const [filterStatus, setFilterStatus] = useState(""); // Holds the selected filter value
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Controls dropdown visibility
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // Holds the product to edit

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter products based on status
  const filteredProducts = products.filter((product) => {
    if (!filterStatus) return true; // If no filter selected, show all
    return product.status.toLowerCase() === filterStatus.toLowerCase();
  });

  // Calculate total pages based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get current products (based on the filtered list)
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
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

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  const handleCategory = () => {
    navigate("Categories");
  };

  return (
    <div>
      <div className="relative w-full mx-auto">
        {/* Supplier Heading */}
        <div className="flex gap-3 items-center my-7">
          <div className="text-xl font-semibold pt-1">Product List</div>
        </div>

        <div className="border p-2 rounded-lg shadow-md space-y-10">
          <div className="sm:flex justify-between px-6 space-y-3 lg:space-y-0">
            {/* Search Bar */}
            <div className="flex items-center px-3 bg-gray-100 rounded-full gap-2">
              <div>
                <GoSearch />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none bg-gray-100"
                />
              </div>
            </div>

            {/* New Product and Filter Section */}
            <div className="flex flex-wrap gap-3 ">
              <button
                className="p-2 items-center border border-[#A63939] px-5 font-semibold rounded-full"
                onClick={handleCategory}
              >
                <div className="text-xs lg:test-md">View all Categories</div>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCurrentProduct(null); // Reset current product for new product
                    setShowModal(true);
                  }}
                  className="flex items-center border p-2 gap-2 rounded-full bg-[#A63939] text-white font-Mulish"
                >
                  <div>
                    <LuPlusCircle />
                  </div>
                  <div className="text-xs lg:test-md">Add New Product</div>
                </button>

                {showModal && (
                  <AddProduct
                    showModal={showModal}
                    setShowModal={setShowModal}
                    product={currentProduct}
                    setProducts={setProducts}
                  />
                )}

                {/* Filter Button */}
                <div className="relative">
                  <div
                    onClick={() => setIsFilterOpen((prev) => !prev)}
                    className="flex items-center border p-2 px-3 gap-2 rounded-full font-Mulish cursor-pointer"
                  >
                    <div>
                      <img src={filter} alt="Filter" />
                    </div>
                    <div className="text-xs lg:test-md">Filter</div>
                  </div>

                  {/* Filter Dropdown */}
                  {isFilterOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-lg w-24 p-2 z-10">
                      <div
                        onClick={() => {
                          setFilterStatus(""), setIsFilterOpen((prev) => !prev);
                        }}
                        className="cursor-pointer p-2 hover:bg-[#A639394D]"
                      >
                        All
                      </div>
                      <div
                        onClick={() => {
                          setFilterStatus("Active"),
                            setIsFilterOpen((prev) => !prev);
                        }}
                        className="cursor-pointer p-2 hover:bg-[#A639394D]"
                      >
                        Active
                      </div>
                      <div
                        onClick={() => {
                          setFilterStatus("Inactive"),
                            setIsFilterOpen((prev) => !prev);
                        }}
                        className="cursor-pointer p-2 hover:bg-[#A639394D]"
                      >
                        Inactive
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Listing */}
          <div className="grid grid-cols-7 text-gray-400 h-[40px] border-b text-xs lg:text-base">
            <p className="text-start">Product Name</p>
            <p className="text-center">Category Name</p>
            <p className="text-center">Cost</p>
            <p className="text-center">Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Status</p>
            <p className="text-center">Action</p>
          </div>

          <div className="space-y-3 text-xs lg:text-base">
            {currentProducts.map((val, i) => (
              <div
                key={i}
                className="grid grid-cols-7 h-[50px] border-b items-center"
              >
                <div className="flex text-start gap-2">
                  <img
                    src={val.img}
                    alt="img"
                    className="hidden sm:flex items-center justify-center"
                  />
                  {val.name}
                </div>
                <p className="text-center">{val.category}</p>
                <p className="text-center">${val.cost}</p>
                <p className="text-center">${val.price}</p>
                <p className="text-center">{val.quantity}</p>
                <p
                  className={`text-center ${
                    val.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {val.status}
                </p>
                <p className="sm:flex justify-center gap-3 sm:text-xl space-y-2 sm:space-y-0">
                  <RiEditLine onClick={() => handleEditProduct(val)} />
                  <RiDeleteBin6Line onClick={() => handleDeleteProduct(i)} />
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange("previous")}
              disabled={currentPage === 1}
              className="flex gap-1 items-center rounded  "
            >
              <GrFormPreviousLink /> Previous
            </button>

            <p className="text-sm">
              Page {currentPage} of {totalPages}
            </p>

            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              className="flex gap-1 items-center rounded "
            >
              Next <GrFormNextLink />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

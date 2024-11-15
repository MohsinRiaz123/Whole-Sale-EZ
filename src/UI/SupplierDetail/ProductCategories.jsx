import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { LuPlusCircle } from "react-icons/lu";
import filter from "../../assets/Images/filter.png";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const ProductCategory = () => {
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [categories, setCategories] = useState([
    { name: "Electronics", status: "Active" },
    { name: "Clothing", status: "Inactive" },
    { name: "Sports Wear", status: "Active" },
    { name: "Food", status: "Active" },
    { name: "Beverages", status: "Inactive" },
    { name: "Electronics", status: "Active" },
    { name: "Clothing", status: "Inactive" },
    { name: "Sports Wear", status: "Active" },
    { name: "Home Appliances", status: "Inactive" },
    { name: "Home Appliances", status: "Inactive" },
    { name: "Books", status: "Active" },
    { name: "Furniture", status: "Inactive" },
    { name: "Toys", status: "Active" },
    { name: "Food", status: "Active" },
    { name: "Beverages", status: "Inactive" },
    { name: "Electronics", status: "Active" },
    { name: "Clothing", status: "Inactive" },
    { name: "Sports Wear", status: "Active" },
    { name: "Stationery", status: "Inactive" },
    { name: "Food", status: "Active" },
    { name: "Beverages", status: "Inactive" },
    { name: "Home Appliances", status: "Inactive" },
    { name: "Books", status: "Active" },
    { name: "Furniture", status: "Inactive" },
    { name: "Toys", status: "Active" },
    { name: "Stationery", status: "Inactive" },
    { name: "Books", status: "Active" },
    { name: "Furniture", status: "Inactive" },
    { name: "Toys", status: "Active" },
    { name: "Stationery", status: "Inactive" },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingCategory, setEditingCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [filterStatus, setFilterStatus] = useState(""); // Filter by status
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for toggling dropdown visibility
  const itemsPerPage = 10; // Number of items per page

  // Filter categories based on search query and status
  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesStatus = !filterStatus || category.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const indexOfLastCategory = currentPage * itemsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - itemsPerPage;
  const currentCategories = filteredCategories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProductList = () => {
    navigate("/Dashboard/supplierDetail/product");
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingCategory(categories[index].name);
    setShowCategory(true);
  };

  const handleDelete = (index) => {
    setCategories((prevCategories) =>
      prevCategories.filter((_, i) => i !== index)
    );
  };

  const handleSaveEdit = () => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === editingIndex ? { ...category, name: editingCategory } : category
      )
    );
    resetEditingState();
  };

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => [
      ...prevCategories,
      { name: newCategory, status: "Active" },
    ]);
    resetEditingState();
  };

  const resetEditingState = () => {
    setEditingIndex(null);
    setEditingCategory("");
    setShowCategory(false);
  };

  const handleFilterClick = () => {
    setDropdownVisible((prevState) => !prevState); // Toggle the dropdown visibility
  };

  const handleSelectStatus = (status) => {
    setFilterStatus(status);
    setDropdownVisible(false); // Close the dropdown after selecting a status
  };

  return (
    <div>
      {/* Main content */}
      <div className="relative w-full mx-auto">
        {/* Supplier heading */}
        <div className="flex gap-3 items-center my-7">
          <div className="text-xl font-semibold pt-1">Categories List</div>
        </div>
        <div className="border p-2 rounded-lg shadow-md space-y-10">
          <div className="sm:flex justify-between px-6 space-y-3 lg:space-y-0">
            {/* Search bar */}
            <div className="flex items-center px-3 bg-gray-100 rounded-full gap-2">
              <div>
                <GoSearch />
              </div>
              <input
                type="text"
                placeholder="Search by Name"
                className="outline-none bg-gray-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Filter and Add Category buttons */}
            <div className="flex gap-3">
              <button
                className="flex gap-2 items-center bg-[#A63939] text-white px-5 font-semibold rounded-full"
                onClick={() => {
                  setShowCategory(true);
                  setEditingIndex(null); // Ensure it's for adding a new category
                  setEditingCategory(""); // Reset the input
                }}
              >
                <LuPlusCircle />
                <span className="text-xs lg:text-md">Add new Category</span>
              </button>
              {showCategory && (
                <AddCategory
                  showModal={showCategory}
                  setShowModal={setShowCategory}
                  editingIndex={editingIndex}
                  editingCategory={editingCategory}
                  setEditingCategory={setEditingCategory}
                  handleSaveEdit={handleSaveEdit}
                  handleAddCategory={handleAddCategory}
                />
              )}
              <button
                className="flex items-center p-2 gap-2 rounded-full border border-[#A63939]"
                onClick={handleProductList}
              >
                <span className="text-xs lg:text-md">View Product List</span>
              </button>
              {/* Status filter */}
              <div
                className="relative flex items-center border p-2 px-3 gap-2 rounded-full"
                onClick={handleFilterClick}
              >
                <img src={filter} alt="" />
                <button className="outline-none ">Filter</button>
                {/* Dropdown menu */}
              </div>
              {dropdownVisible && (
                <div className="absolute bg-white border shadow-lg rounded-lg mt-12 right-0 p-2 w-32 z-10">
                  <button
                    onClick={() => handleSelectStatus("")}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-[#A639394D]"
                  >
                    All
                  </button>
                  <button
                    onClick={() => handleSelectStatus("Active")}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-[#A639394D]"
                  >
                    Active
                  </button>
                  <button
                    onClick={() => handleSelectStatus("Inactive")}
                    className="block w-full text-left px-3 py-1 text-sm hover:bg-[#A639394D]"
                  >
                    Inactive
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Category listing */}
          <div className="grid grid-cols-3 text-gray-400 h-[40px] border-b text-xs lg:text-base">
            <p className="text-start">Categories</p>
            <p className="text-center">Status</p>
            <p className="text-center">Action</p>
          </div>
          <div>
            {currentCategories.map((val, i) => (
              <div
                key={i}
                className="grid grid-cols-3 h-[40px] border-b text-xs lg:text-base items-center"
              >
                <p>{val.name}</p>
                <p
                  className={`text-center ${
                    val.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {val.status}
                </p>
                <p className="flex gap-4 mx-auto md:text-xl">
                  <RiEditLine
                    className="cursor-pointer mx-2"
                    onClick={() => handleEdit(i)}
                  />
                  <RiDeleteBin6Line
                    className="cursor-pointer"
                    onClick={() => handleDelete(i)}
                  />
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
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;

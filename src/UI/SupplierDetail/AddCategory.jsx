import React, { useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useFormik } from "formik";
import * as Yup from "yup";
const AddCategory = ({
  showModal,
  setShowModal,
  handleAddCategory,
  editingIndex,
  editingCategory,
  handleSaveEdit,
}) => {
  if (!showModal) return null;

  // Form validation schema
  const validationSchema = Yup.object({
    categoryName: Yup.string().required("Category name is required"),
    perPair: Yup.string().required("per Pair is required"),
    weight: Yup.string().required("Height is required"),
    color: Yup.string().required("Color is required"),
    haveSize: Yup.string().required("Have size are required"),
  });

  const formik = useFormik({
    initialValues: {
      categoryName: "",
      perPair: "",
      weight: "",
      color: "",
      haveSize: "",
    },
    validationSchema,
    validateOnChange: false, // Disable validation on change
    validateOnBlur: false, // Disable validation on blur
    onSubmit: (values) => {
      if (editingIndex !== null) {
        handleSaveEdit(values);
      } else {
        handleAddCategory(values.categoryName); // Adjusted to only add category name
      }
      setShowModal(false); // Close modal after submission
    },
  });
  useEffect(() => {
    formik.setFieldValue("categoryName", editingCategory);
  }, [editingCategory]);
  const displayError = Object.values(formik.errors).length > 0;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] relative">
        <div className="mb-4">
          {editingCategory ? (
            <h2 className="text-xl font-semibold">Edit Category</h2>
          ) : (
            <h2 className="text-xl font-semibold">Add New Category</h2>
          )}

          <div className="flex text-sm gap-1 mb-3 text-gray-500 items-center">
            <p onClick={() => setShowModal(false)} className="cursor-pointer">
              Categories list
            </p>
            <AiOutlineRight />
            <p onClick={() => setShowModal(true)} className="cursor-pointer">
              Add new Category
            </p>
          </div>
        </div>
        <div className="border p-2 sm:p-4 rounded-lg">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Category Name</label>
                <input
                  type="text"
                  name="categoryName"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.categoryName}
                />
              </div>
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Per Pair</label>
                <select
                  name="perPair"
                  className="outline-none bg-transparent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.perPair}
                >
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Have Size</label>
                <select
                  name="haveSize"
                  className="outline-none bg-transparent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.haveSize}
                >
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Weight</label>
                <select
                  name="weight"
                  className="outline-none bg-transparent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.weight}
                >
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Color</label>
                <select
                  name="color"
                  className="outline-none bg-transparent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.color}
                >
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            {displayError && (
              <div className="text-red-500 mt-4 text-center">
                {Object.values(formik.errors)[0]}
              </div>
            )}
            <div className="flex justify-end gap-2">
              <div
                className="border px-4 py-2 rounded-full mt-4 flex items-center justify-center cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </div>
              <button
                type="submit"
                className="bg-[#A63939] text-white px-4 py-2 rounded-3xl mt-4"
              >
                {editingIndex !== null ? "Save" : "Add"}
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

export default AddCategory;

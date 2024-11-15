import { useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import upload_btn from "../../assets/Images/upload_button.png";
import { RxCross1 } from "react-icons/rx";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddProduct = ({ showModal, setShowModal, product }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;
    }
  };

  if (!showModal) return null;

  // Form validation schema
  const validationSchema = Yup.object({
    productName: Yup.string().required("Product name is required"),
    productCategory: Yup.string().required("Product category is required"),
    costPrice: Yup.number().required("Cost price is required").positive(),
    sellingPrice: Yup.number().required("Selling price is required").positive(),
    weight: Yup.number().required("Weight is required").positive(),
    quantity: Yup.number()
      .required("Quantity is required")
      .integer()
      .positive(),
    length: Yup.number().required("Length is required").positive(),
    width: Yup.number().required("Width is required").positive(),
    height: Yup.number().required("Height is required").positive(),
    color: Yup.string().required("Color is required"),
    status: Yup.string().required("Status is required"),
    sizes: Yup.string().required("Sizes are required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: product ? product.name : "",
      productCategory: product ? product.category : "",
      costPrice: product ? product.cost : "",
      sellingPrice: product ? product.price : "",
      weight: product ? product.weight : "",
      quantity: product ? product.quantity : "",
      length: product ? product.length : "",
      width: product ? product.width : "",
      height: product ? product.height : "",
      color: product ? product.color : "",
      status: product ? product.status : "",
      sizes: product ? product.sizes : "",
    },
    validationSchema,
    validateOnChange: false, // Disable validation on change
    validateOnBlur: false, // Disable validation on blur
    onSubmit: (values) => {
      console.log(values);
      console.log("Uploaded file:", fileName);
      setShowModal(false); // Close modal after submission
    },
  });

  const displayError = Object.values(formik.errors).length > 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] relative">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            {product ? "Edit" : "Add"} Product
          </h2>
          <div className="flex text-sm font-Mulish gap-1 mb-3 text-gray-500 items-center">
            <p onClick={() => setShowModal(false)} className="cursor-pointer">
              Products list
            </p>
            <AiOutlineRight />
            <p onClick={() => setShowModal(true)} className="cursor-pointer">
              {" "}
              {product ? "Edit Product" : "Add New Product"}
            </p>
          </div>
        </div>
        <div className="border p-2 sm:p-4 rounded-lg">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {/* Product Name */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.productName}
                />
              </div>
              {/* Product Category */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">
                  Product Category
                </label>
                <input
                  type="text"
                  name="productCategory"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.productCategory}
                />
              </div>
              {/* Cost Price */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Cost Price</label>
                <input
                  type="number"
                  name="costPrice"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.costPrice}
                />
              </div>
              {/* Selling Price */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Selling Price</label>
                <input
                  type="number"
                  name="sellingPrice"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sellingPrice}
                />
              </div>
              {/* Weight */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Weight (kg)</label>
                <input
                  type="text"
                  name="weight"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.weight}
                />
              </div>
              {/* Quantity */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quantity}
                />
              </div>
              {/* Length */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Length</label>
                <input
                  type="number"
                  name="length"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.length}
                />
              </div>
              {/* Width */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Width</label>
                <input
                  type="number"
                  name="width"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.width}
                />
              </div>
              {/* Height */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Height (inches)</label>
                <input
                  type="number"
                  name="height"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.height}
                />
              </div>
              {/* Color */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Color</label>
                <input
                  type="text"
                  name="color"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.color}
                />
              </div>
              {/* Status */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Status</label>
                <select
                  name="status"
                  className="outline-none bg-transparent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status}
                >
                  <option value=""></option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              {/* Sizes */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Sizes</label>
                <input
                  type="text"
                  name="sizes"
                  className="outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.sizes}
                />
              </div>
            </div>
            <div className="p-2 mt-4">
              <label htmlFor="uploadPhoto">Upload Photo</label>
              <div
                className="border border-dotted border-blue-600 p-6 flex justify-center items-center flex-col"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div>
                  <img src={upload_btn} alt="Upload Icon" />
                </div>
                <div>
                  Drag & Drop or{" "}
                  <span
                    onClick={handleFileSelect}
                    className="text-[#A63939] cursor-pointer"
                  >
                    choose file
                  </span>{" "}
                  to upload
                </div>
                <div className="text-gray-500">
                  Supported formats: Jpeg, png
                </div>
                {/* Hidden file input */}
                <input
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                {fileName && (
                  <div className="mt-2 text-sm text-gray-600">{fileName}</div>
                )}
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
                {product ? "Update" : "Add"}
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

export default AddProduct;

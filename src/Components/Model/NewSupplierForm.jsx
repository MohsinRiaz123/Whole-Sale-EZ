import { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import upload_btn from "../../assets/Images/upload_Button.png";
import { RxCross1 } from "react-icons/rx";
import { useFormik } from "formik";
import { supplierSchema } from "../../schema/SupplierSchema";

const NewSupplierForm = ({ showModal, setShowModal, supplier }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const handleFileSelect = () => {
    fileInputRef.current.click();
  };
  console.log(supplier);
  // drag and drop fun
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
      // Optionally, you can programmatically trigger the file input
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;
    }
  };
  // initial values
  const initialValues = {
    userName: "",
    companyName: "",
    EIN_No: "",
    phoneNo: "",
    address: "",
    country_list: "",
    state_list: supplier ? supplier.state_list : "",
    zipCode: supplier ? supplier.zipCode : "",
    paymentType: supplier ? supplier.paymentType : "",
    email: supplier ? supplier.email : "",
  };

  console.log(initialValues);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: supplierSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (errors, action) => {
      console.log(errors);
      action.resetForm();
      setShowModal(false);
    },
  });
  useEffect(() => {
    setFieldValue("userName", supplier?.userName);
  }, [supplier]);

  // console.log(errors);

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
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-h-[90%] overflow-y-auto relative">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Add New Supplier</h2>
          <div className="flex text-sm font-Mulish gap-1 mb-3 text-gray-500 items-center">
            Suppliers listing
            <AiOutlineRight />
            Add New Supplier
          </div>
        </div>
        <div className="border p-2 sm:p-4 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {/* Username */}
              <div className="w-full   p-1 border rounded flex flex-col">
                <label htmlFor="userName" className="text-sm text-gray-500">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  className="outline-none"
                  value={values?.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.userName && touched.userName ? (
                  <p className="text-red-600">{errors.userName}</p>
                ) : null} */}
              </div>

              {/* Company Name */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label htmlFor="companyName" className="text-sm text-gray-500">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="outline-none"
                  value={values.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.companyName && touched.companyName ? (
                  <p className="text-red-600">{errors.companyName}</p>
                ) : null} */}
              </div>

              {/* EIN No. */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label htmlFor="EIN_No" className="text-sm text-gray-500">
                  EIN No.
                </label>
                <select
                  name="EIN_No"
                  id="EIN_No"
                  className="outline-none bg-transparent"
                  value={values.EIN_No}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value=""></option>
                  <option value="546578">546578</option>
                  <option value="546579">546579</option>
                </select>
                {/* {errors.EIN_No && touched.EIN_No ? (
                  <p className="text-red-600">{errors.EIN_No}</p>
                ) : null} */}
              </div>

              {/* Phone No. */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label htmlFor="phoneNo" className="text-sm text-gray-500">
                  Phone No.
                </label>
                <input
                  type="number"
                  name="phoneNo"
                  id="phoneNo"
                  className="outline-none"
                  value={values.phoneNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.phoneNo && touched.phoneNo ? (
                  <p className="text-red-600">{errors.phoneNo}</p>
                ) : null} */}
              </div>

              {/* Address */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label htmlFor="address" className="text-sm text-gray-500">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="outline-none"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.address && touched.address ? (
                  <p className="text-red-600">{errors.address}</p>
                ) : null} */}
              </div>

              {/* Country */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label htmlFor="country_list" className="text-sm text-gray-500">
                  Country
                </label>
                <select
                  name="country_list"
                  id="country_list"
                  className="outline-none bg-transparent"
                  value={values.country_list}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value=""></option>
                  <option value="USA">United States</option>
                  <option value="Pakistan">Pakistan</option>
                </select>
                {/* {errors.country_list && touched.country_list ? (
                  <p className="text-red-600">{errors.country_list}</p>
                ) : null} */}
              </div>

              {/* State */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label htmlFor="state_list" className="text-sm text-gray-500">
                  State
                </label>
                <select
                  name="state_list"
                  id="state_list"
                  className="outline-none bg-transparent"
                  value={values.state_list}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value=""></option>
                  <option value="Florida">Florida</option>
                  <option value="California">California</option>
                </select>
                {/* {errors.state_list && touched.state_list ? (
                  <p className="text-red-600">{errors.state_list}</p>
                ) : null} */}
              </div>

              {/* Zip Code */}
              <div className="w-full p-1 border rounded flex flex-col">
                <label htmlFor="zipCode" className="text-sm text-gray-500">
                  Zip Code
                </label>
                <input
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  className="outline-none"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.zipCode && touched.zipCode ? (
                  <p className="text-red-600">{errors.zipCode}</p>
                ) : null} */}
              </div>

              {/* Payment Type */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label htmlFor="paymentType" className="text-sm text-gray-500">
                  Select Payment Type
                </label>
                <select
                  name="paymentType"
                  id="paymentType"
                  className="outline-none bg-transparent"
                  value={values.paymentType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value=""></option>
                  <option value="FedEx">FedEx Account</option>
                </select>
                {/* {errors.paymentType && touched.paymentType ? (
                  <p className="text-red-600">{errors.paymentType}</p>
                ) : null} */}
              </div>

              {/* Email ID */}
              <div className="w-full  p-1 border rounded flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-500">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="outline-none"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.email && touched.email ? (
                  <p className="text-red-600">{errors.email}</p>
                ) : null} */}
              </div>

              {/* Vendor
              <div className="w-full  col-span-2 p-1 border rounded flex flex-col">
                <label className="text-sm text-gray-500">Select Vendor</label>
                <select className="outline-none bg-transparent">
                  <option value=""></option>
                  <option value="Vendor A">Vendor A</option>
                </select>
              </div> */}
            </div>

            <div className="p-2 mt-4 pb-">
              <label htmlFor="uploadPhoto">Upload Photo</label>

              <div
                className="border border-dotted border-blue-600 rounded-md p-6 flex justify-center items-center flex-col"
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
            {errors && touched && (
              <p className="text-center text-red-500">
                {Object.values(errors)[0]}
              </p>
            )}
            <div className="flex justify-end gap-2">
              <div
                className=" border px-4 py-2 rounded-full mt-4 flex items-center justify-center cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                cancel
              </div>
              <button
                type="submit"
                className=" bg-[#A63939] text-white px-6 py-2 rounded-3xl mt-4"
              >
                {supplier ? "Update" : "Add"}
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

export default NewSupplierForm;

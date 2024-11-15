import React, { useState } from "react";
import login from "../assets/Images/login.png";
import logIn_logo from "../assets/Images/logIn_logo.png";
import circle from "../assets/Images/circles.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import { CiLock } from "react-icons/ci";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useFormik } from "formik";
import { LoginSchema } from "../schema/LoginSchema";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { toast, ToastContainer } from "react-toastify";  // Import toast and ToastContainer

// form initial values
const initialValues = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        // Check if email and password are both "admin"
        if (values.email === "admin@gmail.com" && values.password === "admin") {
          // If correct, navigate to /home
          navigate("/Dashboard");
        } else {
          // If incorrect, show error toast
          toast.error("Invalid email or password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
    });

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
        {/* Left Side - Image & Description */}
        <div className="bg-[#FFF4F1] hidden sm:block">
          <div className="w-full flex justify-center pt-20">
            <img
              src={login}
              alt="Login Illustration"
              className="w-[40%] h-[40%]"
            />
          </div>
          <div className="text-center px-8 py-14 font-bold text-xl">
            Welcome To Wholesale EZ
          </div>
          <div className="text-center px-8 pb-14">
            Welcome to Wholesale Ez, where efficiency meets innovation in
            wholesale trade. Discover a user-friendly platform designed to
            simplify your buying and selling experience. Begin your journey with
            confidence, knowing you have access to reliable support and
            streamlined operations.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="pt-10 sm:pt-20 w-full relative ">
          <div className="flex justify-center">
            <img src={logIn_logo} alt="Wholesale EZ Logo" className="mb-10" />
          </div>
          <div className="border w-[90%] lg:w-[60%] 2xl:w-[60%] mx-auto bg-white rounded-md shadow-lg p-10 sm:p-20 z-50 mt-10 relative">
            <div className="text-center text-xl font-semibold mb-6">
              Let's Sign You In
            </div>
            <form
              className="flex flex-col items-center space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded w-full max-w-md">
                <MdOutlineEmail />
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Test Email -> admin@gmail.com "
                  className="bg-gray-200 outline-none w-full"
                />
              </div>
              {errors.email && touched.email ? (
                <p className="text-red-600">{errors.email}</p>
              ) : null}

              <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded w-full max-w-md relative">
                <CiLock />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Test Password -> admin"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="bg-gray-200 outline-none w-full"
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3"
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              {errors.password && touched.password ? (
                <p className="text-red-600">{errors.password}</p>
              ) : null}

              <button
                className="bg-[#C30204] text-white py-2 px-4 rounded w-full max-w-md"
                type="submit"
              >
                Sign In
              </button>
              <ToastContainer />
            </form>
          </div>
          <img
            src={circle}
            alt="Decorative Circle"
            className="absolute bottom-0 right-0 w-[60%] h-[70%]"
          />
        </div>
      </div>

      {/* Footer - Social Links & Legal Links */}
      <div className="bg-[#F9F9F9] py-1 relative bottom-0 hidden sm:block">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8">
          {/* Left Section - Copyright */}
          <div className="text-sm text-gray-600">
            Copyrights © 2024 All Rights Reserved by{" "}
            <span className="font-semibold text-[#C30204]">Wholesale EZ</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 items-center">
            <FaTwitterSquare className="text-xl text-gray-600 hover:text-[#C30204]" />
            <FaInstagramSquare className="text-xl text-gray-600 hover:text-[#C30204]" />
            <FaFacebookSquare className="text-xl text-gray-600 hover:text-[#C30204]" />
            <FaLinkedin className="text-xl text-gray-600 hover:text-[#C30204]" />
            <FaYoutubeSquare className="text-xl text-gray-600 hover:text-[#C30204]" />
          </div>

          {/* Right Section - Policy Links */}
          <div className="text-sm text-gray-600 flex items-center space-x-2">
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

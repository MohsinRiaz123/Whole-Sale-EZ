import "./App.css";
import DashboardLayout from "./UI/Layout/DashboardLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupplierListing from "./Components/SupplierListing";
import GeneralDashBoard from "./Components/GeneralDashBoard";
import SupplierDetailLayout from "./UI/Layout/SupplierDetailLayout";
import Product from "./UI/SupplierDetail/Product";
import Invoice from "./UI/SupplierDetail/Invoice";
import Report from "./UI/SupplierDetail/Report";
import ProductCategory from "./UI/SupplierDetail/ProductCategories";
import ShippingMethord from "./Pages/ShippingMethord";
import Paymentmethod from "./Pages/Paymentmethod";
import Vendor from "./UI/SupplierDetail/Vendor";
import Warehouse from "./UI/SupplierDetail/Warehouse";
import Order from "./UI/SupplierDetail/Order";
import Color from "./Components/Color";
import SizeLayout from "./UI/Layout/SizeLayout";
import GeneralSize from "./UI/SizeDetail/GeneralSize";
import UKsize from "./UI/SizeDetail/UKsize";
import USsize from "./UI/SizeDetail/USsize";
import LogIn from "./UI/LogIn";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LogIn />} />

        {/* Admin Dashboard Routes */}
        <Route path="/Dashboard" element={<DashboardLayout />}>
          {/* General Dashboard */}
          <Route index element={<GeneralDashBoard />} />

          {/* Supplier Routes */}
          <Route path="supplierListing" element={<SupplierListing />} />

          {/* Supplier Detail Routes */}
          <Route path="supplierDetail" element={<SupplierDetailLayout />}>
            <Route index element={<Vendor />} />
            <Route path="warehouse" element={<Warehouse />} />
            <Route path="product" element={<Product />} />
            <Route path="product/Categories" element={<ProductCategory />} />
            <Route path="order" element={<Order />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="report" element={<Report />} />
          </Route>

          {/* Other Admin Settings */}
          <Route path="colors" element={<Color />} />
          <Route path="shippingMethods" element={<ShippingMethord />} />
          <Route path="paymentMethods" element={<Paymentmethod />} />

          {/* Size Settings Routes */}
          <Route path="general_Sizes" element={<SizeLayout />}>
            <Route index element={<GeneralSize />} />
            <Route path="UK_Sizes" element={<UKsize />} />
            <Route path="US_Sizes" element={<USsize />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

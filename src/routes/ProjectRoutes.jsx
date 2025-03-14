import React, { useEffect } from "react";
import AddAddress from "components/address/AddAddress";
import OrdersList from "pages/OrdersList/OrdersList";
import SelectPaymentMethod from "pages/SelectPaymentMethod";
import AboutUs from "pages/aboutUs/AboutUs";
import AddChild from "pages/addChild/Children";
import Cart from "pages/cart/Cart";
import Condition from "pages/condition/Condition";
import ContactUs from "pages/contactUs/ContactUs";
import Help from "pages/help/Help";
import Home from "pages/home/Home";
import LandingPage from "pages/landingPage/LandingPage";
import Login from "pages/login/Login";
import EventsOrder from "pages/oerder/events/EventsOrder";
import SchoolOrder from "pages/oerder/school/SchoolOrder";
import OrderDetails from "pages/orderDetails/OrderDetails";
import ProductDetails from "pages/productDetails/ProductDetails";
import SelectDate from "pages/selectDate/SelectData";
import SignUp from "pages/signUp/SignUp";
import Addresses from "pages/userAddress/Addresses";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import PageLayout from "./PageLayout";
import FAQ from "pages/FAQ/FAQ";
import NotFound from "pages/errors/notFound/NotFound";
import CartFinish from "pages/cartFinish/CartFinish";
import ConfirmEmail from "pages/confirmEmail/ConfirmEmail";
import EmailVerified from "pages/emailVerified/EmailVerified";
import ResetPassword from "pages/resetPassword/ResetPassword";

// AuthWrapper: Token kontrolü yapar ve yönlendirme yapar
const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const allowedPaths = ["/login", "/sign-up", "/landing", "/confirm-email", "/email-verified"]; // Token kontrolü yapılmayacak sayfalar
    if (!token && !allowedPaths.includes(window.location.pathname)) {
      navigate("/landing");
    }
  }, [navigate]);

  return children;
};

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Tüm sayfalar AuthWrapper içinde, ancak belirli sayfalar için token kontrolü yapılmaz */}
        <Route
          path="/"
          element={
            <AuthWrapper>
              <PageLayout />
            </AuthWrapper>
          }
          errorElement={<h1>error 500</h1>}
        >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/email-verified" element={<EmailVerified />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/order/event" element={<EventsOrder />} />
          <Route path="/order/school" element={<SchoolOrder />} />
          <Route path="/order/select-date" element={<SelectDate />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/child" element={<AddChild />} />
          <Route path="/cart-finish" element={<CartFinish />} />
          <Route path="/order-list" element={<OrdersList />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route
            path="/select-payment-method"
            element={<SelectPaymentMethod />}
          />
        </Route>

        {/* Not found sayfası */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
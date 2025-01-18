import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
// import LoginPage from "./components/login/LoginPage";
import CreateAccount from "./pages/CreateAccount";
// import Home from "./components/home/Home";
// import CreateProfile from "./components/onboard/CreateProfile";
// import UseCase from "./components/onboard/UseCase";
// import PrivateRoute from "./ProtectedRoutes";
import LandingPage from "./pages/LandingPage";
import VerifyEmail from "./pages/VerifyEmail";
import SignIn from "./pages/SignIn";
import ProductDetails from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrivateRoute from "./ProtectedRoutes";
import { useSelector } from "react-redux";

function AllRoutes() {
    const { items, totalAmount } = useSelector(state => state.cart)

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/auth/login" element={<SignIn />} />
            <Route path="/auth/register" element={<CreateAccount />} />
            <Route path="/checkout" element={<CheckoutPage cartArr={items} />} />

            {/* Protected routes */}
            <Route path="/products/:productId" element={<PrivateRoute element={<ProductDetails />} />} />
            {/* <Route path="/home" element={<PrivateRoute element={<Home />} />} /> */}
            {/* <Route
        path="/onboard/create-profile"
        element={<PrivateRoute element={<CreateProfile />} />}
      /> */}
            {/* <Route
        path="/onboard/use-case"
        element={<PrivateRoute element={<UseCase />} />}
      /> */}
        </Routes>
    );
}

AllRoutes.propTypes = {
    props: PropTypes.any,
};

export default AllRoutes;
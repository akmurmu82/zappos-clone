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

function AllRoutes() {
    const products = [
        { id: 1, name: "The North Face Metropolis Parka", category: "Women's", price: 300.00, imgSrc: "https://m.media-amazon.com/images/I/71Y-TwkSmuL._AC_SR920,736_.jpg" },
        { id: 2, name: "Nike Air Max 97", category: "Men's", price: 150.00, imgSrc: "https://m.media-amazon.com/images/I/717lS5IAi4L._AC_SR920,736_.jpg" },
        { id: 3, name: "New Balance Classic", category: "Unisex", price: 180.00, imgSrc: "https://m.media-amazon.com/images/I/61H1pcY1q2L._AC_SR920,736_.jpg" },
        { id: 4, name: "Polo RalphLoaren Kids", category: "Unisex", price: 180.00, imgSrc: "https://m.media-amazon.com/images/I/81UfIkZdpcL._AC_SR736,920_.jpg" },
        { id: 5, name: "UGG", category: "Men's", price: 109.95, imgSrc: "https://m.media-amazon.com/images/I/71YaRXs33jL._AC_SR920,736_.jpg" },
        { id: 6, name: "The North Face Metropolis Parka", category: "Women's", price: 300.00, imgSrc: "https://m.media-amazon.com/images/I/71Y-TwkSmuL._AC_SR920,736_.jpg" },
    ];
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/auth/login" element={<SignIn />} />
            <Route path="/auth/register" element={<CreateAccount />} />
            <Route path="/checkout" element={<CheckoutPage cartArr={products} />} />
            {/* Route for single product */}
            <Route path="/products/:productId" element={<ProductDetails />} />
            {/* Protected routes */}
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
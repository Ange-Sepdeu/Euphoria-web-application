import Category from "../screens/Category";
import Home from "../screens/Home";
import Products from "../screens/Products";
import Cart from "../screens/Cart";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ProductDetails from "../screens/ProductDetails";

export const ROUTES = [
    {
        route: "/",
        element: Home
    },
    {
        route: "category",
        element: Category
    },
    {
        route: "cart",
        element: Cart
    },
    {
        route: "category-products",
        element: Products
    },
    {
        route: "product-details",
        element: ProductDetails
    },
    {
        route: "login",
        element: Login
    },
    {
        route: "register",
        element: Register
    }
]
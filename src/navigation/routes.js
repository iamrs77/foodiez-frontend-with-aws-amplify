import React from 'react';
import Navbar from "../components/Navbar"
import Menu from "../components/Menu";
import Home from "../components/Home";
import Cart from "../components/Cart";
import VendorHome from "../components/vendorComponents/VendorHome";
import VendorNavbar from "../components/vendorComponents/VendorNavbar";
import OrderHistory from "../components/OrderHistory";
import MenuForm from "../components/vendorComponents/MenuForm";
import RestaurantForm from "../components/vendorComponents/RestaurantForm";

let routes = [
    {
        path: "/menu/:vendorId",
        userComponents: [< Navbar />, <Menu />],
        vendorComponents: [< VendorNavbar />, <Menu />],
    },
    {
        path: "/orderHistory",
        userComponents: [< Navbar />, <OrderHistory />],
        vendorComponents: [],
    },
    {
        path: "/cart",
        userComponents: [< Navbar />, <Cart />],
        vendorComponents: [],
    },
    {
        path: "/menu-form/:vendorId",
        userComponents: [],
        vendorComponents: [<VendorNavbar />, <MenuForm />],
    },
    {
        path: "/restaurant-form",
        userComponents: [],
        vendorComponents: [<VendorNavbar />, <RestaurantForm />],
    },
    {
        path: "/",
        userComponents: [< Navbar />, <Home />],
        vendorComponents: [<VendorNavbar />, <VendorHome />],
    },
]

export default routes
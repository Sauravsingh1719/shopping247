import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, House } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const totalItems = getTotalCartItems();

    return (
        <div className="navbar">
            <div className="h1">
                <h1>Shopping</h1>
            </div>
            <div className="links">
                <Link className="link" to="/">
                    <House size={32} />
                </Link>
                <Link className="link" to="/cart">
                    <ShoppingCart size={32} />
                    <span style={{ color: "white", fontSize: "13px", borderRadius: "50%", backgroundColor:"red", padding: "3px", position:"absolute", top:"9px", right:"65px" }}>{totalItems}</span>
                </Link>
            </div>
        </div>
    );
};

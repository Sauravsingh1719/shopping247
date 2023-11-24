import React, { useContext } from "react";
import { PRODUCTS } from "../shop/producsts";
import { Product } from "../shop/product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css"
import { Link } from "react-router-dom";
export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <h1>Cart Items</h1>
            <div className="cart-items">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ?
            <div className="checkout">
                <p>Subtotal:   {totalAmount} $</p>
                <button onClick={() => navigate("/")}> Continue Shopping</button>{" "}
                <Link to="/progress"><button> Checkout</button></Link>


            </div>
            : <h2>Your Cart is Empty</h2> }
        </div>

    )
};

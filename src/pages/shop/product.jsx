import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../context/shop-context";
export { ShopContextProvider } from "../../context/shop-context"
export const Product = (props) => {
    const { id, productName, price, productImage, category, }  = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    return( 
    <div className="product">
    <div className="card">
    <img src={productImage}  alt=""/>
    <div className="descripiton">
        <p><b>{productName}</b></p>
        <p>{price}$</p>
    </div>
    <button onClick={() => addToCart(id)}>Add to Cart{cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
        </div>
    </div>
    )

};
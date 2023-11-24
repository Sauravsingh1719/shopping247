import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <Link className="link" to="/" > Home</Link>
            <Link className="link" to="/cart" > Cart</Link>
            <h3>Made with ❤️ in india </h3>
        </div>
    )
}
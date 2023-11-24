import React from "react";
import CategoryOptions from "./CategoryOptions";
import { PRODUCTS } from "./producsts";
import { Product } from "./product.jsx";

export const Shop = () => {

    const category = [
        {name: "Fashion", imageURL: "https://img.freepik.com/free-psd/fashion-shopping-background_23-2150752486.jpg?t=st=1700269469~exp=1700270069~hmac=a4567668d2c737e218244955c920a58347d1f81fe9438e29d81c6086645bdb86", link:"Fashion"},
        {name: "Mobile", imageURL: "https://img.freepik.com/free-psd/kawaii-3d-object-icon_23-2150565754.jpg?t=st=1700269925~exp=1700270525~hmac=e9019d7afe71140833db77346c35d820cdfc2b2b2a04de5d793542ed05ed4ef3", link:"/Mobile"},
        {name: "Laptop", imageURL: "https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150713937.jpg?t=st=1700234597~exp=1700238197~hmac=f250cac0eb43f6d1f259a4d7a8665edffc0929c157a1afa774599171451986b3&w=900", link:"/Laptop"},
        {name: "Appliances", imageURL: "https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150728030.jpg?t=st=1700270086~exp=1700273686~hmac=b969db50ef51dc35f099a812d69c7c850d949086365f1f813780db4d322e4c49&w=900", link:"/Appliances"},
        {name: "Furniture", imageURL: "https://img.freepik.com/premium-photo/photo-modern-luxury-arm-chair-furniture-design_763111-22113.jpg?w=900", link:"/Furniture"},
    ];

    return (
      
    <div className="Shop">
    <div  style={{ width: '100%', flex: '0 0 100%', marginTop: '10px' }}>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d5a2a6481656bb58.jpeg?q=20"
              alt="prod"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <CategoryOptions category={category} />
          <div className="products" style={{display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "80px",
          margin: "50px auto",
          maxWidth: "1200px",}}>
                {PRODUCTS.map((product) => (
                  <Product data = {product}/>
                ))}
          </div>
    </div>
    );
};

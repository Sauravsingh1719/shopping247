import React from "react";
import { Product } from "./product";
import { getFashionProducts } from "./FashionProducts";
import "./fashion.css";
import CategoryOptions from "./CategoryOptions";
import "./category.css"



const Fashion = () => {
  const fashionProducts = getFashionProducts();
  const category = [
    {name: "Fashion", imageURL: "https://img.freepik.com/free-psd/fashion-shopping-background_23-2150752486.jpg?t=st=1700269469~exp=1700270069~hmac=a4567668d2c737e218244955c920a58347d1f81fe9438e29d81c6086645bdb86", link:""},
    {name: "Mobile", imageURL: "https://img.freepik.com/free-psd/kawaii-3d-object-icon_23-2150565754.jpg?t=st=1700269925~exp=1700270525~hmac=e9019d7afe71140833db77346c35d820cdfc2b2b2a04de5d793542ed05ed4ef3", link:"/Mobile"},
    {name: "Laptop", imageURL: "https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150713937.jpg?t=st=1700234597~exp=1700238197~hmac=f250cac0eb43f6d1f259a4d7a8665edffc0929c157a1afa774599171451986b3&w=900", link:"/Laptop"},
    {name: "Appliances", imageURL: "https://img.freepik.com/free-photo/3d-rendering-isometric-house_23-2150728030.jpg?t=st=1700270086~exp=1700273686~hmac=b969db50ef51dc35f099a812d69c7c850d949086365f1f813780db4d322e4c49&w=900", link:"/Appliances"},
    {name: "Furniture", imageURL: "https://img.freepik.com/premium-photo/photo-modern-luxury-arm-chair-furniture-design_763111-22113.jpg?w=900", link:"/Furniture"},
];

return (
   <div>
   <CategoryOptions category={category} />
    <div className="products">
     
        {fashionProducts.map((product) =>(
            <Product key={product.id} data={product} />
        ))}
    </div>
    </div>
);


};

export default Fashion;
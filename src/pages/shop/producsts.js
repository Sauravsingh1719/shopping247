export const getProductsByCategory = (category) => {
    return PRODUCTS.filter((product) => product.category === category);
};
export const PRODUCTS = [
    {
        id: 1,
        productName: "Iphone",
        price: 999.0,
        productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609",
        category: "Mobiles"
    },
    {
        id: 2,
        productName: "Asus Zenbook",
        price: 2999.0,
        productImage: "https://dlcdnwebimgs.asus.com/gain/fd2fbbd0-6e19-4b9e-85e4-5b564b672789/",
        category: "Laptops"
    },
    {
        id: 3,
        productName: "Peter England Shirt",
        price: 99.0,
        productImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/g/1/s-frml-st2-vebnor-original-imagqww4acg7jnvy.jpeg?q=70",
        category: "Fashion"
    },
    {
        id: 4,
        productName: "Whirpool Genius",
        price: 199.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/4/q/7/-original-imagmxh2kv35bskc.jpeg?q=70",
        category: "Appliances"
    },
    {
        id: 5,
        productName: "Moto edge 40 Neo",
        price: 299.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/p/r/r/edge-40-neo-payj0002in-motorola-original-imagtkzh8zrvp3uj.jpeg?q=70",
        category: "Mobiles"
    },
    {
        id: 6,
        productName: "Realme 5g",
        price: 199.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70",
        category: "Mobiles"
    },
    {
        id: 7,
        productName: "Samsung s22",
        price: 199.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70",
        category: "Mobiles"
    },
    {
        id: 8,
        productName: "Llyod Washing Machine",
        price: 349.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/u/w/9/-original-imagzuah9ze4gapm.jpeg?q=70",
        category: "Appliances"
    },
    {
        id: 9,
        productName: "Fan",
        price: 49.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/fan/h/7/t/-original-imagryfygsaggrmh.jpeg?q=70",
        category: "Appliances"
    },
    {
        id: 10,
        productName: "Crompton Geyser",
        price: 159.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
        category: "Appliances"
    },
    {
        id: 11,
        productName: "Aquaguard R.O.",
        price: 129.0,
        productImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/water-purifier/h/u/3/glory-aquaguard-original-imagnc64fcqauhgq.jpeg?q=70",
        category: "Appliances"
    },
    {
        id: 12,
        productName: "Dress",
        price: 39.0,
        productImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/g/v/v/m-310tk6042-selvia-original-imagugkuhfc8nphp.jpeg?q=70",
        category: "Fashion"
    },
    {
        id: 13,
        productName: "Dress",
        price: 49.0,
        productImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/d/m/u/s-w-c-v-designer-original-imagh45qrpgfk7jr.jpeg?q=70",
        category: "Fashion"
    },
    {
        id: 14,
        productName: "Cargo",
        price: 29.0,
        productImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/j/o/q/28-attrective-army-men-cargo-with-5pockets-tiptoup-original-imagge9ea3sfpzwx.jpeg?q=70",
        category: "Fashion"
    },
    {
        id: 15,
        productName: "T-shirt",
        price: 19.0,
        productImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/y/t/l-men-polo-neck-full-tshirt-riya-gold-original-imagpfhzwnhvt26k.jpeg?q=70",
        category: "Fashion"
    },
    {
        id: 16,
        productName: "Shorts",
        price: 9.0,
        productImage: "https://rukminim2.flixcart.com/image/832/832/l1zc6fk0/short/k/8/b/l-solid-men-black-light-grey-sports-short-adrenex-original-imagdf9hrdjeuevj.jpeg?q=70",
        category: "Fashion"
    }
    
]
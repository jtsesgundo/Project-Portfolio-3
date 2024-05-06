const items = [
    {
        product_no: 1,
        product_name: "NBA All Star Echo Clog",
        product_price: "₱ 4,796",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/1.NBA All Star Echo Clog.JPG",
    },
    {
        product_no: 2,
        product_name: "Classic Sandal",
        product_price: "₱ 1,596",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/2.Classic Sandal in Black.webp",
    },
    {
        product_no: 3,
        product_name: "Classic Clog in Sulphur",
        product_price: "₱ 1,999",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/3.Classic Clog in Sulphur.webp",
    },
    {
        product_no: 4,
        product_name: "Classic Spray Dye Clog",
        product_price: "₱ 1,999",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/4.Classic Spray Dye Clog in White Multi.webp",
    },
    {
        product_no: 5,
        product_name: "Classic Spray Dye",
        product_price: "₱ 1,499",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/5.Classic Spray Dye Sandal in White.webp",
    },
    {
        product_no: 6,
        product_name: "Classic Crush Slide",
        product_price: "₱ 3,745",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/6.Classic Crush Slide in Bone.webp",
    },
    {
        product_no: 7,
        product_name: "Kids Jurassic World", 
        product_price: "₱ 2,396",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/7.Kids Jurassic World Classic Clog in Sand.webp",
    },
    {
        product_no: 8,
        product_name: "Pringles x Crocs",
        product_price: "₱ 2,396",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/8.Pringles x Crocs Classic Clog.webp",
    },
    {
        product_no: 9,
        product_name: "Classic Crush Clog",
        product_price: "₱ 1,999",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/9.Classic Crush Clog in Black.webp",
    },
    {
        product_no: 10,
        product_name: "Crush High Shine Clog",
        product_price: "₱ 4,745",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/10.Crush High Shine Clog.webp",
    },
    {
        product_no: 11,
        product_name: "Classic Slide in Black",
        product_price: "₱ 1,596",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/11.Classic Slide in Black.webp",
    },
    {
        product_no: 12,
        product_name: "Translucent Marbled",
        product_price: "₱ 1,999",
        product_desc: "Description",
        product_category: "Men, Women, Kids",
        product_image: "img/12.Classic Translucent Marbled Clog in Sulphur Multi.webp",
    },



  
]

let cartItems = [];
if(localStorage.getItem("shopping_cart")){
    cartItems = JSON.parse(localStorage.getItem("shopping_cart"));
}
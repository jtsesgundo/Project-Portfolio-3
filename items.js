const items = [
    {
        product_no: 1,
        product_name: "NBA All Star Echo Clog",
        product_price: "₱ 4,796",
        product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facere sint quis? Soluta unde quae sequi vero non labore vitae autem, asperiores expedita inventore cumque. Explicabo earum quas facere ea.",
        product_image: "img/1. NBA All Star Echo Clog.JPG",
    },
    {
        product_no: 2,
        product_name: "Sample Product 2",
        product_price: 500,
        product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facere sint quis? Soluta unde quae sequi vero non labore vitae autem, asperiores expedita inventore cumque. Explicabo earum quas facere ea.",
        product_image: "img/2.GA-700MF-1A-removebg-preview.png",
    },
    {
        product_no: 3,
        product_name: "Sample Product 3",
        product_price: 500,
        product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facere sint quis? Soluta unde quae sequi vero non labore vitae autem, asperiores expedita inventore cumque. Explicabo earum quas facere ea.",
        product_image: "img/3.GA-700MT-1A9-removebg-preview.png",
    },
    {
        product_no: 4,
        product_name: "Sample Product 4",
        product_price: 500,
        product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facere sint quis? Soluta unde quae sequi vero non labore vitae autem, asperiores expedita inventore cumque. Explicabo earum quas facere ea.",
        product_image: "img/4.GA-2100RB-3A-removebg-preview.png",
    },
    {
        product_no: 5,
        product_name: "Sample Product 5",
        product_price: 500,
        product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facere sint quis? Soluta unde quae sequi vero non labore vitae autem, asperiores expedita inventore cumque. Explicabo earum quas facere ea.",
        product_image: "img/5.GMA-S110VW-2A-removebg-preview.png",
    },
    {
        product_no: 6,
        product_name: "Sample Product 6",
        product_price: 500,
        product_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum facere sint quis? Soluta unde quae sequi vero non labore vitae autem, asperiores expedita inventore cumque. Explicabo earum quas facere ea.",
        product_image: "img/6.GM-B2100AD-2A-removebg-preview.png",
    },
]

let cartItems = [];
if(localStorage.getItem("shopping_cart")){
    cartItems = JSON.parse(localStorage.getItem("shopping_cart"));
}
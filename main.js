// items.forEach((item) =>{
//     alert(`${item.product_name} || ${item.product_price}`);
// })
let itemContainer = document.querySelector("#item-container");
let cartContainer = document.querySelector("#cart-container");

const addToCart = (image, name, price, desc) => {
    // alert(`${image} || ${name} || ${price} || ${desc}`);
    cartItems.push({cart_image: image, cart_name: name, cart_price: price, cart_desc: desc});
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));

    showCart();
}

const showCart = () =>{
    cartContainer.innerHTML ="";
    cartItems.forEach((cart) => {

        cartContainer.innerHTML += `
            <tr>
                <td>
                    <img src="${cart.cart_image}" alt ="" width="200">
                </td>
                <td>
                    ${cart.cart_name}
                </td>
                <td>
                    ${cart.cart_price}
                </td>
                <td>
                    ${cart.cart_desc}
                </td>
            </tr>
        
        
        `;
    // alert(`${cart.cart_name} || ${cart.cart_price}`);
   })

}

const showProducts = () => {
    items.forEach((item) =>{
        itemContainer.innerHTML +=`
        <div class="col-md-3">
            <div class="card">
                <img src="${item.product_image}" width="100%"alt="">
                <div class="card-body">
                    <h5 class="card-title">${item.product_name}</h5>
                    <h6>${item.product_price}</h6>
                    <p>${item.product_desc}</p>
                    <button class="btn btn-primary" onclick="addToCart('${item.product_image}','${item.product_name}','${item.product_price}','${item.product_desc}');">Add To Cart</button>
                </div>
            </div>
        </div>      
        `;       
    })
}
showCart();
showProducts();
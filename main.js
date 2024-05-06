let itemContainer = document.querySelector("#item-container");
let cartContainer = document.querySelector("#cart-container");

const addToCart = (image, name, price, desc) => {
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
   })

}

const showProducts = () => {
    items.forEach((item) =>{
        itemContainer.innerHTML +=`
            <div class="col-md-3 col-lg-3">
                <div class="card">
                    <div class="container box image-box">
                        <img src="${item.product_image}" alt="" class="card-img-top">                                  
                    </div>
                    <div class="card-body">
                        <h6 class="item-name">
                        ${item.product_name}
                        </h6>
                        <h6>${item.product_price}</h6>
                        
                    <div class="card-footer text-center">
                    <button class="addto-basket btn" onclick="addToCart('${item.product_image}','${item.product_name}','${item.product_price}','${item.product_desc}');">Add to Cart</button>
                    </div>
                    </div>
                </div>
            </div>
        `;       
    })
}
showCart();
showProducts();


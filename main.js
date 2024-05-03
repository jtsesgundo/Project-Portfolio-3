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
                    <button class="addto-basket btn" onclick="addToCart('${item.product_image}','${item.product_name}','${item.product_price}','${item.product_desc}');">Check Out</button>
                    </div>
                    </div>
                </div>
            </div>
        `;       
    })
}
showCart();
showProducts();






let todo = [];

if(localStorage.getItem("todo")){
    todo = localStorage.getItem("todo").split(",");
}

let container = document.querySelector("#todo-list");

// todo.forEach(
//     (task) => {
//         container.innerHTML += `<li>${task}</li>`;
//     }
// );

const showList = () => {
    container.innerHTML = "";
    todo.forEach(
    (task) => {
        container.innerHTML += `<li>${task}</li>`;
    }
    );
}

const addTodo = () => {
    let newItem = document.querySelector("#create-todo").value;
    todo.push(newItem);
    // alert(todo);
    // container.innerHTML += `<li>${newItem}</li>`;
    // container.innerHTML = "";
    // todo.forEach(
    // (task) => {
    //     container.innerHTML += `<li>${task}</li>`;
    // }
    // );
    showList();
    localStorage.setItem("todo", todo);

}

const removeTodo = () => {
    todo.pop();
    // container.innerHTML = "";
    // todo.forEach(
    // (task) => {
    //     container.innerHTML += `<li>${task}</li>`;
    // }
    // );
    showList();
    localStorage.setItem("todo", todo);
}

const search = () => {
    let input = document.querySelector("#input").value.toLowerCase(); 

    let filterlist = todo.filter(task => task.toLowerCase().includes(input)); 

    container.innerHTML = ''; 

    filterlist.forEach(task => {
        container.innerHTML += `<li>${task}</li>`; 
    }
    );
};

showList();
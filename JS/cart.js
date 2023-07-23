import { getItemsLS, setItemsLS } from "./localStorage.js";

//Tomar carrito del LS
let cart = getItemsLS('cart') || []
console.log(cart);

// Renderizar carrito
function renderCart(e) {
    const cartCards = document.getElementById("cartCards");
    cartCards.innerHTML = "";

    // carrito vacio
    if (cart.length === 0) {
        let divCart = document.createElement('div')
        divCart.classList.add('card')
        divCart.innerHTML = `
            <div class="row g-0">
                <p class="card-text">El carrito se encuentra vacio</p>
            </div>
            `
            cartCards.appendChild(divCart);
    } else {
        // carrito con productos
        // Eliminar duplicados
        const uniqueProduct = {}
        const cartNoRepeat = cart.filter((prod) => {
            if (!uniqueProduct[prod.id]) {
                uniqueProduct[prod.id] = true;
                return true;
            }
            return false;
            
        });

        cartNoRepeat.forEach((prod) => {
            // verificar cantidad añadida
            const amount = cart.filter(object => object.id === prod.id).length;

            //Agregar cards al DOM
            const divCart = document.createElement("div");
            divCart.classList.add("card");
            divCart.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=".${prod.imgUrl}" class="img-fluid rounded-start" alt="${prod.name}">
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">${prod.name}</h5>
                        <p class="card-text">${amount} x $ ${prod.price}</p>
                    </div>
                </div>
                <div class="col-md-4">
                <button class="btnDelete btn btn-outline-danger" data-product="${prod.id}">Eliminar</button>
                </div>
            </div>
            `;
            // boton delete
            const btnDelete = divCart.querySelector(".btnDelete");
            btnDelete.addEventListener("click",deleteFromCart);

            cartCards.appendChild(divCart);
        });
    }
}

// Eliminar producto del carrito
function deleteFromCart(e) {
    const id = parseInt(e.target.dataset.product);
    cart = cart.filter((product) => product.id !== id);

    setItemsLS('cart',cart)
    getItemsLS('cart')
    renderCart();
}

// Inicio
renderCart();


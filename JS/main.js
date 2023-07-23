import { getItemsLS, setItemsLS } from "./localStorage.js"
import { products } from "./products.js"

//Variables
const productsList = document.querySelector("#productsList")
let cart = getItemsLS('cart') || []

// Renderizar prodductos
function renderProducts() {
    products.forEach((product) => {
        const divCard = document.createElement('div');

        divCard.classList.add('card', 'col-10', 'col-sm-8', 'col-md-5', 'col-lg-3', 'text-center', 'p-0', 'mt-3');
        divCard.innerHTML = `
        <img src='${product.imgUrl}' class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">$ ${product.price}</p>
            <button id="${product.id}" class="btnToCart btn btn-outline-dark">Agregar al carrito</button>
        </div>
    `;
    // boton carrito
    const btnToCart = divCard.querySelector(".btnToCart");
    btnToCart.addEventListener("click",addToCart);

    productsList.appendChild(divCard);
    });
}

//Agregar al carrito
function addToCart(e) {
    let addedProduct = products.find(prod => prod.id === parseInt(e.target.id))
    cart.push(addedProduct);
    setItemsLS('cart',cart);
}

//Inicio
getItemsLS('cart');
renderProducts();
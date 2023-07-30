import { getItemsLS, setItemsLS } from "./localStorage.js"

//Variables
const productsList = document.querySelector("#productsList")
let cart = getItemsLS('cart') || []
let products = await fetch('assets/data/products.json')
let productsParser = await products.json()

// Renderizar prodductos
async function renderProducts() {
    productsParser.forEach((product) => {
        const divCard = document.createElement('div');

        divCard.classList.add('card', 'col-9', 'col-sm-5', 'col-md-3', 'col-lg-2', 'text-center', 'p-0', 'mt-3');
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
    let addedProduct = productsParser.find(prod => prod.id === parseInt(e.target.id))
    cart.push(addedProduct);
    cart = cart.sort((x, y) => x.name.localeCompare(y.name))

    setItemsLS('cart', cart);
    
    Toastify({
        text: `Se ha agregado ${addedProduct.name} al carrito`,
        duration: 3000,
        destination: "./cart.html",
        close: true,
        gravity: "bottom",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #FFEEF2, #F8D04D)",
            color: "#04151F",
        },
    }).showToast();
}

//Inicio
renderProducts();
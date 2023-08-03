import { getItemsLS, setItemsLS } from "./localStorage.js"

//Variables
const productsList = document.querySelector("#productsList")
let cart = getItemsLS('cart') || []
let products = await fetch('assets/data/products.json')
    .then(resp => resp.json());

// Renderizar prodductos
async function renderProducts(elem) {
    productsList.innerHTML = "";

    elem.forEach((product) => {
        const divCard = document.createElement('div');

        divCard.classList.add('card', 'col-9', 'col-sm-5', 'col-md-3', 'col-lg-2', 'text-center', 'p-0', 'mt-3');
        if (product.stock != 0) {
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
        } else { 
            //producto sin stock
            divCard.innerHTML = `
                <img src='${product.imgUrl}' class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-text">$ ${product.price}</p>
                    <button class="btnToCart btn btn-outline-dark" disabled>Sin Stock</button>
                </div>
            `;
        }
        productsList.appendChild(divCard);
    });
}

//Agregar al carrito
function addToCart(e) {
    let addedProduct = products.find(prod => prod.id === parseInt(e.target.id))
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

// Filtros de productos
const btnFilter = document.querySelectorAll(".btnFilter")
btnFilter.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.currentTarget.id != "noFilter") {
            const productsFiltered = products.filter(object => object.category === e.currentTarget.id)
            console.log(productsFiltered);
            renderProducts(productsFiltered);
        } else {
            renderProducts(products);
        }
    })
})

//Inicio
renderProducts(products);
// productos
class Product{
    constructor(id,name,category,price,stock){
        this.id       = this.id
        this.name     = name.toUpperCase()
        this.category = category.toUpperCase()
        this.price    = parseFloat(price)
        this.stock    = parseInt(stock)
        this.isStock  = true
    }
    sinStock(){
        this.isStock  = false
    }
}

const products = []

products.push (new Product (1,'Remera Negra','remeras',5500,20))
products.push (new Product (2,'Remera Naranja','remeras',5500,20))
products.push (new Product (3,'Remera Blanca','remeras',4500,10))
products.push (new Product (4,'gorra 1','gorras',3000,10))

console.table(products);

function forEach(arr,cb) {
    for (const element of arr) {
        cb(element)
    }
}

// Simulador de compra
let amount = 0
let cart = 0

function addToCart(element) {
    amount = parseInt(prompt(`Producto: ${element.name}. Ingrese la cantidad que desea:`))

    while (amount < 0 || isNaN(amount)) {
        amount = parseInt(prompt("Ingrese un valor correcto:"));
    }
    cart += (element.price * amount)
}

let option = prompt('Deseas filtrar productos por categoria? (SI/NO)').toUpperCase()
switch (option) {
    case 'SI':
        let selectedCategory = prompt('Ingrese categoria (Remeras/Gorras):').toUpperCase()
        let selectedProducts = products.filter((productsObj) => productsObj.category === selectedCategory)
        console.table(selectedProducts);

        forEach (selectedProducts,addToCart)
        alert('El valor total de los productos es: $' + cart);
        break;

    case 'NO':
        forEach (products,addToCart)
        alert('El valor total de los productos es: $' + cart);
        break;
    default:
        break;
}
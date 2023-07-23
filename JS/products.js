// productos
class Product{
    constructor(id,name,category,imgUrl,price,stock){
        this.id       = id
        this.name     = name.toUpperCase()
        this.category = category.toUpperCase()
        this.imgUrl   = imgUrl
        this.price    = parseFloat(price)
        this.stock    = parseInt(stock)
        this.isStock  = true
    }
    sinStock(){
        this.isStock  = false
    }
}

export const products = []

products.push (new Product 
    (1,
    'Remera Eagle Negra',
    'remeras',
    './assets/img/remeraBlessedNegra.png',
    5500,
    20))
products.push (new Product 
    (2,
    'Remera Eagle Naranja',
    'remeras',
    './assets/img/remeraBlessedNaranja.png',
    5500,
    20))
products.push (new Product 
    (3,
    'Remera Eagle Blanca',
    'remeras',
    './assets/img/remeraBlessedBlanca.png',
    5500,
    10))


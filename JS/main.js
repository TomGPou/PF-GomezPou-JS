// productos
const prod1 = 3000
const prod2 = 4500
const prod3 = 5500

// seleccionar de producto
let producto = prompt('Ingrese nro de producto (1, 2 o 3):')

switch (producto) {
    case '1':
        prod = prod1
        break;
    case '2':
        prod = prod2
        break;
    case '3':
        prod = prod3
        break;

    default:
        producto = prompt('Ingrese un nro de producto correcto (1, 2 o 3)')
        break;
}

// seleccionar cantidad
let cantidad = parseInt(prompt('Ingrese la cantidad que desea:'))

// validacion cantidad
while ((cantidad < 1) || (isNaN(cantidad))) {
    cantidad = parseInt(prompt('Ingrese un valor correcto:'))
}

// calculadora de valor total
const valorTotal = (prod, cantidad) => prod * cantidad
alert('El valor total de los productos es: $'+ valorTotal(prod,cantidad));

// Objeto-> Constructor -> This.
class products {
    constructor(product, cantidad, precio){
        this.product = product
        this.cantidad = cantidad
        this.precio = precio
    }
}

// Array de objetos literal -> mis productos
const price = [
    {ID: "1", product: "Alfajor", price: 10},
    {ID: "2", product: "Ddl", price: 5},
    {ID: "3", product: "Fernet", price: 15},
]

console.log(price); // chequeo que mis productos funcionan

// Pido por un prompt que se selecione el producto y la cantidad
function addProducto() {
    let product = prompt("Ingrese el producto(Alfajor, ddl, Fernet)")
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    let precio = parseInt(prompt("Ingrese el Precio: ddl: 5, Fernet: 15, Alfajor: 10"))
        
// verificar si el producto existe en la lista de precios
const selectedProduct = price.find(p=> p.product.toLowerCase() === product.toLowerCase());
if (selectedProduct) {
    const newproduct = new products(product, cantidad, selectedProduct.price)  
    // pushear al carrito
    cart.push(newproduct)
    alert("Producto agregado al carrito");

} else{
    alert("Producto no encontrado en la lista de precios")
}    
    
}    


// Declaro el array vacio del carrito -> se va a ir llenando con un push de la funcion de agregarProducto
const cart = []

// Reccorre el carrito con un for each (En una funcion)
function seeCart() {
cart.forEach(element => {
    alert(`Ustede eligio ${element.cantidad} ${element.product}`);  
});
}

// Funcion filtro para buscar el precio mas bajo y decir que es una oferta
function sales() {
    const sale = price.filter((p)=> p.price < 10)
    for (const oferta of sale){
        alert(`La oferta de hoy es de ${oferta.product} por un precio de $ ${oferta.price}`)
    }
    }

// Funcion Reduce, para sumar todos los productos del carrito y dar un total
function endCart() {
    const total = cart.reduce((acc, el) => acc + (el.precio * el.cantidad), 0); 
alert(`Gracias por su compra! \n El total a pagar es de $ ${ total}`) 
}

// Funcion map para ver todos los productos
function seeProducts() {
    let allProducts = price.map((price) => price.product + " " + "$" + price.price);
    alert( allProducts.join(" - "))
}


// Pido instrucciones via prompt

let option = prompt("Ingrese opcion: \n 0. Ver productos \n 1. Ver ofertas \n 2. Comprar Productos \n 3. Mostrar Carrito, \n 4. Ver total \n 5. Finalizar ")
// Loop
while (option !== "5") {
    if (option === "0") {
        seeProducts();
    }   
    if (option === "1") {
        sales();
    }
    if (option === "2") {
        addProducto(cart);
    }
    if (option === "3") {
        seeCart();
    }
    if (option === "4") {
        endCart();
    }
    option = prompt(" Vuelva a ingresar una opcion: \n 0 Ver productos \n 1 Ver ofertas \n.2. Seguir Comprando Productos \n 3. Mostrar Carrito \n 4. Ver Total \n 5. Finalizar ")
}
alert ("Gracias por su compra");

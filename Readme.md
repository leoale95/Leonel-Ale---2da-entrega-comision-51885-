# Leonel Ale
---
## CoderHouse
### Comision 51885 
#### Profesor: Omar Manias
##### Tutor: Fernando Moyano
---

## Segunda entrega:



### Funciones
```javascript
function addProducto() {
    let product = prompt("Ingrese el producto(Alfajor, ddl, Fernet)")
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    let precio = parseInt(prompt("Ingrese el Precio: ddl: 5, Fernet: 15, Alfajor: 10"))
```
---
### Array
```javascript
const price = [
    {ID: "1", product: "Alfajor", price: 10},
    {ID: "2", product: "Ddl", price: 5},
    {ID: "3", product: "Fernet", price: 15},
]
```
### Loops y Condicional
```javascript
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
``` 
### Metodo de busca 1  - Filter 
```javascript
function sales() {
    const sale = price.filter((p)=> p.price < 10)
    for (const oferta of sale){
        alert(`La oferta de hoy es de ${oferta.product} por un precio de $ ${oferta.price}`)
    }
    }
```
### Metodo de busca 2 - Map
```javascript
function seeProducts() {
    let allProducts = price.map((price) => price.product + " " + "$" + price.price);
    alert( allProducts.join(" - "))
}
---
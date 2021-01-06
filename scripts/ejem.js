class Producto {
  constructor(titleP, precioP, stockP, imgP) {
    this.title = titleP;
    this.precio = precioP;
    this.stock = stockP;
    this.img = imgP;
  }
}

let product1 = new Producto("iPad", 1000, 0, "iPad.png");
let product2 = new Producto("iPhone", 1100, 0, "iPad.png");
let product3 = new Producto("iWatch", 900, 0, "iPad.png");

let inventario = [product1, product2, product3];

let carrito = {
  agregarProducto: agregar(productoP),
  quitarProducto: quitar(productoP),
  montoTotal: 0,
  listaProductos: [],
};

const agregar = (idProducto) => {
  carrito.listaProductos.push(inventario[idProducto]);
};

const quitar = (idProducto) => {
  carrito.listaProductos.splice(idProducto, 1);
};

var listaInventario = document.createElement("div");

localStorage.setItem("carrito", JSON.stringify(value));

var test = JSON.parse(localStorage.getItem("carrito"));

console.log(test);

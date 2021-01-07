// ++ Product Class ++
class Product {
  constructor(name, price) {
    this.name = name,
    this.price = price
  }
}
// ++ Object product creation ++
let product1 = new Product('iPad', 100);
let product2 = new Product('iPhone', 90);
let product3 = new Product('GamerPC', 200);
// ++ shoppingCart Object ++
let shoppingCart = {
  productsInCart: [],
  totalCost: 0
}
let listOfProducts = document.getElementById('listOfProducts');
let totalItems = document.getElementById('totalItems');
let totalCost = document.getElementById('totalCost');
// *************************
// *** Add & Remove iPad ***
// *************************
let addiPad = () => {
  shoppingCart.productsInCart.push(product1);

  let newListItem = document.createElement('li');
  newListItem.textContent = `Producto: ${product1.name}... $${product1.price}`;
  newListItem.classList.add('iPad');
  listOfProducts.appendChild(newListItem);
}
let removeiPad = () => {
  let indexOfItem = shoppingCart.productsInCart.indexOf(product1);
  shoppingCart.productsInCart.splice(indexOfItem, 1);
}
let addiPadButton = document.getElementById('addiPad');
addiPadButton.addEventListener('click', addiPad);
let removeiPadButton = document.getElementById('removeiPad');
removeiPadButton.addEventListener('click', removeiPad);
// ----------------------------
// -- Add & Remove iPad ends --
// ----------------------------
// ***************************
// *** Add & Remove iPhone ***
// ***************************
let addiPhone = () => {
  shoppingCart.productsInCart.push(product2);

  let newListItem = document.createElement('li');
  newListItem.textContent = `Producto: ${product2.name}... $${product2.price}`;
  newListItem.classList.add('iPhone');
  listOfProducts.appendChild(newListItem);
}
let removeiPhone = () => {
  let indexOfItem = shoppingCart.productsInCart.indexOf(product2);
  shoppingCart.productsInCart.splice(indexOfItem, 1);
}
let addiPhoneButton = document.getElementById('addiPhone');
addiPhoneButton.addEventListener('click', addiPhone);
let removeiPhoneButton = document.getElementById('removeiPhone');
removeiPhoneButton.addEventListener('click', removeiPhone);
// ------------------------------
// -- Add & Remove iPhone ends --
// ------------------------------
// ****************************
// *** Add & Remove GamerPC ***
// ****************************
let addGamerPC = () => {
  shoppingCart.productsInCart.push(product3);

  let newListItem = document.createElement('li');
  newListItem.textContent = `Producto: ${product3.name}... $${product3.price}`;
  newListItem.classList.add('gamerPC');
  listOfProducts.appendChild(newListItem);
}
let removeGamerPC = () => {
  let indexOfItem = shoppingCart.productsInCart.indexOf(product3);
  shoppingCart.productsInCart.splice(indexOfItem, 1);
}
let addGamerPCButton = document.getElementById('addGamerPC');
addGamerPCButton.addEventListener('click', addGamerPC);
let removeGamerPCButton = document.getElementById('removeGamerPC');
removeGamerPCButton.addEventListener('click', removeGamerPC);
// -------------------------------
// -- Add & Remove GamerPC ends --
// -------------------------------

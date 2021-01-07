// ++ Product Class ++
class Product {
  constructor(name, price) {
    this.name = name,
    this.price = price
  }
}
// ++ Object product creation ++
let product1 = new Product('iPad', 300);
let product2 = new Product('iPhone', 250);
let product3 = new Product('GamerPC', 500);
// ++ shoppingCart Object ++
let shoppingCart = {
  productsInCart: [],
  totalItemsCart: 0,
  totalCostCart: 0
}
let listOfProductsView = document.getElementById('listOfProducts');
let totalItemsView = document.getElementById('totalItems');
let totalCostView = document.getElementById('totalCost');
let totalItems = shoppingCart.productsInCart.length;

// **************************************
// *** Procced Payment (LocalStorage) ***
// **************************************
let procceedPaymentBtn = document.getElementById('procceedToPayment');
const shoppingCartToLocalStorage = () => {
  localStorage.setItem('TotalCost', shoppingCart.totalCostCart);
  localStorage.setItem('TotalProducts', shoppingCart.totalItemsCart);
  localStorage.setItem('ListOfProducts', shoppingCart.productsInCart);
}
procceedPaymentBtn.addEventListener('click', shoppingCartToLocalStorage);
// **********************************************
// *** Clear Shopping Cart and (LocalStorage) ***
// **********************************************
let emptyShoppingCartBtn = document.getElementById('emptyShoppingCart');
const clearShoppingCart = () => {
  localStorage.clear();
  shoppingCart.productsInCart = [];
  shoppingCart.totalItemsCart = 0;
  shoppingCart.totalCostCart = 0;
  totalItemsView.textContent = 0;
  totalCostView.textContent = 0;
  while (listOfProductsView.childElementCount !== 0) {
    listOfProductsView.removeChild(listOfProductsView.lastChild);
  };
}
emptyShoppingCartBtn.addEventListener('click', clearShoppingCart);
// *************************
// *** Add & Remove iPad ***
// *************************
let addiPad = () => {

  shoppingCart.productsInCart.push(product1);
  // ++ Add item to shopping cart object ++
  let newListItem = document.createElement('li');
  newListItem.textContent = `Producto: ${product1.name}... $${product1.price}`;
  newListItem.classList.add('iPad');
  listOfProductsView.appendChild(newListItem);
  // ++ Updates the total of items ++
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // ++ Adds price to the total cost ++
  shoppingCart.totalCostCart += product1.price;
  totalCostView.textContent = shoppingCart.totalCostCart;
}
let removeiPad = () => {
  // -- Removes item from shopping cart object --
  let indexOfItem = shoppingCart.productsInCart.indexOf(product1);
  shoppingCart.productsInCart.splice(indexOfItem, 1);
  // -- Removes item from User's view --
  listOfProductsView.removeChild(listOfProductsView.childNodes[indexOfItem]);
  // -- Updates the total of items --
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // -- Subtracts price to the total cost --
  shoppingCart.totalCostCart -= product1.price;
  totalCostView.textContent = shoppingCart.totalCostCart;
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
  // ++ Add item to shopping cart object ++
  shoppingCart.productsInCart.push(product2);
  // ++ Adds item to User's view ++
  let newListItem = document.createElement('li');
  newListItem.textContent = `Producto: ${product2.name}... $${product2.price}`;
  newListItem.classList.add('iPhone');
  listOfProductsView.appendChild(newListItem);
  // ++ Updates the total of items ++
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // ++ Adds price to the total cost ++
  shoppingCart.totalCostCart += product2.price;
  totalCostView.textContent = shoppingCart.totalCostCart;
}
let removeiPhone = () => {
  // -- Removes item from shopping cart object --
  let indexOfItem = shoppingCart.productsInCart.indexOf(product2);
  shoppingCart.productsInCart.splice(indexOfItem, 1);
  // -- Removes item from User's view --
  listOfProductsView.removeChild(listOfProductsView.childNodes[indexOfItem]);
  // -- Updates the total of items --
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // -- Subtracts price to the total cost --
  shoppingCart.totalCostCart -= product2.price;
  totalCostView.textContent = shoppingCart.totalCostCart;
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
  // ++ Add item to shopping cart object ++
  shoppingCart.productsInCart.push(product3);
  // ++ Adds item to User's view ++
  let newListItem = document.createElement('li');
  newListItem.textContent = `Producto: ${product3.name}... $${product3.price}`;
  newListItem.classList.add('gamerPC');
  listOfProductsView.appendChild(newListItem);
  // ++ Updates the total of items ++
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // ++ Adds price to the total cost ++
  shoppingCart.totalCostCart += product3.price;
  totalCostView.textContent = shoppingCart.totalCostCart;
}
let removeGamerPC = () => {
  // -- Removes item from shopping cart object --
  let indexOfItem = shoppingCart.productsInCart.indexOf(product3);
  shoppingCart.productsInCart.splice(indexOfItem, 1);
  // -- Removes item from User's view --
  listOfProductsView.removeChild(listOfProductsView.childNodes[indexOfItem]);
  // -- Updates the total of items --
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // -- Subtracts price to the total cost --
  shoppingCart.totalCostCart -= product3.price;
  totalCostView.textContent = shoppingCart.totalCostCart;
}
let addGamerPCButton = document.getElementById('addGamerPC');
addGamerPCButton.addEventListener('click', addGamerPC);
let removeGamerPCButton = document.getElementById('removeGamerPC');
removeGamerPCButton.addEventListener('click', removeGamerPC);
// -------------------------------
// -- Add & Remove GamerPC ends --
// -------------------------------

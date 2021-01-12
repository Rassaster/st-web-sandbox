// ++ Product Class ++
class Product {
  constructor(name, imgURL, price) {
    this.name = name,
    this.imgURL = imgURL,
    this.price = price
  }
}
// ++ Object product creation ++
let product1 = new Product('iPad', 'https://source.unsplash.com/McEaDYCXQdo', 300);
let product2 = new Product('iPhone', 'https://source.unsplash.com/yPFAAwomTYQ', 250);
let product3 = new Product('GamerPC', 'https://source.unsplash.com/H-qqp_Eqaww', 500);
let product4 = new Product('Ash', 'https://source.unsplash.com/H-qqp_Eqaww', 20);
let product5 = new Product('Bits', 'https://source.unsplash.com/H-qqp_Eqaww', 10);

// ++ Array productsShowCase++
let productsShowCase = [product1, product2, product3, product4, product5];
// ++ shoppingCart Object ++
let shoppingCart = {
  productsInCart: [],
  totalItemsCart: 0,
  totalCostCart: 0
}
// Captures of Nodes in the Shopping Cart section in HTML
let listOfProductsView = document.getElementById('listOfProducts');
let totalItemsView = document.getElementById('totalItems');
let totalCostView = document.getElementById('totalCost');
let totalItems = shoppingCart.productsInCart.length; // Total productos en shoppingCartOBJ

const loadProductsShowCase = () => {
  for (let i = 0; i < productsShowCase.length; i++) {
    let product = productsShowCase[i];
    let productsUsersView = document.getElementById('productsShowcase');
    let productElement = document.createElement('div');
    productElement.innerHTML = 
      `
        <h2>${product.name}</h2>
        <img src="${product.imgURL}" alt="" />
        <h2>${product.price}</h2>
        <button onclick="addProduct(${i})">Agregar al carrito</button>
        <button onclick="removeProduct(${i})">Quitar del carrito</button>
      `;
      productsUsersView.appendChild(productElement);
  }
}
const msgSuccessAdd = () => {
  alert('El producto ha sido agregado al carrito de compras')
}
const msgSuccessRemove = () => {
  alert('El producto ha sido removido al carrito de compras')
}
// addProduct function button
let addProduct = (i) => {
  // ++ Adds products to totalProducs and totalCost in LocalStorage ++
  localStorage.setItem('totalProducts', (shoppingCart.totalItemsCart+1));
  localStorage.setItem('totalCost', (shoppingCart.totalCostCart+productsShowCase[i].price));
  // ++ Add item to shopping cart object ++
  shoppingCart.productsInCart.push(productsShowCase[i]);
  // ++ Add item to shopping cart object ++
  let newListItem = document.createElement('li');
  newListItem.textContent = `Producto: ${productsShowCase[i].name}... $${productsShowCase[i].price}`;
  listOfProductsView.appendChild(newListItem);
  // ++ Updates the total of items ++
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // ++ Adds price to the total cost ++
  shoppingCart.totalCostCart += productsShowCase[i].price;
  totalCostView.textContent = shoppingCart.totalCostCart;
  // -- Message success --
  msgSuccessAdd();
  // ++ Updates listOfProducts in LocalStorate ++
  localStorage.setItem('listOfProducts', listOfProductsView.innerHTML);
}
// removeProduct function button
let removeProduct = (i) => {
  // -- Substracts products from totalProducs and totalCost in LocalStorage --
  localStorage.setItem('totalProducts', (shoppingCart.totalItemsCart-1));
  localStorage.setItem('totalCost', (shoppingCart.totalCostCart-productsShowCase[i].price));
  // -- Removes item from shopping cart object --
  let indexOfItem = shoppingCart.productsInCart.indexOf(productsShowCase[i]);
  shoppingCart.productsInCart.splice(indexOfItem, 1);
  // -- Removes item from User's view --
  listOfProductsView.removeChild(listOfProductsView.childNodes[indexOfItem]);
  // -- Updates the total of items --
  totalItems = shoppingCart.productsInCart.length;
  shoppingCart.totalItemsCart = totalItems;
  totalItemsView.textContent = shoppingCart.totalItemsCart;
  // -- Subtracts price to the total cost --
  shoppingCart.totalCostCart -= productsShowCase[i].price;
  totalCostView.textContent = shoppingCart.totalCostCart;
  // -- Message success --
  msgSuccessRemove();
  // -- Updates listOfProducts in LocalStorate --
  localStorage.setItem('listOfProducts', listOfProductsView.innerHTML);
}
// clrear shoppingCart object, display to User and LocalStorage
const clearShoppingCart = () => {
  localStorage.clear(); // Deletes the entire LocalStorage
  shoppingCart.productsInCart = []; // Sets to empty the shoppingCart product's list array
  shoppingCart.totalItemsCart = 0; // Sets to zero the count of items in shoppingCart
  shoppingCart.totalCostCart = 0; // Sets to zero the totalCost in shoppingCart
  totalItemsView.textContent = 0; // Sets to zero the count of items in User's view
  totalCostView.textContent = 0; // Sets to zero the totalCost in User's view
  // Deletes the list of products displayed to the User.
  while (listOfProductsView.childElementCount !== 0) {
    listOfProductsView.removeChild(listOfProductsView.lastChild);
  };
}
// Function that retrieves the LocalStorage to be displayed to user in HTML shoppingCart.
const displayLocalStorageToUser = () => {
  let previousListItemsView = localStorage.getItem('listOfProducts');
  listOfProductsView.innerHTML = previousListItemsView;
  let previousTotalItemsView = localStorage.getItem('totalProducts');
  totalItemsView.textContent = previousTotalItemsView;
  let previousTotalCostView = localStorage.getItem('totalCost');
  totalCostView.textContent = previousTotalCostView;
}
// Products order display function
let selectOrderOfProducts = document.getElementById('productsDisplayOrder');
const changeOrder = () => {
  const sortByName = (productA, productB) => {
    let nameA = productA.name.toUpperCase()
    let nameB = productB.name.toUpperCase()
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    if (nameA === nameB) {
      return 0
    }
  }
  const sortByPrice = (productPriceA, productPriceB) => {
    return productPriceA.price - productPriceB.price
  }
  if (selectOrderOfProducts.value === 'a-z') {
    selectOrderOfProducts.style.color = 'red';
    productsShowCase.sort(sortByName);
  }
  if (selectOrderOfProducts.value === 'z-a') {
    selectOrderOfProducts.style.color = 'blue';
    productsShowCase.reverse(productsShowCase.sort(sortByName));
  }
  if (selectOrderOfProducts.value === 'cheap-expensive') {
    selectOrderOfProducts.style.color = 'green';
    productsShowCase.sort(sortByPrice);
  }
  if (selectOrderOfProducts.value === 'expensive-cheap') {
    selectOrderOfProducts.style.color = 'orange';
    productsShowCase.reverse(productsShowCase.sort(sortByPrice));
  }
  const clearProductsShowCase = () => {
    let productsUsersView = document.getElementById('productsShowcase')
    while (productsUsersView.hasChildNodes()) {
    productsUsersView.removeChild(productsUsersView.firstChild);
    }
  }
  clearProductsShowCase();
  loadProductsShowCase();
}
// Function tu display hour after buyout
const confirmMsgDate = () => {
  let currentDate = new Date();
  let month = () => {
    switch (currentDate.getMonth()) {
      case 0: return 'Enero'; break;
      case 1: return 'Febrero'; break;
      case 2: return 'Marzo'; break;
      case 3: return 'Abril'; break;
      case 4: return 'Mayo'; break;
      case 5: return 'Junio'; break;
      case 6: return 'Julio'; break;
      case 7: return 'Agosto'; break;
      case 8: return 'Septiembre'; break;
      case 9: return 'Octubre'; break;
      case 10: return 'Noviembre'; break;
      case 11: return 'Diciembre'; break;
    }
  }
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let buyoutDate = [month(), day, year].join('-');
  let buyoutTime = [hour, minutes, seconds].join(':');
  let buyoutFullDate = 'D|' + buyoutDate + '|T|' + buyoutTime;
  alert(`
  Su compra se registró con éxito con fecha de: 
  ${buyoutDate} a las ${buyoutTime}`);
  return buyoutFullDate;
}
// On load instructions
window.onload = () => {
  loadProductsShowCase();
  displayLocalStorageToUser();
}

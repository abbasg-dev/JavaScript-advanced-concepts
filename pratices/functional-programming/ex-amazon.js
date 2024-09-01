// Composition
// What it has

// It's about smaller pieces that are combined to create something

// Amazon shopping
const user = {
  name: "Abbas",
  active: true,
  cart: [],
  purchases: [],
};

const amazonHistory = [];
const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: "laptop", price: 200 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  amazonHistory.push(user);
  const updateCart = use.cart.concat(item);
  return Object.assign({}, use, { cart: updateCart });
}

function applyTaxToItems(user) {
  amazonHistory.push(user);
  const taxRate = 1.3;
  const updatesCart = cart.map((item) => {
    return {
      name: item,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}.user, { cart: updatedCart });
}

function buyItem(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// Bonus:
// accept refunds
// Track user history

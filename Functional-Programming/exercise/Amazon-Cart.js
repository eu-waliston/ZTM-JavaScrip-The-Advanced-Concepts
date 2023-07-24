//Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

const pipe =
  (f, g) =>
  (...args) =>
    g(f(...args));

let amazonHistory = [];

pruchaseItem(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyCart
)(user, { name: "laptop", price: 5000 });

console.log(
  pruchaseItem(
    addItemToCart,
    applyTaxToItems,
    buyItem,
    emptyCart
  )(user, { name: "laptop", price: 5000 })
);

function pruchaseItem(...fns) {
  return fns.reduce(pipe);
}

function addItemToCart(user, item) {
  amazonHistory.push(user);
  const updatedCart = user.cart.concat([item]);
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
  amazonHistory.push(user);

  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  amazonHistory.push(user);

  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);

  return Object.assign({}, user, { cart: [] });
}

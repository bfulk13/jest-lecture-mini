export function toggle(value) {
  // Build me!
  return !value;
}

export function addToCart(cart, itemToAdd) {
  // Build me!
  const newCart = [...cart];
  const newitemToAdd = {...itemToAdd};
  const matchingIndex = newCart.findIndex((item) => item.id === newitemToAdd.id)
  if(matchingIndex === -1){
    newitemToAdd.qty = 1;
    newCart.push(newitemToAdd);
  } else {
    newCart[matchingIndex].qty++;
  }
  return newCart;
}

export function calculateSubTotal() {
  // Build me!
}

export function calculateTotal() {
  // Build me!
}

export function removeItem() {
  // Build me!
}

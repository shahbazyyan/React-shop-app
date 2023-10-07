import React, {createContext, useState} from 'react'
import ITEMS from '../Products';

const ShopContext = createContext(null);

function getDefaultCarts () {
    let cart = {};
    for (let i = 0; i < ITEMS.length + 1; i++) {
        cart[i] = 0;
    };
    return cart;
};

function ContextShop(param) {
  const [cartItems, setCartItems] = useState(getDefaultCarts());

function addToCart (itemID) {
    setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1 }));
  };

function removeFromCart (itemID) {
    setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1 }));
  };

function updateCartItems (newAmount, itemID) {
  setCartItems((prev) => ({...prev, [itemID]: newAmount}))
}

const getTotalAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      let itemInfo = ITEMS.find((item) => item.id === Number(itemId));
      if (itemInfo) {
        totalAmount += cartItems[itemId] * itemInfo.price;
      }
    }
  }
  return totalAmount;
};

  

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItems, getTotalAmount};  

return <ShopContext.Provider value={contextValue}>{param.children}</ShopContext.Provider>
}

export default ContextShop;
export {ShopContext};
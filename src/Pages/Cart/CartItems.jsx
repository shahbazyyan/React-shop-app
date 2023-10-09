import React, {useContext} from 'react';
import { ShopContext } from '../../context/ContextShop';

function CartItems(param) {
    const {id, itemName, price, itemsIMG } = param.data;
    const {cartItems, addToCart, removeFromCart,updateCartItems} = useContext(ShopContext);


  return (  
    <div className='cartItem'>
       <img className='itemsIMG' src={itemsIMG} alt="img" />
       <div className="description"><p>
        <b>{itemName}</b>
        </p>
        <p>{price}$</p></div>
        <div className="countHandler">
            <button className='minusButton' onClick={()=> removeFromCart(id)}>-</button>
            <input className='stateInput' value={cartItems[id]} onChange={(e) => updateCartItems(Number(e.target.value), id)}/>
            <button className='plusButton' onClick={()=> addToCart(id)}>+</button>
        </div>
       
    </div>
  )
}

export default CartItems
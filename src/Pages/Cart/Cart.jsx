import React, { useContext } from 'react';
import ITEMS from "../../Products";
import "./cart.css";
import { ShopContext } from '../../context/ContextShop';
import CartItems from './CartItems'; 
import { useNavigate } from 'react-router-dom';

function Cart() {

  const {cartItems, getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  

  return (
    <div className='cart'>
      <div>
        <h1>My Cart Items</h1>
      </div>
      <div className='cartItems'>
          {ITEMS.map((item) => {
            if(cartItems[item.id] !== 0 ) {
              return <CartItems data={item}/>
            }
          })}
      </div>
      <div className="checkout">
        <p>Total: {totalAmount}$ </p>
        <button className='continue' onClick={(() => navigate("/"))}>Shopping</button>
        <button className='buy'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
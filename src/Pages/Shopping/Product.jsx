import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/ContextShop';


const Product = (props) => {
    const {id, itemName, price, itemsIMG } = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartAmount = cartItems[id];
    return (
        <div className='product' >
            <img src={itemsIMG} alt="img" />
            <div className="descreption">
                <p><b>{itemName}</b></p>
                <p>{price}$</p>
            </div>
            <button className='addToCartBttn' onClick={()=> addToCart(id)}  >Ad to Cart {cartAmount > 0 && <>
            ({cartAmount})
            </>} </button>
        </div>
    )
}

export default Product
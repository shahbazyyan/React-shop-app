import React from 'react';

const Product = (props) => {
    const {id, itemName, price, itemsIMG } = props.data;
    return (
        <div className='product' >
            <img src={itemsIMG} alt="img" />
            <div className="descreption">
                <p><b>{itemName}</b></p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn'>Ad to Cart</button>
        </div>
    )
}

export default Product
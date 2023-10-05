import React from 'react';
import ITEMS from "../../Products";
import Product from './Product';
import "./shopping.css";


function Shopping() {
    return (
        <div className='shop'>
            <div className="shopTitle">
                <h1>My React Shop</h1>
            </div>
            <div className="products">
               {ITEMS.map((item) => (
               <Product data={item} />
               ))}
            </div>
        </div>
    );
};

export default Shopping
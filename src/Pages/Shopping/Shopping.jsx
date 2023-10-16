import React from 'react';
import ITEMS from "../../Products";
import Product from './Product';
import "./shopping.css";
import Slider from '../../Components/slider/Slider';
import { SliderData } from '../../Components/slider/sliderData';


function Shopping() {
    return (
        <div className='shop'>
            <div className="shopTitle">
                <h1>My react shop</h1>
                <Slider slides={SliderData}/>
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
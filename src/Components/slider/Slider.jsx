import React from 'react';
import { SliderData } from './sliderData';
import { useState } from 'react';
import {FaArrowCircleRight,FaArrowCircleLeft} from "react-icons/fa";
import "./slider.css";

function Slider({slides}) {
      
    const [curent, setCurent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurent(curent === length-1 ? 0 : curent+1)
    }

    const prevSlide = () => {
        setCurent(curent === 0 ? length - 1: curent - 1)
    };


    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

  


  return (

    <section className='slider'>
        <FaArrowCircleLeft onClick={prevSlide} className="left" />
        <FaArrowCircleRight className="right-arrow" onClick={nextSlide}/>
    {SliderData.map((slide,index) => {
        return (  <div className={index === curent ? "slide active" : "slide"} key={index}>
            {index === curent && (
                <img src={slide.img} alt="img" className='imgs'/>
            )}
        
        </div> 
        )
    })}
    </section>
  )
}

export default Slider;
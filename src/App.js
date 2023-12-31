import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Shopping from './Pages/Shopping/Shopping';
import Cart from './Pages/Cart/Cart';
import ContextShop from './context/ContextShop';
import Slider from './Components/slider/Slider';
import { Sliders } from 'phosphor-react';
import { SliderData } from './Components/slider/sliderData';


function App() {
  return (
   <>
   <div className='App'>
    <ContextShop>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shopping/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </ContextShop>
   </div>
   </>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ShoppingBag } from 'phosphor-react';
import "./navbar.css";


function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <Link to="/"><ShoppingBag size={60}/></Link>
        </div>
        <div className="links">
          <Link to="/">Shop
          </Link>
          <Link to="/cart">
            <ShoppingCart size={32}/>
         </Link>
        </div>
    </div>
  )
}

export default Navbar;
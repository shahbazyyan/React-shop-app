import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Shopping from './Pages/Shopping/Shopping';
import Cart from './Pages/Cart/Cart';


function App() {
  return (
   <>
   <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shopping/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
   </div>
   </>
  );
}

export default App;

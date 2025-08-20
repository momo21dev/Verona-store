import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Landing from './Components/Landing';
import Products from './Components/Products';
import Contact from './Components/Contact';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import Landing from './Components/Landing';
import Products from './Components/Products';
import Contact from './Components/Contact';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

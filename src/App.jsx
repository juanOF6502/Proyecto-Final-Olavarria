import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import ProductoListContainer from './components/ProductoListContainer/ProductoListContainer';
import ProductoDetailContainer from './components/ProductoDetailContainer/ProductoDetailContainer';
import { CarritoProvider } from './context/carritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <>
        <BrowserRouter>
          <CarritoProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ProductoListContainer/>}/>
              <Route path='/productos/:idCategoria' element={<ProductoListContainer/>}/>
              <Route path='/producto/:idProducto' element={<ProductoDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<h2>Sitio en construccion</h2>}/>
            </Routes>
          </CarritoProvider>
        </BrowserRouter>
    </>
  );
}

export default App;

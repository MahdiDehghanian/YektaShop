import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider'
import Header from "./components/Header.js";
import { Router } from "@reach/router"


//pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './components/Footer'
import ProductDetail from './Pages/ProductDetail';

function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'  }}  >
     <Header/>
     <Router>
      <Home path='/' />
      <Cart path='/cart' />
      <ProductDetail path='/productDetail/:id' />
     </Router>
     <Footer/>
    </main>
  );
}

export default App;

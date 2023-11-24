import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import Fashion from './pages/shop/Fashion';
import React from 'react';
import { Progress } from './pages/cart/progress';
import { ShopContextProvider } from './context/shop-context';


function App() {

  return (
  <div>
  <ShopContextProvider>
  <Router>
  <Navbar />
    <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="Fashion" element={<Fashion/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="progress" element={<Progress/>}/>
    </Routes>
    <Footer />
  </Router>
</ShopContextProvider>

    </div>
  );
}

export default App;

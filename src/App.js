import logo from './logo.svg';
import './App.css';

import NavBar from './Compontents/NavBar/NavBar'
import ItemListContainer from './Compontents/ItemListContainer/ItemListContainer';
import {Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Compontents/ItemDetailContainer/ItemDetailContainer';
import Cart from './Compontents/Cart/Cart';
import CartContainer from './Compontents/CartContainer/CartContainer';
import Footer from './Compontents/Footer/Footer';


function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:catID' element={<ItemListContainer />} />
        <Route path='/item/:itemID' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;

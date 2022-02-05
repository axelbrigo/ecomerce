import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import { CartProvider } from 'react-use-cart'


function App() {
  return (
   <>
   <CartProvider>
   <Home/>
  <Cart/>
   </CartProvider>
   </>
  );
}

export default App;

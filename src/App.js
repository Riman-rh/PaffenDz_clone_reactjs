import { useReducer,useState, useEffect} from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Alert from './components/alert/Alert'
import {ThemeProvider} from './ThemeContext'
import store from './app/store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export const ACTIONS = {
  ADD_PRODUCT: 'add-to-cart',
  UPDATE_QUANTITY: 'update-quantity',
  REDUCE_QUANTITY: 'reduce-quantity',
  DELETE_QUANTITY: 'delete_quantity'
}
function reducer(cart, action){

  switch(action.type){
    case (ACTIONS.ADD_PRODUCT):
      let existingItem = cart.findIndex((product) => {return product.id === action.payload.id});
      if (existingItem === -1){
        store.dispatch({type:'product/updateAdd'})
        return [...cart ,{id:action.payload.id, title: action.payload.title ,url: action.payload.url, price: action.payload.price, quantity:1}]

      }else{
        store.dispatch({type:'product/showErr'})
        return [...cart]
      }
    case (ACTIONS.UPDATE_QUANTITY):
      return cart.map(product => {
        if(product.id === action.payload.id){
          return {...product, quantity: product.quantity + 1 }
        }  else {
          return{...product}
        }
      })
    case (ACTIONS.REDUCE_QUANTITY):
      return cart.map(product => {
        if(product.id === action.payload.id){
          if(product.quantity > 1){
            return {...product, quantity: product.quantity - 1 }
          } else{
            return {...product}
          }
        }
      })
    case(ACTIONS.DELETE_QUANTITY):
      return cart.filter(product=>product.id != action.payload.id)
    default:
       return [...cart]
  }

}

function App() {
  const [cart, dispatch] = useReducer(reducer, [], ()=>{
    const localData = localStorage.getItem('cartProducts')
    return localData? JSON.parse(localData): []
  })
  useEffect(()=>{
    localStorage.setItem('cartProducts', JSON.stringify(cart))
  },[cart])
  const [showSuccess, setShowSuccess] = useState(false)


  return (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route exact path='' element={<Home cart={cart} dispatch={dispatch}/>}/>
        
        <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch}/>}/> 
        {
          showSuccess?(<Alert handleExit={setShowSuccess} />): null
        }
      </Routes>
      <Footer/>
    </Router>
  </ThemeProvider>
  );
}

export default App;

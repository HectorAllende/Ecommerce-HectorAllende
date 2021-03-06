import React, { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import About from './components/About/About'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import scrollTop from './components/utils/scrollTop';
import firebase, { FirebaseContext } from './firebase'

import ItemsProvider from './Context/ItemsContext';
import CartProvider from './Context/CartContext';
import HeartProvider from './Context/HeartContext';
import 'boxicons'

function App() {

  useEffect(() => {
    scrollTop()
  })
  return (
    <>
      <FirebaseContext.Provider
        value={{
          firebase
        }}
      >
        <ItemsProvider>
          <CartProvider>
            <HeartProvider>
            
            <BrowserRouter>

              <NavBar />

              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/productos" component={ItemListContainer}></Route>
                <Route exact path="/productos/:category" component={ItemListContainer}></Route>
                <Route exact path="/item/:id" component={ItemDetailContainer}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/checkout" component={Checkout}></Route>
                <Redirect to={"/"} />
              </Switch>
              
              <Footer />
            </BrowserRouter>
           </HeartProvider>

          </CartProvider>
        </ItemsProvider>
      </FirebaseContext.Provider>
    </>

  );
}

export default App;

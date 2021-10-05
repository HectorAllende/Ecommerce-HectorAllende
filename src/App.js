import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import About from './components/About/About'
import Contacto from './components/Contacto/Contacto'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import ItemsProvider from './Context/ItemsContext';

function App() {
  return (
    <>

      <ItemsProvider>




        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/productos" component={ItemListContainer}></Route>
            <Route exact path="/productos/:id" component={ItemListContainer}></Route>
            <Route exact path="/item/:id" component={ItemDetailContainer}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contacto" component={Contacto}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Redirect to={"/"} />
          </Switch>


          <Footer />
        </BrowserRouter>
      </ItemsProvider>









    </>

  );
}

export default App;

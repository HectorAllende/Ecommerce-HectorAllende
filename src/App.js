import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>

      <NavBar />

      <ItemListContainer
        titulo="Alimentos Saludables"
      />

    </>

  );
}

export default App;

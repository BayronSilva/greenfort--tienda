import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './componentes/context/CarritoContext';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element= { <ItemListContainer/> } />
        <Route path="/categoria/:idCategoria" element= { <ItemListContainer/> } />
        <Route path="/item/:idItem" element= { <ItemDetailContainer/> } />
        <Route path="/cart" element = {<h2>Carrito en Breve!</h2>} />
      </Routes>
      </CarritoProvider>
    </BrowserRouter>
    </>
    )
  }

export default App
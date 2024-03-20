import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a este gimnasio'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de la categoria: '}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

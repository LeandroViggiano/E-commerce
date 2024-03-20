import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetail/ItemDetail'

function App() {


  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer />
    </>
  )
}

export default App

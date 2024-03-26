import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, price, img, description, stock}) => {
  const [quantity, setQuantity] = useState(0)

  const handleOnAdd = (quantity) => {
    console.log('cantidad del producto: ' + quantity)
    setQuantity(quantity)
  }

  return (
    <article>
      <img src={img}/>
      <h3>{name}</h3>
      <h4>categoria: {category}</h4>
      <h4>${price}</h4>
      <h4>Description: {description}</h4>
      {quantity === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <button>Finalizar compra</button>}
    </article>
  )
}

export default ItemDetail

import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() =>{
        getProductById('2')
            .then(result =>{
                setProduct(result)
            })
    },[ItemId])

    return(
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </main>
    )
}

export default ItemDetailContainer
import { useEffect } from "react"
import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemlistContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
    }, [])



    return (
        <main>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </main>
    )
}

export default ItemlistContainer
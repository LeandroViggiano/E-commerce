import { useEffect } from "react"
import React, { useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemlistContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

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
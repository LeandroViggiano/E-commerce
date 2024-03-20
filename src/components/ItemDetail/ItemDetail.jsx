import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer = ({name, category, price, img, description, stock}) => {
    return(
            <article>
                <img src={img}/>
                <h3>{name}</h3>
                <h4>categoria: {category}</h4>
                <h4>${price}</h4>
                <h4>Description: {description}</h4>
                <ItemCount stock={stock}/>
            </article>
    )
}

export default ItemDetailContainer
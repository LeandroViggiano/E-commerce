import { Link } from "react-router-dom"

const Item = ({id, name, category, price, img}) => {
   
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('hice click en item')
    }

    return(
        <div onClick={handleClick}>
            <h3>{name}</h3>
            <img src={img} style={{ width: 100}}/>
            <h4>Precio: ${price}</h4>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item
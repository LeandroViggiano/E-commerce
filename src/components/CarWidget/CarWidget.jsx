import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom'

const CarWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart.png'>
            <img src={cart}/>
            { totalQuantity }
        </Link>
    )
}
export default CarWidget
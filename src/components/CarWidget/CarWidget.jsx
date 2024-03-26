import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom'

const CarWidget = () => {
    return(
        <Link to='/cart.png'>
            <img src={cart} style={{width: '10px'}} />
            0
        </Link>
    )
}
export default CarWidget
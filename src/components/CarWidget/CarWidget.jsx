import cart from '../../assets/cart.png'

const CartWidget = () => {
    return(
        <button>
            <img src={cart} style={{width: '10px'}} />
            0
        </button>
    )
}
export default CartWidget

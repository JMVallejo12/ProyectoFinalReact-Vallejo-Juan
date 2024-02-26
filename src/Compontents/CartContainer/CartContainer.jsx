import './cartContainerStyle.css'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Cart from '../Cart/Cart'

function CartContainer(){
    
    const {itemsOnCart} = useContext(CartContext)

    const cartEmpty = itemsOnCart.length > 0 ? <Cart /> : <div>NO HAY ITEMS EN EL CARRITO</div>
    
    return(
        <div className='message-empty-container'>
            <div className='message-empty'>
                {cartEmpty}
            </div>
        </div>
    )
}

export default CartContainer
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './widgetStyle.css'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartWidget(){
    const {itemsOnCart} = useContext(CartContext)

    return(
        <div className='icon-container'>
            <LocalMallIcon className='icon-style'/>
            <span className='cart-number'>
                {
                    itemsOnCart.length
                }
            </span>
        </div>
        
        
    )
}

export default CartWidget
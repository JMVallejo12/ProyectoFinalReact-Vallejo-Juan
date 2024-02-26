import './itemdetailstyle.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import CartContext from '../context/CartContext'
import Button from '../commons/Button/Button'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Link } from 'react-router-dom'

function ItemDetail({id, name, price, cat, desc, img}){
    const {addItemsOnCart} = useContext(CartContext)
    const [itemQuantity, setItemQuantity] = useState(0)

    function addToCart (quantity){
        setItemQuantity(quantity)
        const item ={
            name,
            price,
            desc,
            quantity,
            img,
            id
        }
        addItemsOnCart(item)
    }

    return( 

        <div key={id} className="item-detail-card">
            <img src={img} alt={name} className='item-detail-img'/>
            <h2 className='title-style'>{name}</h2>
            <p>{desc}</p>
            <p className='price-style'>PRECIO: ${price}</p>
            

            <div className='item-bottom-card'>
                {itemQuantity > 0 ? (
                <Link to="/" className='no-deco'><Button>SEGUIR COMPRANDO</Button></Link>
            ) : (
                <div>
                    <ItemCount addToCart={addToCart}/>
                </div>
            )}
            </div>    
            
        </div>
    )
}

export default ItemDetail
import CartContext from '../context/CartContext'
import './cartStyle.css'
import React, { useContext, useState, useEffect } from 'react'
import Button from '../commons/Button/Button'
import Form from '../Form/Form'


function Cart(){

    const {itemsOnCart, setItemsOnCart} = useContext(CartContext)
    console.log("Estamos en cart")
    console.log(itemsOnCart)
    const [total, setTotal] = useState(0)
    const [showForm, setShowForm] = useState(false)

    // Se coloca en un useEffect el tema de sumar el total de los productos
    // porque probando adentro del loop del map, daba error ya que React limita
    // el numero de renderizados, esta fue la unica manera de que funcionara 
    useEffect(() => {
        let totalPrice = 0
        itemsOnCart.forEach(item => {
            totalPrice += item.price * item.quantity
        });
        setTotal(totalPrice)
    }, [itemsOnCart])

    function Remove(id){
        const updatedCart = [...itemsOnCart]
        const index = updatedCart.findIndex(item => item.id === id)
        if (index !== -1) {
            updatedCart.splice(index, 1)
            setItemsOnCart(updatedCart)
        }

    }
            
    return(
        <div className='item-cart-cards-super-container'>
            {
                itemsOnCart.map((item)=>{
                    return(
                            <div className='item-cart-card-container' key={item.id}>
                                <div className='item-cart-card'>
                                    <div className='card-left'>
                                        <img src={item.img} alt={item.name} className='item-cart-img'/>
                                    </div>
                                    <div className='card-right'>
                                        <h2>{item.name}</h2>
                                        <p>PRECIO: ${item.price}</p>
                                        <p>DESCRIPCIÓN: {item.desc}</p>
                                        <p>CANTIDAD: {item.quantity}</p>
                                        <div className='btn-container'>
                                            <Button onClick={() => {Remove(item.id)}}>ELIMINAR</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
            <div className='total-style'>
                El precio total es de: ${total}
            </div>
            <div className='btn-buy-container'>
                {
                !showForm && <Button onClick={() => setShowForm(true)} className="btn-buy-out-form">COMPRAR</Button>
                }
                
            </div>
            <div>
                {
                    showForm && <Form/>
                }
            </div>
        </div>
        
    )
}

export default Cart
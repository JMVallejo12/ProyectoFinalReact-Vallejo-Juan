import { createContext, useState } from "react";

const CartContext = createContext([])

export function CartValueProvider({children}){
    const [itemsOnCart, setItemsOnCart] = useState([])

    function addItemsOnCart(items){
        // Metodo some verifica si algun elemento del carrito tiene la misma ID
        const isInCart = itemsOnCart.some(item=>item.id === items.id)
        if (isInCart){
            console.log("Se encontro un elemento que ya estaba en la lista")
        }else{
            setItemsOnCart([...itemsOnCart, {...items}])
            console.log(items)
            console.log(itemsOnCart)
        }
        
    }

    return(
        <CartContext.Provider value={{itemsOnCart, addItemsOnCart, setItemsOnCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
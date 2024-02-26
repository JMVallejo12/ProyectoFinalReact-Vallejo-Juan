import { useState } from "react"
import './countStyle.css'
import Button from "../commons/Button/Button"

function ItemCount({addToCart}){

    const [value, setValue] = useState(0)

    function add (){
        setValue(value+1)

    }

    function subs(){
        setValue(value-1)

        if (value <= 0){
            setValue(0)

        }
    }

    return(
        <> 
            <div className="counter-container">
                <button onClick={add} className="count-icon">+</button>
                <div className="count-value">{value}</div>
                <button onClick={subs} className="count-icon">-</button>
            </div>

            <div className="item-count-btn">
                <Button disabled={value===0} onClick={() => addToCart(value)}>AGREGAR AL CARRITO</Button>    
            </div>      
        </>
        
        
    )
}

export default ItemCount
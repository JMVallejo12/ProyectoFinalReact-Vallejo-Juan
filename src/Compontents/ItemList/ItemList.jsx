import { Link } from "react-router-dom"
import Item from "../Item/Item"
import './itemlistStyle.css'


function ItemList({items}){
    
    
    return(
        <div className="list-style">
            {
                items.map((item) =>{
                    return(
                        <Link key={item.id} to={`/item/${item.id}`} className="item-list-card">
                            <Item key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            cat={item.cat}
                            desc={item.desc}
                            img={item.img} />
                        </Link>
                        
                    )
                })
            }
        </div>
    )
}

export default ItemList
import './itemStyle.css'

function Item({id, name, price, cat, desc, img}){
    return(
        <div key={id} className='item-card'>
            <img src={img} alt={name} className='item-img'/>
            <div className='bottom-card'>
                <h2 className='item-card-name'>{name}</h2>
                <p>PRECIO: ${price}</p>
            </div>
            
        </div>
    )
}

export default Item
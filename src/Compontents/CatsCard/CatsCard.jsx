import { useEffect } from 'react'
import './catsStyle.css'
import { Link } from 'react-router-dom'

function CatsCard(prop){
    const cat = prop.prop
    
    switch(cat){
        case "food":
            return(
                <Link to="/category/food" className='no-deco'>
                    <div className='cat-card-container'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27iKgS21ce9qYTJGvbgESdvF_6A5Bqivkw00Xgp-lOSSaW5bICYpm1eMduktSorlUEx4&usqp=CAU" alt="foto de un paquete de fideos" className='cat-img'/>
                        <div className='cat-bottom'>
                            <h3 className='cat-title'>COMIDA</h3>
                        </div>
                    </div>
                </Link>
            )
            
        case "cloth":
            return(
                <Link to="/category/cloth" className='no-deco'>
                    <div className='cat-card-container'>
                        <div className='cat-up'>
                            <img src="https://m.media-amazon.com/images/I/A1Rz2T5IgLL._AC_CLa%7C2140%2C2000%7C61PFkM7Wv6L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png" alt="foto de una camiseta de mangas largas" className='cat-img'/>
                        </div>
                        <div className='cat-bottom'>
                            <h3 className='cat-title'>ROPA</h3>
                        </div>
                    </div>
                </Link>
            )
        case "souvenir":
            return(
                <Link to="/category/souvenir" className='no-deco'>
                    <div className='cat-card-container'>
                        <div className='cat-up'>
                            <img src="https://haruhanashop.com/wp-content/uploads/2023/05/Llaveros-Kakao-friends.webp" alt="foto de un llavero" className='cat-img'/>
                        </div>
                        <div className='cat-bottom'>
                            <h3 className='cat-title'>SOUVENIR</h3>
                        </div>
                    </div>
                </Link>
            )
    }

    
    
}

export default CatsCard
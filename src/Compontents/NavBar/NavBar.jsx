import './navStyle.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar(){

    return(
        <div className='nav-container' id='up'>
            <div className='nav-bar'>
                <ul>
                    <Link to="/" className='logo-style'>K-HOME</Link>
                </ul>

                <ul className='r-nav'>
                    <Link to="/category/food" className='li-item'>COMIDA</Link>
                    <Link to="/category/cloth" className='li-item'>ROPA</Link>
                    <Link to="/category/souvenir" className='li-item'>SOUVENIRS</Link>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </ul>
            </div>
        </div>    
    ) 

}

export default NavBar
import './catsContainerStyle.css'
import CatsCard from '../CatsCard/CatsCard'

function CatsContainer(){

    

    return(
        <> 
            <h1 className='h1-cat' >CATEGORIAS</h1>

            <div className='cats-container'>
                <CatsCard prop="food"/>
                <CatsCard prop="cloth"/>
                <CatsCard prop="souvenir"/>
            </div>
        
        </>
        
    )
}

export default CatsContainer
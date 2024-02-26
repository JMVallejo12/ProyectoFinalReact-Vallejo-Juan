import './listContainerStyle.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Spinner from '../commons/Spinner/Spinner'
import CatsContainer from '../CatsContainer/CatsContainer'

function ItemListContainer(){
    const [items, setItems] = useState([])
    const {catID} = useParams()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(()=>{
        const db = getFirestore()
        
        const allItems = collection(db, "items_db")

        if(catID){
            // la funcion query se utiliza para hacer consultas especificas en la base de datos
            // junto con la funcion where, donde se marca los campos a filtrar, el comparador y el catID
            setIsLoading(true)
            const filterItems = query(allItems, where('cat', '==', catID))
            getDocs(filterItems)
            .then(response=>{

                const docs = response.docs.map((item)=> item.data())
                setItems(docs)
                setIsLoading(false)
            })
        }else{
            setIsLoading(true)
            getDocs(allItems)
            .then(response =>{
                const docs = response.docs.map((item)=>item.data())
                setItems(docs)
                setIsLoading(false)
            })
        }
    },[catID])

    if (isLoading) return <Spinner/>

    return(
        <>
            <div className='super-items-container'>
                <div className='items-container'>
                    <CatsContainer />

                    <h2 className='h2-item-container'>PRODUCTOS</h2>
                    <ItemList items={items}/>
                </div>
            </div>
            
        
        </>
        
    )
}

export default ItemListContainer


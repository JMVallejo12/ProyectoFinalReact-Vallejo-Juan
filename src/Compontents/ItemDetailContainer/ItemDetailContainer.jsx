import './detailContainer.css'
import { useContext, useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import CartContext from '../context/CartContext'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import Spinner from '../commons/Spinner/Spinner'

function ItemDetailContainer(){
    const cart = useContext(CartContext)   
    const {itemID} = useParams()
    const [itemDetail, setItemDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const db = getFirestore()
        const detailedItem = doc(db, "items_db", `${itemID}`)
        console.log(detailedItem)
        setIsLoading(true)
        getDoc(detailedItem)
        .then(response=>{
            if(response.exists()){
                const docs = response.data()
                setItemDetail(docs)
                setIsLoading(false)
                console.log(docs)
            }else{
                console.log("No existe el articulo")
            }
        })
    },[itemID])

    if (isLoading) return (<Spinner/>)

    return(
        <div className='detail-container'>
            {itemDetail && <ItemDetail {...itemDetail}/> }
        </div>
    )
}

export default ItemDetailContainer


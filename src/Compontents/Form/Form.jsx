import './formStyle.css'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import { useState, useContext } from 'react'
import CartContext from '../context/CartContext'
import Button from '../commons/Button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form(){

    const notify = () => {
        toast.success('Compra realizada con éxito', {
            position: "bottom-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });
    };

    const [orderID, setOrderID] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [addres, setAdress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState(0)
    const [cardNumber, setCardNumber] = useState(0)
    const [expiryDate, setExpiryDate] = useState(0)
    const [cvv, setCvv] = useState(0)

    const {itemsOnCart,setItemsOnCart} = useContext(CartContext)

    const db = getFirestore()

    function handleSubmit(e){
        e.preventDefault()

        // Comprobamos que ninguno de los campos del form esta vacio
        if (name === "" || email === "" || addres === "" || city === "" || postalCode === 0 || cardNumber === 0 || expiryDate === 0 || cvv === 0) {
        }else{

            const orderCollection = collection(db, "orden")

            const order = {
                buyer:{
                    orderID,
                    name,
                    email,
                    addres,
                    city,
                    postalCode,
                    cardNumber,
                    expiryDate,
                    cvv,
                },
    
                cartItems: itemsOnCart
    
            }
    
            addDoc(orderCollection, order)
            .then(({id}) =>{
                setOrderID(id)
                notify()
                // Se coloca en settimeout porque al dejar el array vacio no se ejecuta
                        // la escritura en la base de datos, por lo tanto se dejan unos segundos para
                        // que se pueda hacer la escritura en la base de datos y luego se borra el array
                        setTimeout(()=>{
                            setItemsOnCart([])
                        },3500)
                
            }) 


        }

        
    }

    return(

    <>
        <div>
            <h2 className='h2-form'>FORMULARIO DE COMPRA</h2>
        </div>

        <div className='super-container-form'>
            <form className='form-container' onSubmit={handleSubmit}>
                
                <div className='form-left'>
                    <label className='label-direction'>
                        NOMBRE:
                        <input type="text" name="name" required onChange={(e) => setName(e.target.value)} className='input-style'/>
                    </label>
                    <label className='label-direction'>
                        EMAIL:
                        <input type="email" name="email" required onChange={(e) => setEmail(e.target.value)} className='input-style'/>
                    </label>
                    <label className='label-direction'>
                        DIRECCIÓN:
                        <input type="text" name="address" required onChange={(e) => setAdress(e.target.value)} className='input-style'/>
                    </label>
                    <label className='label-direction'>
                        CIUDAD:
                        <input type="text" name="city" required onChange={(e) => setCity(e.target.value)} className='input-style'/>
                    </label>
                    <label className='label-direction'>
                        CÓDIGO POSTAL:
                    <input type="text" name="postalCode" pattern="[0-9]*" required onChange={(e) => setPostalCode(e.target.value)} className='input-style'/>
                </label>
                </div>
            
            <div className='form-right'>
                <label className='label-direction'>
                    NÚMERO DE TARJETA:
                    <input type="text" name="cardNumber" pattern="[0-9]*" required onChange={(e) => setCardNumber(e.target.value)} className='input-style'/>
                </label>
                <label className='label-direction'>
                    FECHA DE EXPIRACIÓN:
                    <input type="text" name="expiryDate" required onChange={(e) => setExpiryDate(e.target.value)} className='input-style'/>
                </label>
                <label className='label-direction'>
                    CVV:
                    <input type="text" name="cvv" pattern="[0-9]*" required onChange={(e) => setCvv(e.target.value)} className='input-style'/>
                </label>

                <button type="submit">COMPRAR</button>
            </div>
            </form>
            <ToastContainer
                position="bottom-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                        />
        </div>
        

    </>
    )
}

export default Form
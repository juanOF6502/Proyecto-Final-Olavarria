import { useState, useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"
import { db } from "../../services/firebase.config"
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import './Checkout.css'
import Footer from "../Footer/Footer"

const Checkout = () => {
    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)
    const [nombre, setNombre] = useState('')
    const [apelido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirmacion, setEmailConfirmacion] = useState('')
    const [error, setError] = useState('')
    const [ordenId, setOrdenId ] = useState('')

    const handleForm = (e) => {

        e.preventDefault();

        if(!nombre || !apelido || !telefono || !email || !emailConfirmacion){
            setError('Porfavor complete todos los campos!');
            return;
        }
        if(email !== emailConfirmacion) {
            setError('Email no coincide!!');
            return;
        }

        const orden = {
            items: carrito.map((producto)=> ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apelido,
            telefono,
            email,
            fecha: new Date()
        }

        Promise.all(
            orden.items.map(async(productoOrden) => {
                const productoRef = doc(db, 'productos', productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(()=> {
                addDoc(collection(db, 'ordenes'), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch(error=> {
                        console.error('Detalles de error:', error)
                        setError('Error al intentar crear orden, reintente despues!')
                    })
            })
            .catch(error=> {
                console.error('Error al actualizar stock', error)
                setError('Error al actualizar stock de productos, reintente despues!')
            })
    }

    return (
        <div>
            <div className="checkout-conntainer"> 
                <div className="checkout-list">
                    <h2>Checkout</h2>
                    {carrito.map((producto,index)=> (
                            <div key={index} className="checkout-item">
                                <p>
                                    <span className="checkout-detail">{producto.item.nombre}</span> x {producto.cantidad}
                                </p>
                                <p>Precio $: {producto.item.precio}</p>
                            </div>
                        ))}
                    <p>
                        <span className="checkout-detail">Total Compra</span> ${total}
                    </p>
                </div>
                {
                    !ordenId && (
                        <form onSubmit={handleForm}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>

                            <label htmlFor="apellido">Apellido</label>
                            <input type="text" value={apelido} onChange={(e)=> setApellido(e.target.value)}/>

                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>

                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

                            <label htmlFor="emailConfirmacion">Confirmar Email</label>
                            <input type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
                        
                            {error && <p style={{color:'#EF4423'}}>{error}</p>}
                            <button type="submit">Finalizar compra</button>
                        </form>
                    )
                }
                
            </div>
            <div className="checkout-message"> 
                {
                    ordenId && (<h6><strong>¡Gracias por su compra! Tu numero de orden es: Nº <span>{ordenId}</span></strong></h6>)
                }
            </div>
            <div className="back-home">
                {
                    ordenId && (<Link to={'/'} className='link' onClick={()=> document.title = 'Game Zone || Home'}><button>Volver a ver Productos</button></Link>)
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Checkout
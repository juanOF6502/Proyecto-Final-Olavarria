import {useContext} from 'react'
import { CarritoContext } from '../../context/carritoContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'
import Footer from '../Footer/Footer'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)
    if(cantidadTotal === 0 || cantidadTotal < 0){
        return (
            <div>  
                <div className='no-list'>
                    <h2>No hay productos en el carrito</h2>
                    <Link className='link' to={'/'}> Ver Productos</Link>
                </div>
                <Footer/>
            </div>
        )
    }

    return (
        <>
            <div className='cart-container'>
                <h2>Tu carrito de compras</h2>
                <div className='resumen-productos'>
                    {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
                    <h3>Total: ${total}</h3>
                    <h3>Total Nº productos: {cantidadTotal}</h3>
                </div>
                <button className='btn-delete' onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
                <Link className='link' to={'/checkout'} onClick={()=> document.title = 'Game Zone || Checkout'}>
                    <button>Finalizar Compra</button>
                </Link>
            </div>
            <Footer/>
        </>
        
    )
}

export default Cart
import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"

const CartItem = ({item, cantidad}) => {
    const {eliminarProductos} = useContext(CarritoContext)
    return (
        <div>
            <h4>{item.nombre}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: {item.precio}</p>
            <button className='btn-delete' onClick={()=> eliminarProductos(item.id)}>Eliminar producto</button>
        </div>
    )
}

export default CartItem
import { useContext } from 'react'
import './CardWidget.css'
import { CarritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'

const CardWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)

    return ( 
    <div>
        <Link to={'/cart'} className="link">
          <img className='imgCarrito' src={'../images/cart.png'} alt="Carito de compras" />
          <strong> {cantidadTotal} </strong>
        </Link>
    </div>
  )
}

export default CardWidget
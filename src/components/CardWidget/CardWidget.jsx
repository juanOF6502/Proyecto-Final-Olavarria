import { useContext } from 'react'
import './CardWidget.css'
import { CarritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'

const CardWidget = ({ closeMenu }) => {
    const {cantidadTotal} = useContext(CarritoContext)

    return ( 
    <div className='cart-widget'>
        <Link to={'/cart'} className="link"  onClick={closeMenu}>
          <strong> 
            <img className='imgCarrito' src={'../images/cart.png'} alt="Carito de compras" />
            {cantidadTotal} 
          </strong>
        </Link>
    </div>
  )
}

export default CardWidget
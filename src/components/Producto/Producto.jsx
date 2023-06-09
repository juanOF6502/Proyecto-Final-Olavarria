import './Producto.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const Producto = ({nombre, precio, id, img}) => {
  useEffect(() => {
      Aos.init();
    }, [])

  return (
    <div className='producto-card card' data-aos={"zoom-in"}>
        <img src={img} alt="imagen" className='w-75'/>
        <div className='card-body'>
          <h5 className='card-text'>{nombre}</h5>
          <p>${precio}</p>
          <Link to={`/producto/${id}`} className='details' onClick={()=> document.title = 'Game Zone || Detalles'}> 
            <p className='details-text'> Ver detalles</p> 
          </Link>
        </div>
    </div>
  )
}

export default Producto
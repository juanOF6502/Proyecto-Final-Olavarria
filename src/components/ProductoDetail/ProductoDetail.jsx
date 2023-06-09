import './ProductoDetail.css';
import { useContext , useState } from "react";
import { CarritoContext } from "../../context/carritoContext";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";

const ProductoDetail = ({nombre, precio, id, img, texto, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState('')
    const {agregarProductos} = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = {nombre, precio, id}
        agregarProductos(item, cantidad)
    }

    return (
        <>  
            <h1 className="details-title">Detalles de producto</h1>
            <div className='container'>
                <section className="detail-container">
                    <div className='producto-detail'>
                        <img src={img} alt=""/>
                        <h5>{nombre}</h5>
                        <h5>Precio : ${precio}</h5>
                        <h5>ID: {id}</h5>
                        <h5>Stock: {stock}</h5>
                        {
                        agregarCantidad > 0 
                        ? (<Link to='/cart' className='link' onClick={()=> document.title = 'Game Zone || Carrito'}><button>Terminar Compra</button></Link>)
                        : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                        }
                    </div>
                    <div className="detail-resume">
                        <h3>Informacion</h3>
                        <p>
                            {texto}
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductoDetail
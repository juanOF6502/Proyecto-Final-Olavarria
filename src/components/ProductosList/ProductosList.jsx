import Producto from "../Producto/Producto";
import './ProductosList.css';


const ProductosList = ({ productos }) => {
    return (
        <div className="list-productos">
            {productos.map((producto, index) => (
            <Producto key={index} {...producto} />
            ))}
        </div>
    )
}

export default ProductosList
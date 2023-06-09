import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductoDetail from "../ProductoDetail/ProductoDetail";
import {db} from '../../services/firebase.config'
import { getDoc, doc } from 'firebase/firestore'
import Footer from "../Footer/Footer";

const ProductoDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idProducto} = useParams();
    
    useEffect(()=> {
        const nuevoDoc = doc(db, 'productos', idProducto)
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                const nuevoProducto = {id: res.id, ...data}
                setProducto(nuevoProducto)
            })
    }, [idProducto])

    return (
        <div>
            <ProductoDetail {...producto}/>
            {producto && <Footer />}
        </div>
    )
}

export default ProductoDetailContainer
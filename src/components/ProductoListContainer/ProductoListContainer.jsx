import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductosList from "../ProductosList/ProductosList";
import './ProductListContainer.css'
import {db} from '../../services/firebase.config'
import { collection, getDocs, query, where } from "firebase/firestore"
import Footer from '../Footer/Footer'
import Carrousel from '../Carrousel/Carrousel'

const ProductoListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams([]);

    useEffect(()=> {
        const misProductos = idCategoria 
        ? query(collection(db, 'productos'), where('idCat', '==', idCategoria))
        : collection(db, 'productos')

        getDocs(misProductos)
            .then(res => {
            const nuevosProductos = res.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos)
            })
            .catch(error => console.error(error))
    }, [idCategoria])

    return (
        <>
            <Carrousel/>
            <h1 className="title">Lista de Productos</h1>
            <div>
                <ProductosList productos={productos}/>
            </div>
            {productos.length > 0 && <Footer />}
        </>
    )
}

export default ProductoListContainer
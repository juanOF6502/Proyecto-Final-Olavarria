import {useState} from 'react'

const Contador = ({inicial, stock, funcionAgregar}) => {
    
    const [contador, setContador] = useState(inicial);

    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    return (
        <>
            <button className='btn-delete' onClick={disminuirContador}> - </button>
            <strong> {contador} </strong>
            <button onClick={aumentarContador}> + </button>
            <br />
            <button onClick={()=> funcionAgregar(contador)}> Agregar al carrito</button>
        </>
    )
}

export default Contador
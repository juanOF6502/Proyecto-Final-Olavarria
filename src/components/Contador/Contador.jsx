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
            {
                stock > 0 
                ? (
                    <div>
                        <button className='btn-delete' onClick={disminuirContador}> - </button>
                        <strong> {contador} </strong>
                        <button onClick={aumentarContador}> + </button>
                        <br />
                        <button onClick={()=> funcionAgregar(contador)}> Agregar al carrito</button>
                    </div>
                    
                )
                : (<h5 style={{color:'#EF4423'}}>Sin stock</h5>)
            }
            
        </>
    )
}

export default Contador
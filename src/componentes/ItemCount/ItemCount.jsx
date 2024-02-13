import { useState } from "react"

const ItemCount = ( {inicial, stock, funcionAgregar} ) => {

    const [contador, setContador] = useState(1);

    const aumentar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if(constador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>

        <div>
            <button onClick={disminuir}> - </button>
            <p> {contador} </p>
            <button onClick={aumentar}> + </button>
        </div>
            <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        
        </>
        
    )
}

export default ItemCount
import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ( {inicial, stock, funcionAgregar} ) => {

    const [contador, setContador] = useState(1);

    const aumentar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
        <div className="contenedorCountBoton">
            <div className="contenedorCount">
                <button onClick={disminuir} className="botonSumarRestar"> - </button>
                <p className="contador"> {contador} </p>
                <button onClick={aumentar} className="botonSumarRestar"> + </button>
            </div>
                <button onClick={() => funcionAgregar(contador)} className="botonAgregar"> Agregar al Carrito </button>     
        </div>
        </>
        
    )
}

export default ItemCount
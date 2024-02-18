import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);
    
    if(cantidadTotal === 0) {
        return(
            <div className="contenedorNoProductos">
            <h4>No hay productos en tu carrito</h4>
            <Link to="/"> Ver Productos </Link>
            </div>
        )
    }
    return (
        <div className="contenedorCart">
            <div className="contenedorDosCart">
                {
                    carrito.map(prod => <CartItem key={prod.id} {...prod}/>)
                }
                <h5> Total: ${total}</h5>
                <button onClick={() => vaciarCarrito()} >Vaciar Carrito</button>
                <Link to="/checkout"> Finalizar Compra</Link>
            </div>

        </div>

    )
}

export default Cart
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
    return (
        <div className='contenedorCartItem'>
            <h3> {item.nombre} </h3>
            <p>Cantidad: {cantidad} </p>
            <p>Precio: ${item.precio} </p>
        </div>
    )
}

export default CartItem
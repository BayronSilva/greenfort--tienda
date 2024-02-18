import React from 'react'
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ( {id, stock, nombre, precio, img}) => {
    return (
        <div className="cardProducto">
                <img src={img} alt={nombre} />
                <h3> {nombre} </h3>
                <p>ID: {id} </p>
                <p>Stock: {stock} </p>
                <p> Precio: ${precio} </p>
                <Link to={`/item/${id}`}><p className='botonDescripcion'>Descripción</p></Link>
        </div>
    )
}

export default Item
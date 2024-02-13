import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, stock, precio, img}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);
    }

    return (
        <div className="contenedorItem"> 
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: ${precio} </p>
            <p>ID: {id} </p>
            <p>Stock: {stock} </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sint soluta neque, beatae nulla minus cumque odit rem nobis vitae reiciendis. Voluptatum consequuntur consectetur cupiditate placeat tenetur cumque ab tempora?</p>
        
        {
            agregarCantidad > 0 ? (<Link to="/cart"> Finalizar Compra </Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
        }

        </div>
    )
}

export default ItemDetail
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, stock, precio, img, descripcion}) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    

    const {agregarAlCarrito} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id, nombre, precio};
        agregarAlCarrito(item, cantidad);
    }

    return (
        <div className="contenedorItem"> 
            <img src={img} alt={nombre} />
            <div className='datosItem'>
            <h3> {nombre} </h3>
            <p>Precio: ${precio} </p>
            <p>ID: {id} </p>
            <p>Stock Disponible: {stock} </p>
            <p> {descripcion} </p>
            </div>
        
        {
            agregarCantidad > 0 ? (<Link to="/cart"> Finalizar Compra </Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
        }

        </div>
    )
}

export default ItemDetail
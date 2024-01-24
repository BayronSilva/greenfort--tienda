import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className="contenedorItem"> 
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: ${precio} </p>
            <p>ID: {id} </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sint soluta neque, beatae nulla minus cumque odit rem nobis vitae reiciendis. Voluptatum consequuntur consectetur cupiditate placeat tenetur cumque ab tempora?</p>
        </div>
    )
}

export default ItemDetail
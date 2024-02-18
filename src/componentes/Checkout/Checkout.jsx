import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./checkout.css";

const Checkout = () => {
    const {carrito, vaciarCarrito, total} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState ("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completar todos los campos");
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map( async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad});
            })
        )
        .then( () => {
            addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                Swal.fire({
                title:"¡Orden exitosa!",
                Text: `Número de orden: ${docRef.id}`,
                icon: "success",
                });
            })
            .catch(error => console.log("Error al crear orden", error)) //console.log
        })
        .catch(error => {
            console.log("No se pudo actualizar el stock", error);
            setError("Error al actualizar el stock");
        })
    }

    return (
        <div className="finalizarCompra">
            <h2>Finalizar Compra</h2>

            <form onSubmit={manejadorSubmit} className="contenedorFormulario">
                {
                    carrito.map(producto => (
                        <div key={producto.item.id} className="textoCheckout">
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> ${producto.item.precio} </p>
                            {/* <hr /> */}
                        </div>
                    ))
                }

                <div className="formulario">
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" className="inputFormulario" id="nombre" onChange={(e)=> setNombre(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" className="inputFormulario" id="apellido" onChange={(e)=> setApellido(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor="telefono"> Teléfono </label>
                    <input type="text" className="inputFormulario" id="telefono" onChange={(e)=> setTelefono(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor="email"> E-mail </label>
                    <input type="email" className="inputFormulario" id="email" onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className="formulario">
                    <label htmlFor="emailcon"> E-mail Confirmación </label>
                    <input type="email" className="inputFormulario" id="emailcon" onChange={(e)=> setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{color: "red"}}> {error} </p>
                }
                <button> Finalizar Orden </button>
                {
                    ordenId && <strong> Gacias por su compra! Número de orden: {ordenId} </strong>
                }
            </form>
        </div>
    )
}

export default Checkout
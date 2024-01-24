const productos = [
    {id: "1", nombre:"Greenfort", precio: 15000, img: "../img/greenfort-capsulas.png", idCat:"1"},
    {id: "2", nombre:"Betacar Solar", precio: 10000, img: "../img/betacar.png", idCat:"1"},
    {id: "3", nombre:"Vari Pax Forte", precio: 12000, img: "../img/varipax.png", idCat:"1"},
    {id: "4", nombre:"Vitamina E", precio: 6000, img: "../img/vitamina-e.png", idCat:"1"},
    {id: "5", nombre:"Vision Help", precio: 8000 , img: "../img/visionhelp.png", idCat:"1"},
    {id: "6", nombre:"Reuma Huesitos", precio: 2000, img: "../img/reuma-huesitos.png", idCat:"2"},
    {id: "7", nombre:"Propoleo", precio: 5000, img: "../img/propoleo.png", idCat:"3"},
    {id: "8", nombre:"Promiel", precio: 4000, img: "../img/promiel.png", idCat:"3"}
]


export const getProductos = () => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve (productos);
        }, 2000)
    })
}


//Actividad clase 7

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Funcion que retorna por categoria

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout ( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 2000)
    })
}
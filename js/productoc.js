// =========================
// PRODUCTOS
// =========================
const productos = [

{
    imagen:"/img1/c1.png",
    nombre:"Abyss Signal",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c2.png",
    nombre:"Fallen Duality",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c3.png",
    nombre:"Blood Moon V",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c4.png",
    nombre:"Dragon Flame H",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c5.png",
    nombre:"Phantom Heart P",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c6.png",
    nombre:"Shadow Wings S",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c7.png",
    nombre:"Chaos Rift G",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c8.png",
    nombre:"Heaven & Hell J",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c9.png",
    nombre:"Midnight Cross A",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
},

{
    imagen:"/img1/c10.png",
    nombre:"Crimson Voltage R",
    descripcion:"Playera STREET CROWN HATS edición premium.",
    precio:"$430 MXN"
}

];

// =========================
// OBTENER PARÁMETROS
// =========================
const params = new URLSearchParams(window.location.search);

const nombreURL = params.get("nombre");

let indice = productos.findIndex(
    producto => producto.nombre === nombreURL
);

// SI NO EXISTE
if(indice === -1){
    indice = 0;
}

// =========================
// MOSTRAR PRODUCTO
// =========================
function mostrarProducto(){

    document.getElementById("imagen-producto").src =
    productos[indice].imagen;

    document.getElementById("nombre-producto").innerText =
    productos[indice].nombre;

    document.getElementById("descripcion-producto").innerText =
    productos[indice].descripcion;

    document.getElementById("precio-producto").innerText =
    productos[indice].precio;
}

// =========================
// CAMBIAR PRODUCTO
// =========================
function cambiarProducto(direccion){

    indice += direccion;

    if(indice < 0){
        indice = productos.length - 1;
    }

    if(indice >= productos.length){
        indice = 0;
    }

    mostrarProducto();
}

// =========================
// WHATSAPP
// =========================
function enviarPedido(){

    let cantidad =
    document.getElementById("cantidad").value;

    let talla =
    document.getElementById("talla").value;

    let producto =
    productos[indice].nombre;

    let mensaje =
    `Hola quiero pedir ${cantidad} playera(s) ${producto} talla ${talla}`;

    let telefono = "525653971960";

    window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );
}

// =========================
// CARGAR
// =========================
document.addEventListener("DOMContentLoaded", () => {

    mostrarProducto();

});
/* =========================
   AGREGAR AL CARRITO
========================= */
function agregarCarrito(){

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    const producto = {

        nombre:
        productos[indice].nombre,

        precio:
        productos[indice].precio,

        imagen:
        productos[indice].imagen,

        talla:
        document.getElementById("talla").value,

        cantidad: parseInt(
            document.getElementById("cantidad").value
        )

    };

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito");

}
/* =========================
   AGREGAR CARRITO
========================= */
function agregarCarrito(){

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    const producto = {

        nombre:
        productos[indice].nombre,

        precio:
        productos[indice].precio,

        imagen:
        productos[indice].imagen,

        talla:
        document.getElementById("talla").value,

        cantidad: parseInt(
            document.getElementById("cantidad").value
        )

    };

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    alert("Producto agregado al carrito");

}

/* =========================
   CONTADOR
========================= */
function actualizarContador(){

    let contador =
    document.getElementById("contador-carrito");

    if(!contador) return;

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    let total = 0;

    carrito.forEach(producto => {

        total += producto.cantidad;

    });

    contador.innerText = total;

}

/* =========================
   INICIAR
========================= */
document.addEventListener("DOMContentLoaded", () => {

    mostrarProducto();

    actualizarContador();

});
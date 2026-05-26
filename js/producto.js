const productos = [

{
    imagen:"img1/1.jpeg",
    nombre:"ELECTRIC SKY",
    descripcion:"Nuestras gorras están pensadas para que tengan un buen estilo.",
    precio:"$450 MXN"
},

{
    imagen:"img1/2.jpeg",
    nombre:"CRIMSON VOLTAGE",
    descripcion:"Nuestras gorras están pensadas para que tengan un buen estilo.",
    precio:"$460 MXN"
},

{
    imagen:"img1/3.jpeg",
    nombre:"DARK FIRE",
    descripcion:"Nuestras gorras están pensadas para que tengan un buen estilo.",
    precio:"$470 MXN"
},

{
    imagen:"img1/4.jpeg",
    nombre:"STORM DRAGON",
    descripcion:"Nuestras gorras están pensadas para que tengan un buen estilo.",
    precio:"$480 MXN"
},

{
    imagen:"img1/5.jpeg",
    nombre:"RED SCORPION",
    descripcion:"Nuestras gorras están pensadas para que tengan un buen estilo.",
    precio:"$490 MXN"
},

{
    imagen:"img1/6.jpeg",
    nombre:"A BLOODLINE",
    descripcion:"Nuestras gorras están pensadas para que tengan un buen estilo.",
    precio:"$500 MXN"
},

{
    imagen:"img1/7.jpeg",
    nombre:"#PRÓXIMAMENTE#",
    descripcion:"Próximamente.",
    precio:"--"
}

];

// =========================
// LEER ID DE LA URL
// =========================
const params = new URLSearchParams(window.location.search);

let indice = parseInt(params.get("id"));

// SI NO HAY ID VÁLIDO
if (isNaN(indice)) {
    indice = 0;
}

// =========================
// MOSTRAR PRODUCTO
// =========================
function mostrarProducto(){

    const imagen =
    document.getElementById("imagen-producto");

    const nombre =
    document.getElementById("nombre-producto");

    const descripcion =
    document.getElementById("descripcion-producto");

    const precio =
    document.getElementById("precio-producto");

    imagen.src = productos[indice].imagen;

    nombre.innerText =
    productos[indice].nombre;

    descripcion.innerText =
    productos[indice].descripcion;

    precio.innerText =
    productos[indice].precio;
}

// =========================
// CAMBIAR PRODUCTO
// =========================
function cambiarProducto(direccion){

    indice += direccion;

    // SI VA HACIA ATRÁS
    if(indice < 0){
        indice = productos.length - 1;
    }

    // SI SE PASA
    if(indice >= productos.length){
        indice = 0;
    }

    mostrarProducto();
}

// =========================
// ENVIAR A WHATSAPP
// =========================
function enviarPedido(){

    let cantidad =
    document.getElementById("cantidad").value;

    let producto =
    productos[indice].nombre;

    let mensaje =
    `Hola quiero pedir ${cantidad} pieza(s) de ${producto}`;

    let telefono = "525653971960";

    window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );
}

// =========================
// CARGAR PRODUCTO
// =========================
document.addEventListener("DOMContentLoaded", function(){

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

        talla:"Única",

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

        talla:"Única",

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
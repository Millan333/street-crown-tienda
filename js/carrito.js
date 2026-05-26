let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];

/* =========================
   AGREGAR PRODUCTO
========================= */
function agregarCarrito(){

    let tallaElemento =
    document.getElementById("talla");

    const producto = {

        nombre:
        document.getElementById(
            "nombre-producto"
        ).textContent,

        precio:
        document.getElementById(
            "precio-producto"
        ).textContent,

        imagen:
        document.getElementById(
            "imagen-producto"
        ).src,

        talla:
        tallaElemento
        ? tallaElemento.value
        : "Única",

        cantidad: parseInt(
            document.getElementById(
                "cantidad"
            ).value
        )

    };

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    mostrarCarrito();

}

/* =========================
   CONTADOR
========================= */
function actualizarContador(){

    let contador =
    document.getElementById(
        "contador-carrito"
    );

    if(contador){

        let totalProductos = 0;

        carrito.forEach(producto => {

            totalProductos +=
            producto.cantidad;

        });

        contador.textContent =
        totalProductos;

    }

}

/* =========================
   MOSTRAR CARRITO
========================= */
function mostrarCarrito(){

    let lista =
    document.getElementById(
        "lista-carrito"
    );

    if(!lista) return;

    lista.innerHTML = "";

    /* SI ESTA VACIO */
    if(carrito.length === 0){

        lista.innerHTML = `

            <p class="text-dark text-center">

                Tu carrito está vacío

            </p>

        `;

        let totalCarrito =
        document.getElementById(
            "total-carrito"
        );

        if(totalCarrito){

            totalCarrito.textContent =
            "$0";

        }

        return;

    }

    let total = 0;

    carrito.forEach((producto, index) => {

        let precioNumero = parseFloat(

            producto.precio
            .replace("$","")
            .replace("MXN","")
            .trim()

        );

        let subtotal =
        precioNumero *
        producto.cantidad;

        total += subtotal;

        lista.innerHTML += `

            <div class="carrito-item d-flex gap-2 mb-3 align-items-center bg-white p-2 rounded">

                <img src="${producto.imagen}"
                     width="70"
                     height="70"
                     style="
                        object-fit:cover;
                        border-radius:10px;
                     ">

                <div class="flex-grow-1 text-dark">

                    <strong>

                        ${producto.nombre}

                    </strong>

                    <p class="m-0">

                        Talla:
                        ${producto.talla}

                    </p>

                    <p class="m-0">

                        Cantidad:
                        ${producto.cantidad}

                    </p>

                    <p class="m-0">

                        Precio:
                        ${producto.precio}

                    </p>

                    <p class="m-0 fw-bold">

                        Subtotal:
                        $${subtotal}

                    </p>

                </div>

                <!-- ELIMINAR -->
                <button class="btn btn-danger btn-sm"
                        onclick="eliminarProducto(${index})">

                    <i class="bi bi-trash"></i>

                </button>

            </div>

        `;

    });

    /* TOTAL */
    let totalCarrito =
    document.getElementById(
        "total-carrito"
    );

    if(totalCarrito){

        totalCarrito.textContent =
        `$${total}`;

    }

}

/* =========================
   ELIMINAR PRODUCTO
========================= */
function eliminarProducto(index){

    carrito.splice(index, 1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    mostrarCarrito();

}

/* =========================
   VACIAR CARRITO
========================= */
function vaciarCarrito(){

    carrito = [];

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    mostrarCarrito();

}

/* =========================
   COMPRAR WHATSAPP
========================= */
function comprarWhatsApp(){

    if(carrito.length === 0){

        alert(
            "Tu carrito está vacío"
        );

        return;

    }

    let mensaje =
    "Hola, quiero pedir:%0A%0A";

    let total = 0;

    carrito.forEach(producto => {

        let precioNumero = parseFloat(

            producto.precio
            .replace("$","")
            .replace("MXN","")
            .trim()

        );

        let subtotal =
        precioNumero *
        producto.cantidad;

        total += subtotal;

        mensaje +=
        `• ${producto.nombre}%0A`;

        mensaje +=
        `Talla: ${producto.talla}%0A`;

        mensaje +=
        `Cantidad: ${producto.cantidad}%0A`;

        mensaje +=
        `Subtotal: $${subtotal}%0A%0A`;

    });

    mensaje +=
    `%0ATotal del pedido: $${total}`;

    let numero =
    "525653971960";

    window.open(

        `https://wa.me/${numero}?text=${mensaje}`,

        "_blank"

    );

    /* VACIAR DESPUES DE COMPRAR */
    carrito = [];

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    mostrarCarrito();

}

/* =========================
   CARRITO MOVIL
========================= */
function abrirCarritoMovil(){

    if(window.innerWidth <= 768){

        window.location.href =
        "carrito.html";

    }

}

/* =========================
   INICIAR
========================= */
document.addEventListener(
    "DOMContentLoaded",
    () => {

        actualizarContador();

        mostrarCarrito();

    }
);
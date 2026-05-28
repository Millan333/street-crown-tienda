let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];

/* =========================
   AGREGAR PRODUCTO
========================= */
function agregarCarrito(){

    let tallaElemento =
    document.getElementById("talla");

    let cantidadElemento =
    document.getElementById("cantidad");

    const producto = {

        nombre:
        document.getElementById(
            "nombre-producto"
        ).textContent.trim(),

        precio:
        document.getElementById(
            "precio-producto"
        ).textContent.trim(),

        imagen:
        document.getElementById(
            "imagen-producto"
        ).src,

        talla:
        tallaElemento
        ? tallaElemento.value
        : "Única",

        cantidad:
        parseInt(
            cantidadElemento.value
        ) || 1

    };

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    mostrarCarrito();

    alert("Producto agregado al carrito");

}

/* =========================
   ACTUALIZAR CONTADOR
========================= */
function actualizarContador(){

    let totalProductos = 0;

    carrito.forEach(producto => {

        totalProductos +=
        producto.cantidad;

    });

    /* CONTADOR MOVIL */
    let contador =
    document.getElementById(
        "contador-carrito"
    );

    if(contador){

        contador.textContent =
        totalProductos;

    }

    /* CONTADOR DESKTOP */
    let contadorDesktop =
    document.getElementById(
        "contador-carrito-desktop"
    );

    if(contadorDesktop){

        contadorDesktop.textContent =
        totalProductos;

    }

}

/* =========================
   MOSTRAR CARRITO
========================= */
function mostrarCarrito(){

    let lista =
    document.getElementById(
        "carrito-contenedor"
    );

    let listaMini =
    document.getElementById(
        "lista-carrito"
    );

    if(!lista && !listaMini){

        return;

    }

    /* LIMPIAR */
    if(lista){

        lista.innerHTML = "";

    }

    if(listaMini){

        listaMini.innerHTML = "";

    }

    /* =========================
       CARRITO VACIO
    ========================= */
    if(carrito.length === 0){

        let vacioHTML = `

            <div class="text-center text-white py-5">

                <i class="bi bi-cart-x"
                   style="font-size:4rem;"></i>

                <h3 class="mt-3">

                    Tu carrito está vacío

                </h3>

            </div>

        `;

        if(lista){

            lista.innerHTML =
            vacioHTML;

        }

        if(listaMini){

            listaMini.innerHTML = `

                <p class="text-dark text-center">

                    Tu carrito está vacío

                </p>

            `;

        }

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

        ) || 0;

        let subtotal =
        precioNumero *
        producto.cantidad;

        total += subtotal;

        /* =========================
           CARRITO GRANDE
        ========================= */
        let productoHTML = `

        <div class="card bg-dark text-white mb-4 border border-secondary shadow-lg">

            <div class="row g-0 align-items-center">

                <!-- IMAGEN -->
                <div class="col-12 col-md-4 text-center p-3">

                    <img src="${producto.imagen}"
                         class="img-fluid rounded"
                         style="
                            width:220px;
                            height:220px;
                            object-fit:cover;
                         ">

                </div>

                <!-- INFO -->
                <div class="col-12 col-md-8">

                    <div class="card-body">

                        <h2 class="fw-bold mb-3">

                            ${producto.nombre}

                        </h2>

                        <p class="mb-2 fs-5">

                            <strong>Talla:</strong>
                            ${producto.talla}

                        </p>

                        <p class="mb-2 fs-5">

                            <strong>Cantidad:</strong>
                            ${producto.cantidad}

                        </p>

                        <p class="mb-2 fs-5">

                            <strong>Precio:</strong>
                            ${producto.precio}

                        </p>

                        <p class="fw-bold text-warning fs-4">

                            Subtotal:
                            $${subtotal}

                        </p>

                        <!-- BOTON -->
                        <button class="btn btn-danger mt-3"
                                onclick="eliminarProducto(${index})">

                            <i class="bi bi-trash"></i>

                            Eliminar producto

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

        /* =========================
           MINI CARRITO NAV
        ========================= */
        let miniHTML = `

        <div class="d-flex gap-2 mb-3 border-bottom pb-2">

            <img src="${producto.imagen}"
                 width="60"
                 height="60"
                 style="
                    object-fit:cover;
                    border-radius:10px;
                 ">

            <div class="flex-grow-1 text-dark">

                <strong>

                    ${producto.nombre}

                </strong>

                <p class="m-0">

                    Cantidad:
                    ${producto.cantidad}

                </p>

                <p class="m-0">

                    ${producto.precio}

                </p>

            </div>

        </div>

        `;

        /* INSERTAR */
        if(lista){

            lista.innerHTML +=
            productoHTML;

        }

        if(listaMini){

            listaMini.innerHTML +=
            miniHTML;

        }

    });

    /* =========================
       TOTAL
    ========================= */
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

        ) || 0;

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

    /* LIMPIAR CARRITO */
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
function abrirCarritoMovil(event){

    if(window.innerWidth <= 768){

        event.preventDefault();

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
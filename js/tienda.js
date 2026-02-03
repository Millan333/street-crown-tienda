window.onload = function() {
    const parametros = new URLSearchParams(window.location.search);
    const nombreRecibido = parametros.get('nombre');
    const imagenRecibida = parametros.get('img');

    if (nombreRecibido) {
        document.getElementById('nombre-producto').innerText = nombreRecibido;
    }

    if (imagenRecibida) {
        // Aquí es donde usamos el ID que acabas de poner
        document.getElementById('imagen-producto').src = "/img/" + imagenRecibida;
    }
};

// Tu función de WhatsApp se queda igual...
function enviarPedido() {
    const nombre = document.getElementById('nombre-producto').innerText;
    const cantidad = document.getElementById('cantidad').value;
    const telefono = "525653971960"; 
    const mensaje = "Hola Street Crown Hats, quiero comprar " + cantidad + " unidades de la " + nombre;
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
} 
window.onload = function() {
    // 1. Capturamos los datos que vienen en la URL
    const parametros = new URLSearchParams(window.location.search);
    const nombreRecibido = parametros.get('nombre');
    const imagenRecibida = parametros.get('img1');
    const descripcionRecibida = parametros.get('desc'); // Opcional por si quieres cambiar el texto

    // 2. Si existe un nombre en la URL, lo ponemos en el h2
    if (nombreRecibido) {
        document.getElementById('nombre-producto').innerText = nombreRecibido;
    }

    // 3. Si existe una imagen en la URL, cambiamos el src de la foto
    if (imagenRecibida) {
        // Usamos la ruta de tu carpeta img1 que se ve en tu HTML
        document.getElementById('imagen-producto').src = "img1/" + imagenRecibida;
    }
};
// Función para enviar el pedido a WhatsApp
function enviarPedido() {
    // Obtenemos el nombre que esté escrito en ese momento en el h2
    const nombre = document.getElementById('nombre-producto').innerText;
    const cantidad = document.getElementById('cantidad').value;
    const telefono = "525653971960";
    
    // Creamos el mensaje dinámico
    const mensaje = "Hola Street Crown Hats, quiero comprar " + cantidad + " unidades de la " + nombre;
    
    // Abrimos el enlace de WhatsApp
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

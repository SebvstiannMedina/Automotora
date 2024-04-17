document.addEventListener('DOMContentLoaded', function() {
    const carrito = document.getElementById('carrito');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const totalContainer = document.getElementById('total');

    // Función para vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', function() {
        carrito.innerHTML = ''; // Vaciar el contenido del carrito
        actualizarTotal(0); // Actualizar el total a cero
    });

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(nombre, precio) {
        const productoHTML = document.createElement('div');
        productoHTML.classList.add('col-12');
        productoHTML.innerHTML = `
            <div class="producto">
                <p>${nombre} - $${precio}</p>
                <button class="btn btn-sm btn-danger">Eliminar</button>
            </div>
        `;
        carrito.appendChild(productoHTML);
        // Actualizar el total al agregar un producto
        actualizarTotal(parseFloat(precio));
    }

    // Función para actualizar el total
    function actualizarTotal(precioProducto) {
        const totalActual = parseFloat(totalContainer.textContent.replace('$', ''));
        const nuevoTotal = totalActual + precioProducto;
        totalContainer.textContent = `$${nuevoTotal.toFixed(2)}`;
    }

    // Ejemplo: Agregar algunos productos al carrito
    agregarProductoAlCarrito('Producto 1', 10.50);
    agregarProductoAlCarrito('Producto 2', 20.75);
});

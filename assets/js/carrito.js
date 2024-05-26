// Obtener carrito del local storage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para mostrar los productos del carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito');
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        carritoContainer.innerHTML = '';
        carrito.forEach(producto => {
            const productoHTML = `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="./assets/IMG/${producto.img}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Precio: $${producto.precio}</p>
                            <button class="btn btn-danger" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;
            carritoContainer.innerHTML += productoHTML;
        });
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(p => p.id === id);
    if (indice !== -1) {
        carrito.splice(indice, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Cargar productos del carrito al cargar la página
window.onload = () => {
    mostrarCarrito();
};

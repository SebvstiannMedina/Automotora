// Guardar productos en el localStorage
localStorage.setItem('productos', JSON.stringify(products));

// Función para crear cartas desde datos en el localStorage
function createCards() {
    const container = document.getElementById('cards-container');
    const productos = JSON.parse(localStorage.getItem('productos'));

    if (productos) {
        productos.forEach(product => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';

            const productImage = document.createElement('img');
            productImage.src = product.urlImagen;
            productImage.alt = product.nombre;

            const productName = document.createElement('h3');
            productName.textContent = product.nombre;

            const productValue = document.createElement('p');
            productValue.textContent = `Precio: $${product.valor}`;

            const productStock = document.createElement('p');
            productStock.textContent = `Existencia: ${product.existencia}`;

            cardElement.appendChild(productImage);
            cardElement.appendChild(productName);
            cardElement.appendChild(productValue);
            cardElement.appendChild(productStock);
            container.appendChild(cardElement);
        });
    } else {
        container.innerHTML = '<p>No hay productos disponibles.</p>';
    }
}

// Llamar a la función para crear cartas al cargar la página
window.onload = createCards;
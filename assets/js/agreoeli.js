
// Lista de productos (simulación de una base de datos)
var productos = [
    "Sedan",
    "Motocicletas",
    "Hatchback",
    "SUV"
  ];

  // Función para agregar un producto a la lista
  function agregarProducto() {
    var nuevoProducto = document.getElementById("productName").value;
    productos.push(nuevoProducto);
    actualizarListaProductos();
  }

  // Función para eliminar un producto de la lista
  function eliminarProducto() {
    var selectProductos = document.getElementById("productos");
    var productoSeleccionado = selectProductos.value;
    var indice = productos.indexOf(productoSeleccionado);
    if (indice !== -1) {
      productos.splice(indice, 1);
      actualizarListaProductos();
    }
  }

  // Función para actualizar la lista de productos en el select
  function actualizarListaProductos() {
    var selectProductos = document.getElementById("productos");
    // Limpiar la lista antes de actualizar
    selectProductos.innerHTML = "";
    // Agregar cada producto como una opción en el select
    productos.forEach(function(producto) {
      var option = document.createElement("option");
      option.text = producto;
      selectProductos.add(option);
    });
  }

  // Llamar a la función inicialmente para llenar el select con productos
  actualizarListaProductos();
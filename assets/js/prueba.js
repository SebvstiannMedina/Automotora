document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto

  // Verificar si el usuario ya ha iniciado sesión
  if (sessionStorage.getItem('sesionIniciada')) {
      // Si ya ha iniciado sesión, redirigir a la página principal
      window.location.href = 'index.html';
      return; // Detener la ejecución del resto del código
  }

  // Obtener los valores del formulario
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var role = document.getElementById('role').value;

  // Definir arrays de correos electrónicos y contraseñas para administradores y clientes
  var administradores = [
      { email: "seba.medina@duocuc.cl", password: "seba1234" },
      { email: "fra.aliaga@duocuc.cl", password: "franco1234" },
      { email: "admin2@example.com", password: "admin2pass" }
  ];
  var clientes = [
      { email: "cliente1@example.com", password: "cliente1pass" },
      { email: "cliente2@example.com", password: "cliente2pass" }
  ];

  // Verificar si el correo y la contraseña coinciden con algún usuario
  var usuarioEncontrado;
  if (role === 'admin') {
      usuarioEncontrado = administradores.find(function(usuario) {
          return usuario.email === email && usuario.password === password;
      });
  } else {
      usuarioEncontrado = clientes.find(function(usuario) {
          return usuario.email === email && usuario.password === password;
      });
  }

  // Redirigir según el rol y la autenticación
  if (usuarioEncontrado) {
      if (role === 'admin') {
          window.location.href = './index.html';
      } else {
          window.location.href = 'cliente.html';
      }
      // Establecer el indicador de inicio de sesión
      sessionStorage.setItem('sesionIniciada', 'true');
  } else {
      // Si el usuario no existe o las credenciales son incorrectas, mostrar un mensaje de error
      alert("Correo o contraseña incorrectos");
  }
});

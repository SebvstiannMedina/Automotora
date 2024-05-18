

let btnEnviar = document.getElementById("btnEnviar");

let email = "";
let password = "";

btnEnviar.addEventListener("click", (e)=> {

    e.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

})
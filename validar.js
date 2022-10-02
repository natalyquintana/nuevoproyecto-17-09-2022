function validar_login(){
let usuario= document.DOCUMENT_FRAGMENT_NODE.usuario.value;
let pass = document.DOCUMENT_FRAGMENT_NODE.pass.value;

if (usuario=== "nataly" && pass === "12345"){

       location.href( "paginaprincipal.html");
       alert("Bienvenido" + usuario);
       }

}
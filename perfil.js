
const prompt = require('prompt-sync')();

console.log ("bienvenido al sistema. ")
let perfil = prompt("Especifica que tipo de usuario sos: ");

if ((perfil == "administrador")||(perfil== "ADMINISTRADOR")||(perfil=="Administrador")) {
    console.log ( "Usted tiene todos los privilegios de administrador");
}
else if ((perfil == "asistente")||(perfil== "ASISTENTE")||(perfil=="Asistente")){
    console.log ("Usted solo tiene permisos de registra modificar y consultar datos");
}
else if ((perfil == "invitado")||(perfil== "INVITADO")||(perfil=="Invitado")) {
    console.log ("Usted solo tiene permiso de consultar datos");
}
else(
    console.log ( "debe especificar un perfil valido")
)
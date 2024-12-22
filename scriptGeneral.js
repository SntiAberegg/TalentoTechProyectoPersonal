/*
-----------------------------------------------
API DE PRONOSTICO DEL CLIMA

*/

//PARAMETROS
let lat=`34.6S`;
let lon=`58.45W`;
const apiKey = '5dh476dm5lz6sg2bqcdgg9ahsqyze296obgtmhxu';
let placeId = 'ciudad-autonoma-de-buenos-aires'; // ubicación

// URL de la API de Meteosource
const apiUrl = `https://www.meteosource.com/api/v1/free/point?key=${apiKey}&place_id=${placeId}`;

    fetch(apiUrl)
        .then((respuesta)=>respuesta.json())
        .then(data => {
            console.log("");
            console.log(`TEST API DEL CLIMA`)
            console.log("*************");
            console.log(`La temperatura actual en ${placeId} es ${data.current.temperature} °C.`);
        
//probar recoleccion de datos
console.log("*************");
console.log("PARAMETROS:");
//muestro en consola la estructura de los datos obtenidos
console.log(data);

/*
DATOS USUALES:
Temperatura:°C
${data.current.temperature}

Prob. de precipitaciones:%
${data.current.precipitation.total} 

Viento:km/h
${data.current.wind.speed}


*/

console.log("");
console.log("*************");


// INSERTAR en el DOM
    var climaCapturaBox=document.getElementById("contenedorClima")

    var climaCreadoBox=document.createElement("div")
    

    climaCreadoBox.innerHTML =
    `
    <h2 id="temperatura_Api_Element">${data.current.temperature} °C</h2>

    <h6 class="api_Element">Prob. Precipitaciones: ${data.current.precipitation.total} %</h6>
    
    <h6 class="api_Element"> Viento: 
${data.current.wind.speed} km/h</h6>

<h6 class="api_Element">Area: ${placeId}</h6>
    
    `;

    climaCapturaBox.append(climaCreadoBox);


        })
        .catch(error => console.error('Error al obtener el pronóstico:', error));

/*
---------------VENTANA DE REGISTRAR USUARIO

INPUT REGISTRO:
userMail_Registro
userPassword_Registro
userName_Registro

BOTON REGISTRO:
btn_Registro


*/

//BOTON DE REGISTRO
let btnRegistro = document.getElementById('btn_Registro')

btnRegistro.addEventListener('click', function(){

//DATOS DE REGISTRO
    let userName= document.getElementById('userName_Registro').value;

    let email = document.getElementById('userMail_Registro').value;
    
    let password= document.getElementById('userPassword_Registro').value;

//verificar datos
    if (!userName || !email || !password) {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Guardar datos en localStorage
    const usuario = {
        userName,
        email,
        password
    };

    localStorage.setItem('usuarios', JSON.stringify([
        ...JSON.parse(localStorage.getItem('usuarios') || '[]'),
        usuario
    ]));

    alert('Usuario registrado exitosamente');
});

/*

---------------VENTANA INICIAR SESION

INPUT SESION:
userMail_Sesion
password_Sesion

BOTON INICIAR:
sesion_iniciar (MODAL)
btnSesion_Principal (INICIAL)

-----CONTENEDORES DOM-----
contenedorUserInfo
iniciarSesion_Box

MODAL:
iniciarSesionVentana
---------------------------

*/

//Ventana modal
let ventanaLogin=document.getElementById('iniciarSesionVentana');


//BOTON INICIO DE SESION /MODAL
let botonSesion= document.getElementById('sesion_iniciar');

//BOTON DE SESION INICIAL
let botonPrincipal= document.getElementById('btnSesion_Principal');

// CAPTURAR BOTON / Cerrar sesión
let fin_sesion = document.getElementById('cerrarSesion')

//CONTENEDORES/ MOSTRAR DATOS DE SESION
let userInfo_contenedor= document.getElementById('contenedorUserInfo');

let sesion_Box= document.getElementById('iniciarSesion_Box');


//ACCION DEL BOTON/iniciar sesion

botonSesion.addEventListener('click', function(){

    //DATOS DE LA SESION
    let email = document.getElementById('userMail_Sesion').value;

    const password = document.getElementById('password_Sesion').value;

    //verificar datos
    if (!email || !password) {
        alert('Por favor, complete todos los campos');
        return;
    }

    /*
    la base de datos esta simulada en local storage donde se almacena un array de informacion que luego se compara
    */

    //localStorage datos
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

// Variable para almacenar el usuario encontrado
let user = null;

// Recorrer el array de usuarios
usuarios.forEach(elemento => {
    if (elemento.email === email && elemento.password === password) {
        user = elemento;
        console.log('el usuario se verifico');
        console.log(user)
    }
});

// Verificar si se encontró el usuario
if (user) {
    // Guardar sesión actual
    sessionStorage.setItem('usuarioActual', JSON.stringify(user));

    //Mostrar nombre de usuario en DOM
    userInfo_contenedor.textContent = `Usuario: ${user.userName}`;

    //Mostrar Cerrar Sesion
    fin_sesion.style.display = 'inline';

    alert("Inicio de Sesion EXITOSO");

    } else {
        alert('Email o contraseña incorrectos');
    }

    //Ocultar Iniciar Sesion
    botonPrincipal.style.display = 'none';


//-----Fin Listener btn Sesion

});

/*
---------------TERMINAR SESION

Comentario:
El boton fue captura anteriormente para poder hacerlo aparecer luego de que el user inicie sesion

BOTON SALIR ID:
cerrarSesion

NOMBRE DE LA VAR DE CAPTURA:
fin_sesion

*/

fin_sesion.addEventListener('click',function(){

    sessionStorage.removeItem('usuarioActual');

    //modificar el contenedor de user info en DOM
    // sesion_Box.style.display = 'none';
    
    //RESETEAR VALORES DE USUARIO
    document.getElementById('userMail_Sesion').value = '';
    
    document.getElementById('password_Sesion').value = '';

    //MOSTRAR BOTON
    botonPrincipal.style.display = 'inline';

    //OCULTAR BOTON + INFO
    fin_sesion.style.display = 'none';
    contenedorUserInfo.style.display = 'none';
});

// Verificar si hay sesión activa al cargar la página
window.addEventListener('load', () => {
    const usuarioActual = sessionStorage.getItem('usuarioActual');
    if (usuarioActual) {
        const usuario = JSON.parse(usuarioActual);

        // contenedorUserInfo.textContent = usuario.userName;
    }
});
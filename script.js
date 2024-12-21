/*
CONSIGNAS

1. Implementar una función que verifique si todos los
campos del formulario de contacto están
completos, mostrando un mensaje en la consola.
*/

// capturar elementos del formulario
document.getElementById("formulario_contacto").addEventListener("submit", function(){
    
//Capturar inputs
    let mensaje = document.getElementById('inputText__form_element').value.trim();
    
    let email = document.getElementById('inputMail__form_element').value.trim();
    
//control de contenido
    if (mensaje===''|| email===''){
        alert("Por favor, complete todos los campos.");
    }else{
        console.log("Todos los campos del formulario fueron completados."); this.submit();
        // Enviar el formulario si todos los campos están completos
    }

    
// ....Fin Evento submit

});

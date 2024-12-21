
/*
Evento click que muestra la descripción ampliada de una card.

*/

//capturar elementos DOM
let botonCard_cursos=document.getElementById("botonVerMas_card1_cursos");

let contador_botonCard = 1;


let texto_card1 = document.getElementById("texto_card1_cursos");

//crear evento
botonCard_cursos.addEventListener("click",function(){

    contador_botonCard++;

 // contraer o expandir texto
 if(contador_botonCard % 2 === 0) {

    texto_card1.textContent="¡Aprende a poner tildes de manera sencilla y eficiente con el método SEGA! 📚✨ En este tutorial, te enseñamos las reglas de acentuación y técnicas ortográficas para dominar la gramática en español. ¡No más confusiones! 📝🇪🇸 #Educación #Gramática #Acentuación #Tutorial #LenguaEspañola #AprendizajeEficaz";

    botonCard_cursos.textContent="VER MENOS";

} else {

    texto_card1.textContent="¡Aprende a poner tildes de manera sencilla y eficiente con el método SEGA! 📚✨ En este...";

    botonCard_cursos.textContent="VER MAS";

}

}
);



/*
Listado de productos incluidos en el
HTML generado por medio de una función en Js.
*/


// Array de cursos disponibles
const cursosDisponibles = [
    {
        id: 1,
        nombre: "MÉTODO SEGA PARA APLICAR CORRECTAMENTE LAS TILDES",
        disponible: true,
        link:"https://www.youtube.com/embed/WbCajOsDNPI?si=cY0Q0TMKXkN02D5g"
    },
    {
        id: 2,
        nombre: "Diferentes Formas de Aprendizaje",
        disponible: true,
        link:"https://www.youtube.com/embed/kowrqhxMQ04?si=sQbkh6neLsAH5_er"
    },
    {
        id: 3,
        nombre: "SIGNOS DE PUNTUACIÓN",
        disponible: true,
        link:"https://www.youtube.com/embed/7xv0gmn4Coc?si=hsv_r_IfymycxV9M"
    },
    {
        id: 4,
        nombre: "Cómo Escribir un Ensayo",
        disponible: true,
        link:"https://www.youtube.com/embed/rO4Vhucl1tQ?si=aPg-dQ1g8zrFSeTj"
    },
    {
        id: 5,
        nombre: "El Mito de Prometeo",
        disponible: true,
        link:"https://www.youtube.com/embed/5VIzCJhbEqs?si=1LehtOd1ENr237Sf"
    },
    {
        id: 6,
        nombre: "El Género de Ficción",
        disponible: true,
        link:"https://www.youtube.com/embed/WJBLkxx376U?si=_eFMFdA9wYiG2KZr"
    },
    {
        id: 7,
        nombre: "Estudiar el Libro Cien Años de Soledad",
        disponible: true,
        link:"https://www.youtube.com/embed/rgSAFOnuICM?si=komnRXEaIhqRV_Rz"
    },
    {
        id: 8,
        nombre: "Aprendizaje Visual",
        disponible: true,
        link:"https://www.youtube.com/embed/gcEiwX7JpNs?si=2weyPP3npNUgpfdL"
    },
    {
        id: 9,
        nombre: "Clases de Aprendizaje según la Neurología",
        disponible: true,
        link:"https://www.youtube.com/embed/Wm9WYbvVxaI?si=STu3XBmxKLCcMvvP"
    }
];

 // Función para mostrar los cursos
 function mostrarCursos() {
    
    const listaCursos = document.getElementById('listaCursos');

    // Limpiar elemento HTML base
    listaCursos.innerHTML = '';

    //Crear Lista
    cursosDisponibles.forEach(curso => {
        const li = document.createElement('li');

        //AGREGARLE UNA CLASE CON CSS
        li.className = "curso-item";
        
        //Insertar en el DOM
        li.innerHTML = `
            <a href="${curso.link}" target="_blank"><h3>Curso ${curso.id}: ${curso.nombre}</h3></a>
            <p class="curso-disponible">
                ${curso.disponible ? '✅ Disponible' : '❌ No Disponible'}
            </p>
        `;
        listaCursos.appendChild(li);

    });
}

// capturar botón

let btnDesplegarCursos=document.getElementById('btnMostrarCursos');

// Agregar Listener al botón
btnDesplegarCursos.addEventListener('click', mostrarCursos);

/*
function(){
    btnDesplegarCursos.classList.add('desaparecer');
*/


/*
Ciclo que genera dinámicamente una
lista de productos disponibles y los muestre en la consola
*/

// Mostrar los cursos en la consola con un ciclo ForEach

function mostrarCursosDisponibles() {
    console.log(" ...CURSOS DISPONIBLES... ");
    
    cursosDisponibles.forEach((curso, index) => {

        console.log(`Curso: ${curso.id}`);

        console.log(`Nombre: ${curso.nombre}`);

        console.log(`Estado: ${curso.disponible ? 'Disponible' : 'No disponible'}`);

        console.log("..........");
    });
}

// Mostrar en la consola
mostrarCursosDisponibles();



/*
Función que cree un array de productos y los muestre en la página utilizando una plantilla HTML dinámica.


Consumir una API REST mediante fetch.

Mostrar elementos dinámicos en el HTML a partir de
datos JSON.

*/
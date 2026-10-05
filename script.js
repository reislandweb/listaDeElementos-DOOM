
console.log("--Ejercicio 1 --");
console.log("CREAR LISTA CON DOOM");

//Etiquetas HTML desde JS
const section = document.createElement("section");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");

//Formando estructura HTML desde JS

//Alcar section al body
document.body.appendChild(section);

//Anlcar ul al section

section.appendChild(ul);

//Anlcar li al ul

ul.appendChild(li1);
ul.appendChild(li2);

//Estructura HTML desde JS
console.log(section);



console.log("--Ejercicio 1 bis--");


const datos = ["comprar","barrer","alimentar gato","colada"];

let lista = ""

    for (let i = 0; i < datos.length; i++) {
        lista += `<li>${datos[i]}</li>`
    }

    //Descomentar para ve resultado del bis1
   //ul.innerHTML = lista;
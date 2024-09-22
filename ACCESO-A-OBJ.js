// -- 1. Acceso por notación de punto (dot notation)
// Es la manera más simple y común. 
// Usas el nombre del objeto seguido de un punto y luego el nombre de la propiedad o método.

let persona = {
    nombre: "Mica",
    edad: 27,
    profesion: "Analista de Sistemas"
};

// accedo a propiedades
console.log(persona.nombre); // "Micaela"
console.log(persona.edad);

// modifico propiedades
persona.edad = 28;
console.log(persona.edad); // 28

// -- 2. Acceso por notación de corchetes (bracket notation)
//En esta forma, accedes a la propiedad usando corchetes [], lo cual es útil si la propiedad tiene un nombre
// con espacios o caracteres especiales, o si el nombre de la propiedad se almacena en una variable.

let persona1 = {
    "Nombre completo": "Micaela Cuello",
    edad: 27,
    profesion: "Analista de Sistemas"
};

// accediendo a propiedades
console.log(persona1["Nombre completo"]);

// modificando propiedades
persona1["edad"]=28;
console.log(persona1["edad"]);

// accediendo con variables
let propiedad = "proefesion";
console.log(persona[propiedad]); // Analista de Sistemas

//Comparación:
// •	Notación de punto: Es más legible y común, pero solo puedes usarla si las propiedades 
//no tienen caracteres especiales o espacios.

//•	Notación de corchetes: Es más flexible, ya que puedes usar variables o propiedades con caracteres especiales o espacios.

//Ambas formas permiten tanto leer como modificar propiedades de un objeto.

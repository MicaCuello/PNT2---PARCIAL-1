// -- 1. OBJETO LITERAL

//La forma más simple de crear un objeto es mediante la sintaxis de objeto literal. Es simplemente una lista de pares 
// clave-valor encerrada entre llaves {}.

let persona = { 
nombre: "Micaela", 
edad: 27,
profesion: "Analista de Sistemas" 
}; 
console.log(persona.nombre); // Accediendo a una propiedad


// -- 2. USANDO CONSTRUCTOR new Object()

//Otra manera de crear un objeto es utilizando el constructor del objeto Object().

let persona1 = new Object();
persona.nombre = "Micaela";
persona.edad = 27;
persona.profesion = "Analista de Sistemas";
console.log(persona1.edad);  // Accediendo a una propiedad


// -- 3. USANDO UNA FUNCION CONSTRUCTORA

//Puedes definir una función constructora que actúa como plantilla para crear objetos con las mismas propiedades y métodos.

function Persona(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}
let persona2 = new Persona("Micaela", 27, "Analista de Sistemas");
console.log(persona1.profesion);  // 


// -- 4. USANDO LA CLASE CLAA (sintaxis ES6)

//La sintaxis de clases es una manera más moderna de crear objetos.
// Aporta una estructura más clara para definir objetos complejos.

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
}
let persona3 = new Persona("Micaela", 27, "Analista de Sistemas");
console.log(persona3.nombre);  // Accediendo a una propiedad

// -- 5. USANDO: Object.create()
//Este método crea un nuevo objeto utilizando otro como prototipo.

let prototipoPersona = {
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
let persona4 = Object.create(prototipoPersona);
persona4.nombre = "Micaela";
persona4.saludar();  // Ejecutando un método

//Cada una de estas formas tiene sus aplicaciones dependiendo del contexto.
// La opción de clases es más recomendada hoy en día para crear objetos cuando necesitas trabajar con
// objetos más complejos o reutilizables.


// Propiedades
// Las propiedades son pares clave-valor que definen las características del objeto. 
// Los valores pueden ser de cualquier tipo de dato de JavaScript.

// ---- Tipos de valores que pueden ser propiedades:
// •	Primitivos: valores simples como cadenas, números, booleanos, etc.
let persona0 = {
    nombre: "Micaela",   // String
    edad: 27,            // Número
    "es Estudiante": false,  // Booleano (con comillas para el nombre de la propiedad)
};

// •	Objetos: Una propiedad puede contener otro objeto.
let persona1 = {
    nombre: "Micaela",
    direccion: {
        calle: "Av. Libertador",
        ciudad: "Buenos Aires"
    }
};
// •	Arrays: También puede contener arrays.
let persona2 = {
    nombre: "Micaela",
    hobbies: ["leer", "programar", "viajar"]  // Array
};
// •	Funciones (Métodos): Un objeto puede contener funciones como propiedades, las cuales se llaman métodos. 
// Los métodos son acciones que el objeto puede realizar.
let persona3 = {
    nombre: "Micaela",
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
// -- 2. Métodos
// Los métodos son funciones definidas dentro de un objeto. 
// Se utilizan para describir el comportamiento del objeto. 
//Estos métodos pueden interactuar con las propiedades del objeto usando this.
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function() {
        console.log("El auto " + this.marca + " está arrancando.");
    }
};
auto.arrancar();  // "El auto Toyota está arrancando."


// -- 3. Propiedades dinámicas
// Puedes agregar o modificar propiedades de un objeto después de que ha sido creado.

let persona = { nombre: "Micaela" };
persona.edad = 27;   // Agregar una nueva propiedad
console.log(persona);  // {nombre: "Micaela", edad: 27}


// -- 4. Propiedades heredadas
// Los objetos en JavaScript pueden heredar propiedades de su prototipo. 
// Todos los objetos en JavaScript tienen un prototipo, que es otro objeto del cual pueden heredar propiedades y métodos.
let persona = {
    nombre: "Micaela"
};

console.log(persona.toString());  // "Micaela" hereda el método `toString()` de Object


// 5. -- Valores undefined o null
// una propiedad puede tener un valor undefined (no definido) o null (intencionadamente vacío).
let persona = {
    nombre: "Micaela",
    edad: null  // La propiedad intencionadamente no tiene valor
};

//Resumen de lo que puede contener un objeto:
// •	Cadenas de texto (Strings)
// •	Números
// •	Booleanos
// •	Objetos anidados
// •	Arrays
// •	Funciones (métodos)
// •	Valores especiales como null o undefined
// •	Propiedades heredadas del prototipo
// Esto permite que los objetos en JavaScript sean extremadamente flexibles
// y puedas utilizarlos para representar casi cualquier tipo de entidad o estructura.


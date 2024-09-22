// Puedo acceder a las propiedades modificandolas como vimos en : ACCESO-A-OBJ.js

// Tambien puedo AGREGAR o QUITAR propiedades

// EJEMPLO
let persona = {
    nombre: "Mica",
    edad: 27,
    profesion: "Analista de Sistemas"
};

// 1.Agregar propiedades : 
persona.nacionalidad= "Argentina";
console.log(persona.nacionalidad); // "Argentina"

// 2.Eliminar propiedades:
delete persona.profesion;
console.log(persona.profesion); // Undefined

// 3.Invocar metodos:
let persona = {
    nombre: "Macarron",
    saludar: function(){
        console.log("Hola, soy " + this.nombre);
    }
}
// invoco metodo
persona.saludar(); 

// 4.Iterar sobre un objeto (bucle for)
for (let propiedad in persona){
    console.log(propiedad + " : " + persona[propiedad]);
}

// 5.Ver claves y valores
// obtener todas las claves o valores de un objeto, puedes usar Object.keys() y Object.values().
console.log(Objet.keys(persona));
console.log(Objet.values(persona));
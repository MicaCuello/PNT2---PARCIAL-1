// En JavaScript, las estructuras de código y las funciones son fundamentales para organizar 
// el flujo de un programa. Aquí te explico las principales estructuras de control y cómo se definen
// las funciones.

// ---- ESTRUCTURAS DE CODIGO ----
// a. Condicionales
// Las estructuras condicionales permiten ejecutar código en función de si una condición es verdadera o falsa. 
 let edad = 18;

 if (edad >= 18){
    console.log("Es mayor de edad");
 } else{
    console.log("Es menor de edad ")
 }
 // else if, y SWITCH
  let dia = "lunes";
  switch(dia){
    case "lunes":
        console.log("Es lunes");
        break;
        case "martes":
            console.log("Es martes");
            default:
                console.log("No es lunes, ni martes");
  }
   // b. Bucles (lopps)
   // 1) For :
   for (let i =0; i<5; i++){
    console.log(i);
   }

   // 2) While
   let i = 0;
   do{
    console.log(i);
    i++;
   }while(i<5);

   // 3) For in - For of
   // For in itera sobre las propiedades de un objeto
   let persona = {nombre: "Micaela", edad: 27};

   for(let propiedad in persona){
       console.log(propiedad + ": " + persona[propiedad]);
   }
   
 // For in itera sobre los valores de un iterable como un array
 let numeros = [1,2,3,4];
 for (let numero of numeros){
    console.log(numero);
 }

 // ---- FUNCIONES ----
 // Las funciones son bloques de código que se pueden definir y reutilizar varias veces. 
 // Se pueden declarar de diferentes maneras.

 // a) Funcion tradicional
 function saludar(nomnbre){
    console.log("Hola, " + nombre);
 }
 saludar("Micaela");

 // b) Funciones Anonimas
 let sumar = function(a,b){
    return a+b;
 };
 console.log(sumar(2,3));

 // c) Funciones Flecha ( arrow functions)
 let restar = (a,b) => a-b;
 console.log(restar(5,2));

 // d) Parametros por defecto
 function multiplicar(a,b = 1) {
    return a*b;
 }
 console.log(multiplicar(5)); // 5 porque b toma por defecto el valor de 1

// e) Funciones como argumentos (funciones callback)
// funciones que pueden pasarse como parametro de otras funciones
function procesar (funcion, valor){
    funcion(valor);
}
procesar(saludar, "Micaela");

// d) Funcione scon retornos
// pueden devolver un valor usando return
function suma (a,b){
    return a +b;
}
let resultado = suma(3,4);

// e) Funciones IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Esta funcion se ejecuta inmediatamente")
})();

// Resumen:
// •	Estructuras de control como if, for, while, y switch controlan el flujo del código.
// •	Funciones encapsulan código reutilizable. Pueden ser tradicionales, anónimas o funciones flecha.
// •	Las funciones pueden aceptar parámetros, devolver valores, y ser pasadas como argumentos a 
// otras funciones (callbacks).

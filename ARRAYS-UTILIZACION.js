// En JavaScript, los arrays tienen varios métodos que permiten realizar operaciones comunes
//, como agregar, eliminar o modificar elementos, así como buscar o filtrar elementos.
// A continuación, te explico algunos de los métodos más utilizados, como filter(), pop(), y push(), 
//entre otros.

// 1. Filter()
// El método filter() crea un nuevo array con todos los elementos que pasan una prueba (una función de prueba).
//-- Sintaxis:
Array.filter(funcionCallback);
//-- Ejemplo:
let numeros=[1,2,3,4,5,6];
let numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
});
console.log(numerosPares);
//-- Ejemplo 2 -- con funcion flecha:
let mayoresDeTres = numeros.filter(num => num > 3);
console.log(mayoresDeTres);

// 2. Pop()
// El método pop() elimina el último elemento de un array y lo devuelve. 
// Este método modifica el array original.
// --Sintaxis:
Array.pop();
// --Ejemplo:
let frutas =["manzana", "banana","naranja"]
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);
console.log(frutas);
// El método pop() elimina el último elemento del array ("naranja") 
// y lo devuelve, dejando el array original con los elementos restantes.

// 3.push()
// El método push() agrega uno o más elementos al final de un array 
// y devuelve la nueva longitud del array. Este método también modifica el array original.
// -- Sintaxis:
Array.push(elemento1,elemento2);
// -- Ejemplo:
let colores = ["rojo", "verde"];
let nuevaLongitud = colores.push("azul","amarillo");
console.log(colores);
console.log(nuevaLongitud);
// En este caso, push() agrega "azul" y "amarillo" al final del array 
// y devuelve la nueva longitud del array.

// 4.map()
// El método map() CREA UN NUEVO ARRAY con los resultados de aplicar una función
// a cada elemento del array original.
// -- Ejemplo:
let numeros4 = [1,2,3,4];
let duplicados = numeros.map(function(numero){
    return numero * 2;
});
console.log(duplicados);

// 5.forEach()
// El método forEach() ejecuta una función para cada elemento del array, pero NO DEVUELVE NUEVO ARRAY
// -- Ejemplo:
let nombres = ["Micaela","Macarron","Matias"];
nombres.forEach(function(nombre){
    console.log(nombre);
});

// 6. slice()
// El método slice() devuelve una copia superficial de una parte del array
// dentro de un nuevo array, sin modificar el array original.
// -- Ejemplo:
let animales = ["perro","gato","pajaro","pez"];
let algunosAnimales = anumales.slice(1,3);
console.log(algunosAnimales);

// 7.splice()
// El método splice() cambia el contenido de un array eliminando, reemplazando o agregando elementos.
// -- Ejemplo:
let meses =["enero","febrero","abril"];
meses.splice(2,0,"marzo");
console.log(meses);

//Resumen de los métodos:
//•	filter(): Filtra elementos de un array según una condición.
//•	pop(): Elimina y devuelve el último elemento de un array.
//•	push(): Agrega uno o más elementos al final del array y devuelve la nueva longitud.
//•	map(): Crea un nuevo array aplicando una función a cada elemento.
//•	forEach(): Ejecuta una función por cada elemento sin devolver un nuevo array.
//•	slice(): Crea una copia de una porción del array.
//•	splice(): Modifica el array eliminando o agregando elementos.

//CUANDO SE ESTA MANIPULANDO UN ARRAY
// se manipula un array en JavaScript, se están modificando 
//o interactuando con los datos que contiene el array. Esto puede incluir acciones como:

// 1.	Agregar elementos: Usar métodos como push() o unshift() para añadir elementos al array.
// 2.	Eliminar elementos: Utilizar pop(), shift(), o splice() para eliminar elementos.
// 3.	Modificar elementos: Cambiar el valor de los elementos en un array directamente o con métodos como splice().
// 4.	Buscar elementos: Usar filter(), find(), o indexOf() para encontrar elementos específicos.
// 5.	Recorrer el array: Aplicar forEach(), map(), for, o for...of para ejecutar una acción en cada elemento del array.
// 6.	Transformar el array: Usar métodos como map() para generar un nuevo array basado en las transformaciones de los elementos.

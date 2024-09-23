alert ("Tipos enlazados")

/*

Los tipos de datos se dividen en dos ctegrías: Primitivos y Complejos.

Tipos de datos  primitivos.

1. Datos básicos que no se consideran "objetos" y no tienen "métodos".

Numbre o Número

Representación de valores númericos ya sea enteros o con decimáles (puto flotante).

la forma más recomendada iniciando con minusculs y apartir de la segunda palabra iniciando con mayusculas.

* String o Cadea de Caracteres

Se usa para represenatar texto. El texto se coloca entre comillas dobles o simples "texto".

* Boolean o Boleanos

Estos representan un valor lógico que puede ser true o false.

* Undefined o Indefinido

Es el valor que se le asigna a una variable que ha sido declarada pero no inicializada.

2. Tipos de datos complejos.

* Array o Arreglo

Son un conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arregls se escriben entre corchetes  [ ] y separadps por comas ,

* Objet

Es un conjunto de multiples pares "clave"-"valor". Se escriben entre llaves {} y separados por comas ,

* Functions o Funcioes

Es un tipo de dato que puede ser "invocado". Se declaran con la palabra "function" y el código que ejecutan entre llaves {"codigo"}

*/ 

// Number //
let miNumero = 7
let miNumeroDecimal = 5.766

console. log (miNumero);
console. log (miNumeroDecimal);

// Strings //

let miNombre = "Miguel";
let miApellido = 'Ayala';

console.log (miNombre);
console.log (miApellido);

// Boolean //

let miVerdad = true;
let miMentira = false;

console.log (miVerdad);
console.log (miMentira);

// Undefined //

let x ;  // Declarar una variable sin inicializar //

console.log (x);  //Valor que el usuario introduzca//

// Array //

let misFrutasFavoritas = ["Mango", "Uvas", "Sandia"];
let miNumerosSuerte = ["7", "117", "1888"];
let otroArray = ["Animal", true, 18];

console.log (misFrutasFavoritas);
console.log (miNumerosSuerte);
console.log (otroArray);

/* objeto */

let persona = {
  //clave: valor, 
  nombre : "Miguel",
  edad : 21,
  colorCabello : "castaño" ,
  altura : 1.82,
  peso : undefined,
  vivo : true,
  novia : true,
}

console.log (persona);
// Accedemos a los datos de una clave dentro de un objeto
//Con la notacion de corchetes [].

console.log(persona.nombre) ;
console.log(persona.altura);
console.log(persona.novia);

/* Function */


let mensajito = function () {
  // Pasamos el código que ejecuta la función
  console.log("Este es un mensaje lanzado por una funcion");
}
//invocamos la función
mensajito ();


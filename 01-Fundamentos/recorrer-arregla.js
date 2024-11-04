/* 

Recorrer Arreglos

Podemso acceder a cada  dato de yb arreglo a tráves de su indice. Ya sea ipara obtener el dato o hacer algo con ese indice.

*/

/* Definir con un array */

/* let colores = ["rojo","negro", "verde", "azul", "rosa"] */
/* indice:           0           1             2         3         4*/

/* console.log (colores[0])
console.log (colores[1])
console.log (colores[2]) */
/* console,log ( let i =0 ;i <colores.lenght ; i ++) */
/* Recorrer el array con el bucle for */

/* for (let i = 0 ; i < 3 ; i++ ;) { */
  // código que se ejecuta
/*   console.log ( colores [i] )
} */

/* 

Bucle for...of

Es una manera simple y modern de creccorer arrays en  JS.
Este nos permite acceder directamente al valor de cda elemento sin necesidad de usar indices.

sintaxis

for (const elemento fo nombreArray) {
//Codigo a ejecutar por cada eklemento en el array
]

*/

/* for (const color of colores ) { 
// codigo a ejecutar

console.log (`color: $colores` } )
} */


/* Ejercicio de recorrer un arreglo con for...of */

let mascotas= ["Maki", "Kokoa", "Megara"]

for (const mascota of mascotas) {
  console,log (`mascota : ${mascotas}` )
}
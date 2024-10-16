/* 

Arrelgos o arrays

Son una estroctura de datos que permiten almacenar multiples valores en una sola variables.

Los elementos dentro del array tienen una posición o índice que permite acceder a ellos.

Los índices de los datos comienzan en 0.

Los arrays pueden contener datos de cualquier tipo: numeros, strings, boleanos incluso arrays anidados.

Snitaxis

let nombreArray = [Elemento1, elemento2, elemento3 ]

*/

let frutasFavoritas =["mango", "uva", "durazno" ];
let numerosSuerte = ["5", "15", "7", "8" ];
let meQuiereNoMeQuiere = ["true", "false",  "false", "true"]
let misDatos = ["Miguel", "Ayala", 22, "true"]
let anidandoArrays = [ [054, 104, 117, 321,] , ["Gato", "Perro", "serpiente"],  [true, false, true]
]

/* 

array->["mango", "uva", "durazno" ]
índice->      0           1            2

array->  ["5", "15", "7", "8" ]
índice        0     1     2     3

*/

/* 

Acceder a los elementos de un array

para aceder a un dato usamos la siguiente sintaxis:

nombreArray [indice]

*/
console.log (frutasFavoritas[0])
console.log (numerosSuerte[2])
console.log (anidandoArrays[2] [2] )

/* 
Modificar elementos del array

Para cambiar el valor de cualquier elemento del array usamos la siguiente sintaxis:

nombreArray [indice] = nuevoDato

*/

console.log ( frutasFavoritas )

frutasFavoritas [0] = "pera"

console.log ( frutasFavoritas )

/* 

Metodos utiles para los arrays

Los metodos son "funciones" que trabajan con los datos de los arrays..

Su sintaxis es la siguiente:

1.nombreArray.nombreMetodo
2. nombreArray,.nombremetodo(parametro)

*/

/* 

lenght nos dice cuantos elementos tiene un array

*/

console.log (frutasFavoritas.length)
console.log (numerosSuerte.length)
console.log (anidandoArrays[2].length)

/* 

push() - Agrega un elemento al final del array.

nombreArray.push (dato)

*/

console.log (frutasFavoritas)

frutasFavoritas.push ("sandia");

console.log (frutasFavoritas)

/* 

pop () - Eliminamos el ultimo elemtno del array y lo devuelve

nombreArray.pop()

*/

console.log (numerosSuerte)

let numeroQuitado = numerosSuerte.pop()

console.log (numerosSuerte)

console.log (numeroQuitado)
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

/* 

Unshift()

El metodo unshift lo que hace es que agrega un elemento al inicio del array.

nombreArray.unshift (Elemento nuevo)

*/

console.log (frutasFavoritas);

frutasFavoritas.unshift ("Coco")

console.log (frutasFavoritas);

/* 

Shift ()- Elimina el primer elemento del array y lo devuelve.

nombreArray.shift ()

*/

console.log (numerosSuerte);

numerosSuerte.shift ();
/* let quitarPrimero = numerosSuerte.shift */
console.log (numerosSuerte)

/* 
indexOf(- Encuentra el indice de un elmento en el array

nombreArray.indexOf (dato)

*/

let indice = frutasFavoritas.indexOf ("Pera")

console.log(indice)

/*

splice()- Puede eliminar o agregar elementos al array desde una posicion especifica.

eliminar

nombreArray.splice (indiceInicio, IndiceFinal);

agregar

nombreArray.splice (indiceInicio, pasos, "valor1". "valor2")

*/

console.log (frutasFavoritas);

frutasFavoritas.splice (1,2)

console.log (frutasFavoritas)

frutasFavoritas.splice(1,0, "fresa", "platano" )

/* 

slice()- Crear una copia de una porción del array. No modifica el original, se crea unnuevo array-

nombrearray.slice (indiceInicio, IindiceFinal);

*/

let frutasCopia = frutasFavoritas.slice (3, 5)

console.log(frutasCopia)

/* 
sort()- Ordena los elementos de un array de mayor a menor

nombreArray.sort()- No pasamos dato entre parentesis.

*/
console.log (frutasFavoritas);

frutasFavoritas.sort();

console.log (frutasFavoritas);

console.log (numerosSuerte)

numerosSuerte.sort ();

console.log (numerosSuerte)


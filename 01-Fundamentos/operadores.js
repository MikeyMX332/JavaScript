alert ("operadores")

/* 
*Operadores

Son símbolos utilizados para realizar operaciones sobre valores y variables-

1. Ariméticos
2. Asignación
3. Comparación

*/

/* 
1. Operadores aritmeticos

Se utilizan para realizar cálculos matemáticos

*/

// suma (+): Suma de dos valores

let suma = 16 + 6; //22

console.log (suma); 

// Resta (-): Resta el segundo valor al primero
let resta = 54 - 15; //39
console.log(resta)

//Multiplicación (*): Multiplica los dos valores
let multi = 4 *8; //32
console.log (multi)

// División (/) divide el primer valor por el seguno.
let div= 20 / 4; //5
console.log (div);

//Módulo (%): Devuelve el resto de la división entre dos valores.
let mod = 7 % 2; //1
let mod2 = 9 % 3; //0
console.log (mod2)
console.log (mod);

// Exponenciación (**): Elev un numero  la potencia de otro.
let expo = 3**2; // 9
let expo2 = 5**12; // 
console.log(expo);
console.log(expo2);

// Incremento (++) Incrementa el valor en 1.

let x = 2;
x++;
console.log(x);

// Decremento (--): Decrementa el valor en 1.

let y= 6;
y--; //5
console.log(y)

/* Operdoress de Asignacion

Estos operadores asignan valores a la variables.

*/

// Asignacion (=) Asigna un valor  a una variable.

let w = 45;

//Asignacion con suma (+=): Suma el valor a una varuable y la reasigna.

w+= 5; // 50
console.log(w)

//Asignacion con resta (-=): Resta el valor a una variable y la resigna.

w -=15 //35
console.log (w)

//Asignacion con multiplicacion (*=): Multiplica una variable por un valor y lo reasigna.

w *=2 //70
console.log (w)

//Asignacion con divicion (/=): DIvide una variable por un valor y la reasigna.

w /=10; //7
console.log (w)

/* 
3. Comparacion

Estos operadores comparan dos valores y devuelven "true" o "false".

*/

// Igualdad (==): Compara dos valores para ver si son iguales. NOTA: Sin tener en cuenta el tipo de dato.
let valor = "5";
 
let compara = 5==valor;

console.log (compara) //true

// Igualdad estricta (===): Comparar dos valores y su tipo para ver si son exactamente iguales. NOTA: No toma el mismo tipo de dato.

compara = 5 === valor;
console.log (compara) //false

// Desigualdad: (!=): Verificar si dos valores no son iguales.

let valor1 = 15;
let valor2=10;
//Si dos valores son iguales sale "false" pero si son desiguales saldrá "true"

console.log (valor != valor2)

//Desigualdad estricta: (==!) Verifica dos valores y sus tipos no son exactamente iguales

valor1 ="10"
valor2= 10

console.log(valor1 !== valor2) //true

//Mayor que (>): Verifica si el primer valor es mayor que el segundo.

compara = 10>5
console.log (compara) //true
//NOTA: Si invertimos los valores saldra "false" 

//Mayor o igual que (>=): Verificar si le primer valor es mayor o igual que el segundo
compara = 10 >=5;
console.log(compara) //true
//Nota si ponemos 5>=10 saldra "false" pero si ponemos 5>=5 saldra "true" porque son iguales

//Menor que (<): Verifica el primer valor es menor ue el segundo.

console.log (3<8); //true
console.log (10<8); // false
console.log("5"< 5); //false

// menor o igual que (<=): Verifica si el primer valor es menor o igual que el segundo valor.
console.log(4 <= 10); //true
console.log(20 <= 100) //true
console.log(45 <=7) //false
console.log(8<=8) //true

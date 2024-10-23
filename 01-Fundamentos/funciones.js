/* 

Funciones

Son bloques de código reutilizables, ya que realizan una  tarea especifica.

En lugar de escribir el mismo cdigo una y otra vez, podemos definir una función una sola vez y usarla siempre que la necesitan

Coceptos de las funciones

* Definir: Creamos la funcion con un nombre y los datos que llamamos parámetros.(opcionales)

* Invocan: llamamos la funcion cuando que haga o ejecute su código, es decir que haga su tarea.

* Retorna: Puede devolver un resultado la función. (opcional) "return"

Sintaxis:

function nombreFuncion( param1, param2,) {

//Código que se va a ejecutar.

return resultado; 
}

function -> Palabra clave para declarar una funcion.

nombreFuncion -> El nombre que le asignamos a la función. Este nombre usamos para invocarla.

param1 param2,...-> Son los datos que le pasamos a la función para que  tranaje con ellos en su blooque de código

cuerpo de la función -> El código que se ejecuta y realiza su tarea de la función.

return -> Devuelve o retorna un resultado. (opcional)

*/

function  saludo() {
  console.log("Hola cara de bola! xD")
}

/* saludo(); */

function saludoPersonalizado (nombre) {
console.log(`Hola mi buen ${nombre} uste es batman`)
}

/* saludoPersonalizado("Bruno Diaz")
saludoPersonalizado("Tony Stark")
saludoPersonalizado("Dr Strenge") */

function sumar(a, b) {
  return a+b
}

let resultado = sumar(10, 20);

console.log( resultado * 5 );  
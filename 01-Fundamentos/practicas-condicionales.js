alert ("Enlazado por xd")

/* 
Prácitcas condicionales.

Sigue las instrucciones y escribe el código

1.Declara una variable llama edad y asigarle un valor numerico
2.Imprimir por cosola el valor de la variable edad
3.Con el bloque if es mayor o menor que 18
4.Si la condicion es "true". mostrar por consola "Eres mayor de edad".
5.Agregar otra condicion con "else if". evaluar si edad es menor que 18.
6. Si esta condición es "true", Mostrar por consola: "Eres menor de edad"
7. COn el bloque "else", evalar otro dato y en caso de que las condiciones anteriores "false". mostrar por consola el mensaje "Eres un alien"
8.Dentro de los bloquees if,else if y else, cambiar los "console.log". por "alert"
9.Cambiar el valor de la variable "edad" por un "promt". Para que este dato sea introducido por el usuario y evaluado por las condiciones: promt: (¿que edad tienes?)
*/

let edad= 21;
console.log(edad)
if (edad > 18) { console.log("Eres mayor de edad");
} 

else if (edad < 18) {console.log("Eres menor de edad")}

else { 
  console.log("Eres un alien");
};
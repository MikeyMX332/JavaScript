
/* 
Intrucciones COndicionales if/else if /

1.Crear una variable y asignarle un valor numerico
2.Con las Sentencias if, else if y else, evualuar el valor de la variable sol con las siguientes condiciones:

-sol ==1 // lunes
-sol==2 // Martes
-sol==3// Miercoles
-sol==4// Jueves
-sol==5// Viernes
-sol==?// Día no valido

*/

l/* et sol = 9;

if (sol===1) {
  console.log ("Lunes");
} 
else if (sol === 2) {
  console.log ("Martes");
}
else if (sol===3) {
  console.log ("Miercoles");
}
else if (sol==4) {
  console.log ("Jueves")
}
else if (sol===5){
  console.log ("Viernes")
}
else {
  console.log ("Día no valido")
} */

/* 

Switch

Es una estrotcura de control de flujo condicional, pero se utiliza cuando tenemos multiples casos posibles para evaluar una exprecion.

Es mas eficiente y legible en situaciones se quiere comparar una sola variable con varios valores posibles

Sintaxis:

switch (expresión) {
  case valor 1: 
  //Código que se ejecuta
  braek;
  case valor 2:
    //Código que se ejecuta
    breake;
default:
  //Código que se ejecuta por default
  }
*/
 let dia = 1;

switch (dia) {
    case 1:
    console.log ("Lunes");
    break;
    case 2:
    console, log ("Martes");
    break;
     case 3:
    console.log ("Miercoles");
      break;
      case 4:
      console.log ("Jueves")
      break;
      case 5:
      console.log ("Viernes")
      break;
      default:
       console.log ("Día no valido")
}

/* 
1. Crear una variable pokemon y asognarle un valos string con el nombre de un pokemon

*/

let pokemon = "latios"

switch (pokemon){
  case: "latios":
  console.log (`Tu pokemon es ${pokemon} y es tipo dragon y psiquico`)
  break;
  case "salamance":
  console.log (`Tu pokemon es ${pokemon} y es tipo dragon y acero`)
  break;
  case "chikorita":
  console.log (`Tu pokemon es ${pokemon} y es tipo planta`)
    break;
}


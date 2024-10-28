/* 

Ejercisio funciones

1.- Vamos a definir una variable llamada "heroe" que tenga un dato en "string" con el nombre de un superheroe

2.Definimos una funcion llamada obtenerPoder

3. Esta función recibe el parametro "heroe" que sera valido en el cuerpo de la función.

4. En el cuerpo de la función:

si heroe === "superman" por consola -> "tu poder es superfuerza"
si heroe === "flash" -> "tu poder es supervelocidad" etc.

5. El valor de la variable heroe venga del usuario.

6. Deben cambiar el valod de la variable heroe la asgigne el usuario

*/


let heroe = prompt ("Elige un Heroe!");


function obtenerPoder(heroe) {
  
    if (heroe === "Dr. strange") {
        return "Control del tiempo y hechizos";
    } else if (heroe === "Iron Man") {
        return "Tecnología avanzada y armaduras";
    } else if (heroe === "Thor") {
        return "Control sobre el trueno y la tormenta";
    } else {
        return "Chau chau mongolo";
    }
}

console.log(obtenerPoder(heroe)); 



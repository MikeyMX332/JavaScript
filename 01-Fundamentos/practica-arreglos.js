/* 

Práctica arreglas- Liga Superheroes

1. Definir un arreglo llamado "Heroes" que contenga 5 nombres de super heroes.
2. Agregar un nuevo heroe al final de array
3. Eliminar al primer heroe
4. Cambiamos al 3er heroe por otro mas poderoso
5. Ordenar alfabeticamente el arra "heroes"
6. Crear un nuevo Array llamado enemigos, con los ultimos heroes del array
7. Mostrar por consola los dos arrays: heroes y enemigos

*/

let Heroes = ["Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America"];

Heroes.push("Wonder Woman");

Heroes.shift();

Heroes[2] = "Doctor Strange";

Heroes.sort();

let enemigos = Heroes.splice(2, 5);

console.log("Héroes:", Heroes);
console.log("Enemigos:", enemigos);






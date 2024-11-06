/* 

Objetos

Es una coleccion de propiedades y métodos

Las propiedades describen las caracteristicas del objeto

Los métodos describen los comportamientos del objeto

Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, "undefined", otro objetos e incluso funciones.

Sintaxis;


let nombreObjeto ={
//Propiedades y los métodos
};

Propiedades dentro de un objeto se escriben en pares "clave": "valor"

let nombre = "Mike" //variable

nombre : "Mike" //Propiedad

Las propiedades de un objeto se separan por `,`

Las claves de las propiedades pueden tener más de una plabara. Pero se deberán escribir entre coillas "" 0  ``

"nombre real" = "Mike"

Tambien se pueden escribir en formato Camel Case y sin comillas

nombreReal = "Mike"

*/

/* Definir un objeto */

let personaje ={
  nombre : "Sonic",
  edad: 20,
  residencia : "Blaze",
  poderes: true,
  Habilidadesrotas : ["Valentia" , "Supervelocidad" , "Volverse pelota"]
}

/* Accedemos al valor de las propiedades del objeto */

console.log (personaje.nombre);
/* console.log (personaje[ "Habilidades rotas" ] [2]); */
console.log(personaje.Habilidadesrotas [0])

/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["Eggman", "MetalSonic"]; //Agregar

delete personaje.poderes; //Borrar dato


/* Crear  solitos y solitas un objeto llamado mascota, que tenga propiedades: nombre., 


Anidamos objeto
nombramos al objeto anidado y lo definimos

Metodo;

un metodo es una funcion que se define com prpiedad de un objetomado mascota

sintaxis:

nombreClave: function(parametro) {
//el codigo que se ejecuta
}

this

Es una palabra reservada que se refiere al objeto actual y sirve para acceder a sus proiedades del mismo.

*/
let mascota = {
  nombre : "Maki",
  tipo : "Gato",
  edad: 4 ,

  //Objeto anidado//
 fisico : {
  estatura : 10,
  peso : 4,
  color : "Capuchino",
 },

 /* Declaramos un objeto */
 saludo :  function (esperancito) {
    //Codigo que se ejecuta  al invocar la funcion
    alert (`MIAAAAAAAAAAA Me llamo ${this.nombre} quiero mimir ${esperancito} :3`);
 }

}

   


console.log (mascota.fisico.color)

mascota.fisico.colorOjos = "azules" //agregar

delete mascota.fisico.colorOjos; // Eliminar

/* Accedemos al metodo saludo del objeto mascota */

mascota.saludo ("esperancito");
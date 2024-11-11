/* 

Clases

Una clase en JS es una plantilla para crear objetos-

Es una forma moderna y natural de trabajar con la programcion orientda a objetos.

Los nombres de las clases se recomiendan escribrlas con la primera letra en mayuscula

Método Contructor

El método constructor es un método especial que se ejecuta automáticamente cuando se crea una nueva inasistencia de la clase


Dentro del metoo consturctor, pasamos las propiedades y valores de la clase.

Las propiedades pasan como parametros y luego se asugan con `this`.

Sintaxis basica

class nombreClase {
// Método constuctor 

constructor(par1, par2) {
this.part1=par1;
this.part2=par2; <
}

}


instancia de Clase
PAra crear un objeto usando la clase, utiliza la palabra `new`, esto invoca al consturctor de la clase

+métodos de Clase

Se definen dentro de una clase de una clase y se asignan automaticamente en el "prototipo" del objeto. ESto permite que todas las instancias compartan el mismo metodo

Sintaxis

nombreMétodo ( ) {
//Codigo que se ejecuta

}

*/

//Definir una clase Mascota

class Mascota {
  constructor (nombre, edad) {
    this.nombre=nombre;
    this.edad= edad;
  }
saludo(){
  console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`)
}
}
//Instancear la clase Mascota. Creamos un objeto con la plantilla Mascota.

let mascota1 = new Mascota("Moyo", 15);
let mascota2 = new Mascota("Maki", 2);

//Accedemos a los datos de las intancias

console.log(mascota1.nombre)
console.log(mascota1.edad)

//Lanzar metodo de los objetos

mascota1.saludo ()
mascota2.saludo ()
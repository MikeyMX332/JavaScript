/* 

Practica Clases y Objetos

1. Crea una clase llamada Arma

Debe tener las siguientes propiedadese su contructor:

*nombre (string): nombre del arma
*tipo (string): tipo de arma (Ej. "espada", "pistola", "arco").
daño (numero): Cantidad de daño que puede causar.

Agregar un método llamado describir que imprima en consola:

`Arma: Galadhrim / tipo: Arco / daño 40`

2. Crea un objeto llamada arsenal que contenga:

*Una Propiedad armas que sea un array vacio.
*un método agregarArma que reciba un arma comp parametro y la agrega al array

3. Instancia armas: 
*Crea tres armas usando la clase Arma con diferentes valores para nombre, tipo y daño

4. Agrega las armas al Arsenal
*Usa el método agregaArma del objeto arsenal para agregar cada de las armas del array armas.

5. Mostrar la Descripcion de las Armas:

*Usa un bucle for para recorrer el array.
*En cada interación, llama al método describir de cada arma para mostrar sus detalles en la consola
*/

class Arma {
  constructor(nombre, tipo, daño) {
    this.nombre = nombre; 
    this.tipo = tipo;)
    this.daño = daño;
  }


  describir() {
    console.log(`Arma: ${this.nombre}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Daño: ${this.daño}`);
  }
}


const arsenal = {
  armas: [], 


  agregarArma: function(arma) {
    this.armas.push(arma); 
  }
};


const espada = new Arma("Espada de Hierro", "golpe", 50);
const arco = new Arma("rifle", "A distancia", 30);
const hacha = new Arma("Hacha de Batalla", "Corte", 70);


arsenal.agregarArma(espada);
arsenal.agregarArma(rifle);
arsenal.agregarArma(hacha);


for (let i = 0; i < arsenal.armas.length; i++) {
  arsenal.armas[i].describir();

  
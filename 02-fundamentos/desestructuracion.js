const deadpool = {
    nombre: "wade",
    apellido: "Winston",
    poder: "regeneración",
    // getNombre(){
    //     return `${this.nombre} ${this.apellido} ${this.poder}`;
    // }
}
// const nombre = deadpool.nombre;
const {nombre, apellido, poder} = deadpool;

console.log(nombre, apellido, poder)

const heroes = ["deadpool", "superman", "batman"];

// const h1 = heroes[0];

//desestructuración
const [h1,h2,h3] = heroes;
console.log(h1);
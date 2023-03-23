
const argv = require('./config/yargs')
const {crearArchivo } = require('./helpers/multiplicar');



console.clear();


console.log(argv);

console.log('base: yargs', argv.base, argv.h);

////////Mala practica/////////////////////////
// const [,,arg3 = "base=5"] = process.argv;//
// const [, base=5 ] = arg3.split("=");//////
////////Mala Practica///////////////////////

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, "creado"))
.catch(err => console.log(err));


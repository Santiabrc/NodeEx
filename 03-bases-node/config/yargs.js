const argv = require('yargs')
.option('b', {
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: "es la base de la tabla de multiplicar"
})
.option('l', {
    alias: 'listar',
    type:'boolean',
    default: false,
    describe: "muestra la tabla en consola"
})
.option("h",{
    alias: "hasta",
    type: "numbre",
    default: 10,
    describe: "este es el numero hasta el que tiene que multiplicar"
})
.check((argv, options) => {
    if( isNaN(argv.b)) {
        throw "la base tiene q ser un numero"
    }
    return true;
})
.argv;

module.exports = argv;
import { inquirer } from "inquirer";

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquirerMenu = async() => {
    console.clear();

    console.log("=========================");
    console.log("==Seleccione una opción==");
    console.log("=========================\n");

    const opt = await inquirer.prompt(preguntas);

    return opt;
}

module.exports = {
    inquirerMenu
}
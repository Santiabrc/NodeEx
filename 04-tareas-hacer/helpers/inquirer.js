import "colors";
import inquirer from "inquirer";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que deseas hacer muñeco?".red,
    choices: [
      {
        value: "1",
        name: `${'1.'.red} Crear tarea`,
      },
      {
        value: "2",
        name: `${'2.'.red} Listar tareas`,
      },
      {
        value: "3",
        name: `${'3.'.red} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${'4.'.red} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${'5.'.red} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${'6.'.red} Borrar tarea`,
      },
      {
        value: "0",
        name: `${'0.'.red} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  console.log("=========================".red);
  console.log("==Seleccione una opción==".white);
  console.log("=========================\n".red);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {

    const sarasa = [{
        type: 'input',
        name: 'input',
        message: `presione ${'enter'.green} para continuar`
    }]
    console.log(`\n`)
  await inquirer.prompt(sarasa);
};

const leerInput = async(message) =>{

  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value){
        if(value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];
  const {description} = await inquirer.prompt(question);
  return description;
}

export { inquirerMenu, pausa, leerInput };

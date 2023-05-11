import "colors";
import inquirer from "inquirer";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que deseas hacer muñeco?".red,
    choices: [
      {
        value: 1,
        name: `${"1.".green} Buscar ciudad`,
      },
      {
        value: 2,
        name: `${"2.".green} Historial`,
      },
      {
        value: 0,
        name: `${"0.".green} Salir`,
      }
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
  const sarasa = [
    {
      type: "input",
      name: "input",
      message: `presione ${"enter".green} para continuar`,
    },
  ];
  console.log(`\n`);
  await inquirer.prompt(sarasa);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};

const listadoTareasBorar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`,
    };
  });
  choices.unshift({
    value: '0',
    name: '0.'.green + 'cancelar'
  })

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
    const question = [
      {
        type: 'confirm',
        name: 'ok',
        message
      }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;
}
const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.description}`,
      checked: (tarea.completadoEn) ? true : false
    };
  });

  const pregunta = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(pregunta);
  return ids;
};

export { inquirerMenu, pausa, leerInput, listadoTareasBorar, confirmar, mostrarListadoChecklist };

const empleados = [
    {
        id: 1,
        nombre: "Santiago",
    },
    {
        id: 2,
        nombre: "pepe",

    },
    {
        id: 3,
        nombre: "juan",
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    }
]; 


const getEmpleado = (id) => {

    return new Promise((resolve, reject) =>{

        const empleado = empleados.find(e =>  e.id === id)?.nombre;

        (empleado)
        ? resolve(empleado)
        : reject(`no existe el empleado con id ${id}`);
        


    });
}

const getSalario = (id) => {
    return new Promise ((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario) 
        ?resolve(salario)
        :reject(`No existe el salario para el empleado con id ${id}`);
    });
}; 

const id = 1;

// getEmpleado(id)
//     .then(empleado => console.log(empleado) )
//     .catch ( err => console.log(err));

// getSalario(id).then(salario => console.log(salario)).catch(err => console.log(err));
 

getEmpleado(id)
.then( empleado => {
    getSalario(id)
    .then(salario => {
        console.log("el empleado", empleado, "tiene un salario de: ", salario);
    })
    .catch(err => console.log(err))
})
.catch(err => console.log(err))
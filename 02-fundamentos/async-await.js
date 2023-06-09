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
const id = 3;

const getEmpleado = (id) => {

    return new Promise((resolve, reject) =>{

        const empleado = empleados.find(e =>  e.id === id)?.nombre;

        (empleado)
        ?resolve(empleado)
        :reject(`no existe el empleado con id ${id}`);
        


    });


};


const getSalario = (id) => {
    return new Promise ((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;

        (salario)
        ?resolve(salario)
        :reject(`No existe el salario para el empleado con id ${id}`);
    }
    );
} 

const getInfoUsuario = async(id) => {
    try{
   const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
   return `el salario del empleado ${empleado} es de ${salario}`;}
   catch (error){
    throw error;
   }
}
getInfoUsuario(id)
    .then( msg => console.log(msg))
    .catch(err => console.log(err))




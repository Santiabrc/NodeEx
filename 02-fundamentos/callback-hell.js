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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e =>  e.id === id)?.nombre
if (empleado) {
    callback(null, empleado)

} else {
    callback(`empleado con id ${id} no existe`)
};
};

const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id)?.salario;
    if (salario){
        callback(null, salario)

    } else {
        callback(`empleado sin salario`)
    };

};

getEmpleado(1, (err, empleado)=>{
    if (err){
        console.log("ERROR");
        return console.log(err);
    }

    console.log("empleado existe");
    console.log(empleado)
}
);



getSalario(1, (err, salario) =>{
    if (err){
        console.log("ERROR2");
        return console.log(err);
    }
    console.log("salario OK");
    console.log(salario)
})
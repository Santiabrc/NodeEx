const timeout = 1000;

setTimeout(() => {
    console.log("HOla")
}, timeout);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: "santiago"
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);

}

getUsuarioByID(10, (usuario) =>{
    console.log(usuario)
});
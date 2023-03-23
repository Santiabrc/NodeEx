const fs = require("fs");
const colors = require("colors")

const crearArchivo = async (base = 5, listar = false, hasta= 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      let resultado = i * base;
      salida += `${base} ${"x".green} ${i}  ${"=".green} ${resultado}\n`;
    }
    if (listar) {
      console.log("=======================".green);
      console.log("Tabla del ", base);
      console.log("=======================".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `archivo txt con la tabla del ${base} creado exitosamente`.rainbow;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

import "colors";
import { inquirerMenu, pausa, leerInput }  from "./helpers/inquirer.js";
import { Tareas } from "./models/tareas.js";
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";

const main = async() =>{

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB) {
        //establecer tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTareas(desc);
            break;

            case '2':
                tareas.listadoCompleto()
                
            break;
        }

        guardarDB(tareas.listadoArr);
    
       await pausa();

    } while (opt !== '0');

    
}

main();
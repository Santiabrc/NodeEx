import "colors";
import { inquirerMenu, pausa, leerInput, listadoTareasBorar, confirmar, mostrarListadoChecklist }  from "./helpers/inquirer.js";
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

            
            case '3':
                tareas.listarPendientesCompletads(true)
                
            break;

            
            case '4':
                tareas.listarPendientesCompletads(false)
                
            break;

            case '5': 
            const ids = await mostrarListadoChecklist(tareas.listadoArr);
            console.log(ids);
            
            break;

            case '6': //Borrar
                const id = await listadoTareasBorar(tareas.listadoArr);
                if (id !=='0') {
                    
                
                const ok = await confirmar('estas seguro?');
                if( ok ){
                    tareas.borrarTarea(id);
                    console.log('tarea deleteada')
                }
            }
                
            break;
        }

        guardarDB(tareas.listadoArr);
    
       await pausa();

    } while (opt !== '0');

    
}

main();
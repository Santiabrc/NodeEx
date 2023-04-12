import "colors";
import { inquirerMenu, pausa, leerInput }  from "./helpers/inquirer.js";
import { Tareas } from "./models/tareas.js";

const main = async() =>{
    console.log("hola perro");

    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ');
                console.log(desc)
            break;

            case '2':
                console.log(tareas._listado);
            break;
        }

    

        console.log(tareas)

       await pausa();

    } while (opt !== '0');

    
}

main();
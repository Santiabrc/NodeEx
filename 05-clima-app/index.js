import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";
import 'dotenv/config'


const main = async() => {

    const busquedas = new Busquedas();

    let opt;

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //mostrar mensaje
                const lugar = await leerInput('Ciudad ')
                await busquedas.ciudad(lugar)

                console.log('\ninformación de la ciudad\n'.green)
                console.log('Ciudad:')
                console.log('Ciudad:', '')
                console.log('Lat:')
                console.log('Long')
                console.log('temperatura')

                break;
        
            default:
                break;
        }

        console.log(opt)

        if (opt !== 0) await pausa();

    } while (opt !== 0)

}

main();
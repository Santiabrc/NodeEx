import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js";
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
                const lugares = await busquedas.ciudad(lugar)
                const id = await listarLugares(lugares);
                const lugarSeleccionado = lugares.find(l => l.id === id);


                console.log('\ninformación de la ciudad\n'.green)
                console.log('Ciudad:', lugarSeleccionado.nombre)
                console.log('Lat:', lugarSeleccionado.lat)
                console.log('Long:', lugarSeleccionado.lng)
                console.log('Temperatura actual:')
                console.log('Min:')
                console.log('Max:')

                break;
        
            default:
                break;
        }

        console.log(opt)

        if (opt !== 0) await pausa();

    } while (opt !== 0)

}

main();
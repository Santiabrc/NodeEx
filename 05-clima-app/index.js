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
                if (id === '0') continue;

                const lugarSeleccionado = lugares.find(l => l.id === id);
                
                //guardar en DB
                busquedas.agregarHistorial(lugarSeleccionado.nombre)

                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);
           
                console.clear();
                console.log('\ninformación de la ciudad\n'.green)
                console.log('Ciudad:', lugarSeleccionado.nombre.green)
                console.log('Lat:', lugarSeleccionado.lat)
                console.log('Long:', lugarSeleccionado.lng)
                console.log('Temperatura actual:', clima.temp)
                console.log('Min:', clima.min)
                console.log('Max:', clima.max)
                console.log('Como esta el clima?:', clima.desc.green ) 

                break;
        
                case 2:
                   busquedas.historial.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                   }) 

                break;
        }


        if (opt !== 0) await pausa();

    } while (opt !== 0)

}

main();
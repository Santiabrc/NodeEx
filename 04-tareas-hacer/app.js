import "colors";
import { inquirerMenu, pausa }  from "./helpers/inquirer.js";


console.clear();

const main = async() =>{
    console.log("hola perro");

    let opt = '';

    do{
        opt = await inquirerMenu();
        console.log({opt});

       await pausa();

    } while (opt !== '0');

    
}

main();
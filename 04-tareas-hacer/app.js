require("colors");
import { inquirerMenu } from "../helpers/inquirer.js";



console.clear();

const main = async() =>{
    console.log("hola perro");
    let opt = '';

    do{
        opt = await inquirerMenu;
        console.log({opt});

       

    } while (opt !== '0');

    // pausa();
}

main();
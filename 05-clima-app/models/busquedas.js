import axios from 'axios';


class Busquedas { 
    historial = ['']

    constructor() { 
        //TODO: leer DB si existe
    }

    async ciudad (lugar = ''){
            try {
            //peticion http que traera la ciudad.
            //console.log('ciudad', lugar)
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data)
            
        } catch (error) {
                return [];
            }
       

            return []; //retornar los lugares que coincidan con lugar.
    }


}

export {Busquedas}
import { Tarea } from "../models/tarea.js";

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
                listado.push(tarea);
            
        })
        return listado;
    };

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        });
        
        
    }



    crearTareas(description = '') {
        const tarea = new Tarea(description)

        this._listado[tarea.id] = tarea;
    }
    listadoCompleto(){

        this.listadoArr.forEach((tarea, i) =>{
            const idx = `${i + 1}`.red;
            const {description, completadoEn} = tarea;
            
            const status = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red

            console.log(`${idx} ${description} :::: ${status}`);

        })
    }
}

export {Tareas}
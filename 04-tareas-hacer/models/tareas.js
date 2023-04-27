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

    borrarTarea(id = ''){
       if( this._listado[id]){
            delete this._listado[id];
        }

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
        console.log();
        this.listadoArr.forEach((tarea, i) =>{
            const idx = `${i + 1}`.red;
            const {description, completadoEn} = tarea;
            
            const status = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red

            console.log(`${idx} ${description} :::: ${status}`);

        });
    }
    listarPendientesCompletads(completadas = true){
        
        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea =>{
            
            const {description, completadoEn} = tarea;
            
            const status = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red
            
            if(completadas) {
                //mostrar ciompletadas
                if (completadoEn){
                    contador +=1;
                    console.log(`${contador.toString().green} ${description} :::: ${completadoEn}`);
                }

            }else {
                //mostrar pendientes
                if (!completadoEn){
                    contador +=1;
                    console.log(`${contador.toString().green} ${description} :::: ${status}`);
                }
            }
        
        });
    
    }

    toggleCompletadas(ids = []){
        ids.forEach( id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })
    }
}

export {Tareas}
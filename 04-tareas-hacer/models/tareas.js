import { Tarea } from "../models/tarea.js";

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }
    crearTareas(description = '') {
        const tarea = new Tarea(description)

        this._listado[tarea.id] = tarea;

    }
}

export {Tareas}
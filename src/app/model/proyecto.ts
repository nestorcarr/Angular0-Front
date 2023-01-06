export class Proyecto {
    id: number;
    institucion: string;
    proyecto: string;
    profesion: string;
    logoproyecto: string;
    tema: string;
    temauno: string;
    anio: string;
    estado: string;

    constructor(institucion: string, proyect: string, profesion: string, logoproyecto: string, tema: string, temauno: string, anio: string, estado: string) {

        this.institucion = institucion;
        this.proyecto = proyect;
        this.profesion = profesion;
        this.logoproyecto = logoproyecto;
        this.tema = tema;
        this.temauno = temauno;
        this.anio = anio;
        this.estado = estado;
    }

}

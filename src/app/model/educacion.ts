export class Educacion {
    id!: number;
    universidad: string;
    logo: string;
    titulo: string;
    institucion: string;
    estado: string;

    constructor(universidad: string, logo: string, titulo: string, institucion: string, estado: string) {

        this.universidad = universidad;
        this.logo = logo;
        this.titulo = titulo;
        this.institucion = institucion;
        this.estado = estado;

    }

}

